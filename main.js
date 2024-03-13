import { viewGerber, svg2png, updateSVG, svgConf, generateSVG } from "./convert.js";
import './setup.js';
import './style.css';


document.addEventListener('DOMContentLoaded', () => {
  const dropArea = document.getElementById('dropArea');
  const gerberFileInput = document.getElementById('gerberFileInput');
  const renderBtn = document.getElementById('renderButton');

  renderBtn.addEventListener('click', async function(){
    // Get the layer Id from the PNG Conversion Button and the SVG Div
    const layerId = renderBtn.getAttribute('data-layer')
    const svgParent = document.getElementById(layerId);
    let svgClone = svgParent.querySelector('svg').cloneNode(true);   // Create a Clone of the SVG from the SVG Div
    
    const nestedSvgs = svgClone.querySelectorAll('svg');
    const outerSvg = nestedSvgs[0];   // Corresponds to the Outer Layer For the DoubleSide Svg
    const stackSvg = nestedSvgs[1]; // Corresponds to the Main Svg Of the Gerber
    const svgname = stackSvg.getAttribute('data-name');

    const canvasBg = document.getElementById('canvasBg').value;
   
    const drillMask = stackSvg.querySelector('#drillMask');
    const drillMaskPath = drillMask.querySelector('path');
    drillMaskPath.setAttribute('fill', canvasBg === 'black' ? '#ffffff' : '#000000');

    console.log('sg ::', stackSvg)
    if (!document.getElementById('sideToggle').checked){
      svgClone = stackSvg;
    } else {
      outerSvg.setAttribute('style', 'opacity:1;fill:' + (canvasBg === 'black' ? '#ffffff' : '#000000') + ';');
    }
    
    const pngDiv = document.createElement('div');
    pngDiv.classList.add('pngCard');
    console.log('svgClone', svgClone)
    const svgString = new XMLSerializer().serializeToString(svgClone);
    let swidth= parseFloat(svgClone.getAttribute('width'));
    let sheight = parseFloat(svgClone.getAttribute('height'));

    await svg2png(svgString, swidth, sheight).then((canvas) => {
      canvas.setAttribute('style', 'width: 100%; height: 100%;');
      canvas.setAttribute('data-name', svgname);
      pngDiv.appendChild(canvas);
      // Convert canvas to Blob
      canvas.toBlob((pngBlob) => {
        // Create Download Link
        const downloadLink = createDownloadLink(pngBlob, svgname);
        const pngFooter = createPngFooter(svgname, downloadLink, pngDiv);

        pngDiv.appendChild(pngFooter);
      }, "image/png");
      document.getElementById('canvas').appendChild(pngDiv);
      document.getElementById('zipBtn').style.display = 'flex';
    }).catch((err) => {
        console.log('Error : ', err);
    });

    function createDownloadLink(pngBlob, svgname) {
      const link = document.createElement('a');
      link.setAttribute('id', 'pngDownload');
      link.classList.add('pngButton')
      link.download = `${svgname}_1000dpi.png`; 
      link.href = (window.URL || window.webkitURL || window).createObjectURL(pngBlob);
      link.innerHTML = '<i class="fa-solid fa-download"></i>';
      return link
    }

    function createPngFooter(svgname, downloadLink, pngDiv) {
      const footer = document.createElement('div');
      footer.classList.add('pngAnchorDiv');

      const footerP = document.createElement('p');
      footerP.setAttribute('style', 'font-size:10px;margin:0;');
      
      const nameSpan = document.createElement('span');
      nameSpan.setAttribute('class', 'pngName');
      nameSpan.setAttribute('contenteditable', 'true');
      nameSpan.innerHTML = svgname + '_1000dpi';
      nameSpan.addEventListener('input', (e) => {
        downloadLink.download = e.target.textContent;
      })

      const extSpan = document.createElement('span');
      extSpan.innerHTML = '.png';

      const downloadDiv = document.createElement('div');
      downloadDiv.appendChild(downloadLink);

      footerP.appendChild(nameSpan);
      footerP.appendChild(extSpan);

      const deleteButton = document.createElement('a');
      deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
      deleteButton.classList.add('deleteButton');
      downloadDiv.appendChild(deleteButton);
      deleteButton.addEventListener('click', () => {
        pngDiv.remove();
      })

      footer.appendChild(footerP);
      footer.appendChild(downloadDiv);

      return footer
    }
  })

  dropArea.addEventListener('dragenter', (e) => {
    e.preventDefault();
    dropArea.style.border = '2px dashed #ffff';
    dropArea.style.cursor = 'pointer';
  })
  dropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropArea.style.border = '2px dashed #ccc';
  })
  dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
  })
  dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    toggleButtonState();
    initializeGerberToSVG(files);
  })

  gerberFileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    toggleButtonState();
    initializeGerberToSVG(files);
  })
    toggleButtonState(); // Call the toggleButtonState function
});


$('#bw').on('click', () => {
  updateSVG('top_layers_bw', 'bottom_layers_bw', 'bw')
})

$('#invert').on('click', () => {
  updateSVG('top_layers_bw_invert', 'bottom_layers_bw_invert', 'bwInvert')
})

$('#original').on('click', () => {
  updateSVG('top_layers_original', 'bottom_layers_original', 'original')
}) 


// Function to toggle the disabled state of all buttons within the parent div
function toggleButtonState() {
  const parentDiv = document.getElementById('layerSelectors');
  const sideBtnDiv = document.getElementById('container');

  const sideButtons = sideBtnDiv.querySelectorAll('button');
  sideButtons.forEach(button => {
    button.disabled = !button.disabled; // Toggle the disabled state of each button
  });

  const buttons = parentDiv.querySelectorAll('button'); // Select all buttons within the parent div
  buttons.forEach(button => {
    button.disabled = !button.disabled; // Toggle the disabled state of each button
  });

  if (document.getElementById('doubleSideToggle').classList.contains('layerHidden')) {
    document.getElementById('doubleSideToggle').classList.remove('layerHidden')
  } else {
    document.getElementById('doubleSideToggle').classList.add('layerHidden')
  }

  document.getElementById('quickSetup').disabled = !document.getElementById('quickSetup').disabled;
} 


function initializeGerberToSVG(files) {
  console.log('files : ', files);
  $('#overlay').fadeIn(function() {
    viewGerber(files)
  });
}


// --------------------------- NavBar Creation & Manipulation ---------------------------

document.addEventListener('DOMContentLoaded', function() {

  // --------------------------- Navbar Animation ---------------------------
  var tabsNewAnim = $('#navbar-animmenu');
  var activeItemNewAnim = tabsNewAnim.find('.active');
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
      "left": itemPosNewAnimLeft.left + "px",
      "width": activeWidthNewAnimWidth + "px"
  });

  $("#navbar-animmenu").on("click", "li", function(e) {
      $('#navbar-animmenu ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
          "left": itemPosNewAnimLeft.left + "px",
          "width": activeWidthNewAnimWidth + "px"
      });
  });

  // add new Task to the Navbar list
  // const button = document.getElementById('addNewButton');

  // button.addEventListener('click', function() {
  //   const addNewIndex = button.getAttribute('data-sds');
  //   const indexInt = parseInt(addNewIndex);

  //   button.setAttribute('data-sds', indexInt + 1);

  //   if (indexInt + 1 < 10) {
  //     createNewItem();
  //   } else {
  //     createNewItem();
  //     button.style.display = 'none';
  //   }
  // });


  // ---------------- Create New Task in Navbar ----------------
  function createNewItem() {
    const newItem = document.createElement('li');
    const newLink = document.createElement('a');
    const secondLink = document.createElement('a');
    const name = document.createElement('a');
  
    name.setAttribute('contenteditable', 'false');
    name.classList.add('editableName');
    secondLink.style.paddingLeft = '0px';
    newItem.style.width = '130px';
    newItem.style.maxWidth = '130px';
    
    // Set the click event handler for the second link to remove the item
    secondLink.onclick = function() {
      removeItem(this.parentElement);
    };
    
    // Set the double click event handler for the new item to make it editable
    newItem.ondblclick = function() {
      makeEditable(this);
    };

    newLink.style.maxWidth = '30px';
    newLink.innerHTML = '<i class="far fa-file"></i>';
    name.innerHTML = 'New Layer';
    secondLink.innerHTML = '<i class="fa-solid fa-circle-xmark fa-sm" style="position:relative; right:-8px"></i>';
    
    newItem.appendChild(newLink);
    newItem.appendChild(name);
    newItem.appendChild(secondLink);
  
    $('#navbar-animmenu ul li').removeClass('active');
  
    const navbarList = document.querySelector('#navbar-animmenu ul');
    navbarList.appendChild(newItem);
  
    newItem.classList.add('active');
  
    const activeWidth = $(newItem).innerWidth();
    const itemPosLeft = $(newItem).position();
    $('.hori-selector').css({
      left: itemPosLeft.left + 'px',
      width: activeWidth + 'px'
    });
  }
});


// ------------------- Remove The Task from TaskBar -------------------
function removeItem(parent) {
  const addNewButton = document.getElementById('addNewButton');
  const index = parseInt(addNewButton.getAttribute('data-sds'));

  const isActive = $(parent).hasClass("active");
  let parentWidth = $(parent).innerWidth();
  const horiSelectorPositon = $("canvasSelect.value = 'black';.hori-selector").position();
  let newHoriPosition = horiSelectorPositon.left - parentWidth;

  if (newHoriPosition <= 0) {
    newHoriPosition = 10;
    parentWidth -= 10;
  }

  const siblings = $(parent).siblings();
  const parentIndex = $(parent).index();
  const activeIndex = siblings.index(siblings.filter('.active'));

  // Check if the parent element is active or the active element is after the parent element
  if (isActive || activeIndex >= parentIndex) {
    $('.hori-selector').css({
      "left": newHoriPosition + "px",
      "width": parentWidth + "px",
    });

    if (isActive) {
      $(parent).prev().addClass("active");
    }
    $(parent).remove();
    addNewButton.setAttribute('data-sds', index - 1);
  } else {
    $(parent).remove();
  }
  
  if (index === 10) {
      addNewButton.style.display = '';
  }

  addNewButton.setAttribute('data-sds', index - 1);
  // 
}


// ----------------------- Make The Task Name Editable ------------------------
function makeEditable(element) {
  const contentElement = element.querySelector('a[contenteditable]');
  contentElement.setAttribute('contenteditable', 'true');
  contentElement.focus();
  
  // Add event listener for blur (when user clicks outside the element)
  contentElement.addEventListener('blur', function() {
      contentElement.setAttribute('contenteditable', 'false');
  });

  // Add event listener for Enter key
  contentElement.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
          event.preventDefault(); // Prevent newline from being added
          contentElement.blur(); // Trigger blur event to make content uneditable
      }
  });
}


// --------------------------------- Toggle Buttons & Zoom Layer Section ---------------------------------
document.addEventListener('DOMContentLoaded', () => {

  // --------------------------- Zoom The Layer Using Mouse Wheel ---------------------------
  const zoomContainer = document.getElementById('result');
  const zoomedContent = document.getElementById('zoomContainer');
  let zoomLevel = 1;
  const maxZoomLevel = 4

  zoomContainer.addEventListener('wheel', (event) => {
    event.preventDefault();

    const zoomFactor = event.deltaY > 0 ? 0.9 : 1.1; // Adjust the zoom speed

    const rect = zoomedContent.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const offsetX = (mouseX / rect.width) * 100;
    const offsetY = (mouseY / rect.height) * 100;

    const newZoomLevel = zoomLevel * zoomFactor;
    zoomLevel = Math.max(1, Math.min(maxZoomLevel, newZoomLevel)); // Ensure zoom doesn't go below 100%

    zoomedContent.style.transformOrigin = `${offsetX}% ${offsetY}%`;
    zoomedContent.style.transform = `scale(${zoomLevel})`;
  });


  // --------------------------- Toggle Button on Each Layer of the PCB ---------------------------
  const toggleButtons = document.querySelectorAll('.toggleButton');

  toggleButtons.forEach(button => {
    const icon = button.querySelector('i');
    let color = button.style.backgroundColor;
    button.addEventListener('click', () => {
      
      if (icon.classList.contains('fa-eye')) {
        button.style.backgroundColor = 'white';
        icon.style.color = 'black';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        button.style.backgroundColor = color;
        icon.style.color = 'white';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    });
  });


  // --------------------------- Toggle Button Section For the Top and Bottom ---------------------------
  $('#container').on('click', '#allLayers', function() {
    $('#buttonContainer').slideUp();
    $('#toplayersbtn, #bottomlayersbtn').removeClass('active');
    $('#allLayers').addClass('active');
    $('#toplayerlist, #bottomlayerlist').addClass('layerVisible').removeClass('layerHidden');
    $('#toplayers, #bottomlayers').fadeOut(function(){
      $('#fullLayersParent').fadeIn();
    });
  });

  $('#container').on('click', '#toplayersbtn', function() {
    $('#buttonContainer').slideDown();
    $('#allLayers, #bottomlayersbtn').removeClass('active');
    $('#toplayersbtn').addClass('active');
    $('#renderButton').data('data-layer', 'toplayers');
    $('#renderButton').attr('data-layer', 'toplayers');
    $('#bottomlayerlist').removeClass('layerVisible').addClass('layerHidden');
    $('#toplayerlist').removeClass('layerHidden').addClass('layerVisible');
    $('#bottomlayers, #fullLayersParent').fadeOut(function(){
      $('#toplayers').fadeIn();
    });
  });

  $('#container').on('click', '#bottomlayersbtn', function() {
    $('#buttonContainer').slideDown();
    $('#allLayers, #toplayersbtn').removeClass('active');
    $('#toplayerlist').removeClass('layerVisible').addClass('layerHidden');
    $('#bottomlayerlist').removeClass('layerHidden').addClass('layerVisible');
    $('#bottomlayersbtn').addClass('active');
    $('#renderButton').data('data-layer', 'bottomlayers');
    $('#renderButton').attr('data-layer', 'bottomlayers')
    $('#toplayers, #fullLayersParent').fadeOut(function(){
      $('#bottomlayers').fadeIn();
    });
  });
});


// Toggle each layer of the PCB
export function toggleLayer(layerId, index) {

  const allLayers = document.getElementById('fullLayers');
  const topLayers = document.getElementById('toplayers');
  const bottomLayers = document.getElementById('bottomlayers');
  const toggle = document.getElementById('sideToggle').checked;
  const toolwidth = document.getElementById('selectToolWidth');
  const OuterLayer = document.getElementById('doubleSidelist');
  
  const layers = allLayers.getElementsByTagName('g');
  toggleLayerVisibility(layers, layerId);

  if (layerId === 'outline') {
    toggleOutline(topLayers.getElementsByTagName('clipPath'), index);
    toggleOutline(bottomLayers.getElementsByTagName('clipPath'), index);
  } else {
    toggleLayerVisibility(topLayers.getElementsByTagName('g'), layerId);
    toggleLayerVisibility(bottomLayers.getElementsByTagName('g'), layerId);

    const toggleOuterClass = (element, isHidden) => {
      if (isHidden) {
        element.classList.add('layerHidden');
      } else {
        element.classList.remove('layerHidden');
      }
    };

    toggleOuterClass(OuterLayer, !toggle);
    toggleOuterClass(toolwidth, !toggle);
  }
}

function toggleOutline(layer, index) {
  layer.item(index).style.display = layer.item(index).style.display === 'none' ? 'block' : 'none';
}

function toggleLayerVisibility(layers, layerId) {
  Array.from(layers).forEach((layer) => {
    if (layer.hasAttribute('id')) {
      const currentLayerId = layer.getAttribute('id');
      if (currentLayerId.includes(layerId)) {
        layer.style.display = layer.style.display === 'none' ? 'block' : 'none';
      }
    }
  });
}

window.toggleLayer = toggleLayer; // Make it available in the global scope


// ------------------- select option for the toolwidth ----------------------
const selectToolwidth = document.getElementById('toolWidth');

selectToolwidth.addEventListener('change', ()=>{
  const toolwidth = parseFloat(selectToolwidth.value)
  
  const svgs = [
    document.getElementById('fullstack'),
    document.getElementById('topstack'),
    document.getElementById('bottomstack')
  ]

  svgs.forEach(svg => updateToolWidth(svg, svg.getAttribute('id')))

  function updateToolWidth(svg, id) {

    const svgG = svg.querySelectorAll('g');
    const newSvg = generateSVG(svgConf.svgWidth, svgConf.svgHeight, toolwidth, {x : svgConf.viewboxX, y : svgConf.viewboxY});
    newSvg.svg.setAttribute('style', 'fill : #86877c;opacity: 0.3;');
    newSvg.svg.setAttribute('id', `${id}OuterSvg`)

    svg.setAttribute('width', `${newSvg.width}mm`);
    svg.setAttribute('height', `${newSvg.height}mm`);
    svgG[0].querySelector('svg').replaceWith(newSvg.svg);
    svgG[1].setAttribute('transform', `translate(${toolwidth == 0.8 ? 3 : 0}, ${toolwidth == 0.8 ? 3 : 0})`);
  
  }
})

const sideToggle = document.getElementById('sideToggle');
sideToggle.addEventListener('change', () => {
  const select = document.getElementById('selectToolWidth');
  const bottomBtn = document.getElementById('bottomlayersbtn');
  const setupList = document.getElementById('quickSetup');

  if (sideToggle.checked) {
    toggleLayer('OuterLayer')

    setupList.querySelectorAll('.bottomSetup').forEach((element) => {
      element.removeAttribute('disabled');
    });

    select.classList.remove('layerHide');
    bottomBtn.classList.remove('layerHide');
  } else {
    const outerSvgs = [
      document.getElementById('fullstackOuterLayer'),
      document.getElementById('topstackOuterLayer'),
      document.getElementById('bottomstackOuterLayer')
    ]
    outerSvgs.forEach(svg => svg.style.display = 'none');

    const layerList = document.getElementById("doubleSidelist");
    const layerBtn = layerList.querySelector('button')
    const i = layerBtn.querySelector('i');
    if (i.classList.contains('fa-eye-slash')) {
      i.classList.remove('fa-eye-slash');
      i.classList.add('fa-eye');
      i.style.color = 'white';
      layerBtn.style.backgroundColor = 'rgb(85 119 89)';
    }
    layerList.classList.add('layerHidden');

    setupList.querySelectorAll('.bottomSetup').forEach((element) => {
      element.setAttribute('disabled', 'true');
    });

    select.classList.add('layerHide');
    bottomBtn.classList.add('layerHide');
  }
});