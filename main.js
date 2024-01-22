import { viewGerber, svg2png } from "./convert.js";

let original = document.getElementById('original');
let bw = document.getElementById('bw');
let bwInvert = document.getElementById('invert');

bw.addEventListener('click', () => {
  $('.colorButton').removeClass('active');
  bw.classList.add('active');
  let svgTop = document.getElementById('topstacklayer');
  let svgBottom = document.getElementById('bottomstacklayer');

  let svgTopStyle = svgTop.querySelector('style');
  let svgBottomStyle = svgBottom.querySelector('style');

  svgTop.setAttribute('data-name', 'top_layers_bw');
  svgBottom.setAttribute('data-name', 'bottom_layers_bw');

  const stackid = svgTop.getAttribute('data-stackid')

  if (svgTopStyle && svgBottomStyle) {
    const svgStyleContent = `
    .${stackid}_fr4 {color: #000000  !important;}
    .${stackid}_cu {color: #ffffff !important;}
    .${stackid}_cf {color: #ffffff !important;}
    .${stackid}_sm {color: #ffffff; opacity: 0 !important;}
    .${stackid}_ss {color: #ffffff !important;}
    .${stackid}_sp {color: #ffffff !important;}
    .${stackid}_out {color: #000000 !important;}
    `
    svgTopStyle.textContent = svgStyleContent;
    svgBottomStyle.textContent = svgStyleContent;
  }
  // const toplayer = document.getElementById('toplayer');
  // toplayer.innerHTML = '';
  // const bottomlayer = document.getElementById('bottomlayer');
  // bottomlayer.innerHTML = '';

  // const svgTopClone = svgTop.cloneNode(true);
  // const svgBottomClone = svgBottom.cloneNode(true);
  
  // toplayer.appendChild(svgTopClone);
  // bottomlayer.appendChild(svgBottomClone);
  
})

bwInvert.addEventListener('click', () => {
  $('.colorButton').removeClass('active');
  bwInvert.classList.add('active');
  let svgTop = document.getElementById('topstacklayer');
  let svgBottom = document.getElementById('bottomstacklayer'); 

  let svgTopStyle = svgTop.querySelector('style');
  let svgBottomStyle = svgBottom.querySelector('style');

  svgTop.setAttribute('data-name', 'top_layers_bw_invert');
  svgBottom.setAttribute('data-name', 'bottom_layers_bw_invert');

  const stackid = svgTop.getAttribute('data-stackid')

  if (svgTopStyle && svgBottomStyle) {
    const svgStyleContent = `
    .${stackid}_fr4 {color: #ffffff  !important;}
    .${stackid}_cu {color: #000000 !important;}
    .${stackid}_cf {color: #000000 !important;}
    .${stackid}_sm {color: #ffffff; opacity: 0 !important;}
    .${stackid}_ss {color: #000000 !important;}
    .${stackid}_sp {color: #000000 !important;}
    .${stackid}_out {color: #ffffff !important;}
    `
    svgTopStyle.textContent = svgStyleContent;
    svgBottomStyle.textContent = svgStyleContent;
  }
  // const toplayer = document.getElementById('toplayer');
  // toplayer.innerHTML = '';
  // const bottomlayer = document.getElementById('bottomlayer');
  // bottomlayer.innerHTML = '';

  // const svgTopClone = svgTop.cloneNode(true);
  // const svgBottomClone = svgBottom.cloneNode(true);
  
  // toplayer.appendChild(svgTopClone);
  // bottomlayer.appendChild(svgBottomClone);
  
})

original.addEventListener('click', () => {
  $('.colorButton').removeClass('active');
  original.classList.add('active');
  let svgTop = document.getElementById('topstacklayer');
  let svgBottom = document.getElementById('bottomstacklayer'); 
  let svgTopStyle = svgTop.querySelector('style');
  let svgBottomStyle = svgBottom.querySelector('style');
  const stackid = svgTop.getAttribute('data-stackid')

  if (svgTopStyle && svgBottomStyle) {
    const svgStyleContent = `
    .${stackid}_fr4 {color: #666666  !important;}
    .${stackid}_cu {color: #cccccc !important;}
    .${stackid}_cf {color: #cc9933 !important;}
    .${stackid}_sm {color: #004200 !important; opacity: 0.75 !important;}
    .${stackid}_ss {color: #ffffff !important;}
    .${stackid}_sp {color: #999999 !important;}
    .${stackid}_out {color: #000000 !important;}
    `
    svgTopStyle.textContent = svgStyleContent;
    svgBottomStyle.textContent = svgStyleContent;
  }
  const toplayer = document.getElementById('toplayer');
  // toplayer.innerHTML = '';
  const bottomlayer = document.getElementById('bottomlayer');
  // bottomlayer.innerHTML = '';

  // const svgTopClone = svgTop.cloneNode(true);
  // const svgBottomClone = svgBottom.cloneNode(true);
  
  // toplayer.appendChild(svgTopClone);
  // bottomlayer.appendChild(svgBottomClone);
  
})


document.addEventListener('DOMContentLoaded', () => {
  const dropArea = document.getElementById('dropArea');
  const gerberFileInput = document.getElementById('gerberFileInput');
  const renderBtn = document.getElementById('renderButton');

  renderBtn.addEventListener('click', function(){
    const layerId = renderBtn.getAttribute('data-layer')
    const svgParent = document.getElementById(layerId);
    const svg = svgParent.querySelector('svg');
    const svgname = svg.getAttribute('data-name')
    const pngDiv = document.createElement('div');
    pngDiv.classList.add('pngCard');
    const svgString = new XMLSerializer().serializeToString(svg);
    svg2png(svgString).then((canvas) => {
      canvas.setAttribute('style', 'width: 100%; height: 100%;');
      canvas.setAttribute('data-name', svgname);
      pngDiv.appendChild(document.createElement('div').appendChild(canvas));
      // Convert canvas to Blob
      canvas.toBlob((pngBlob) => {
          // Create a download link for the PNG Blob
          const downloadLink = document.createElement('a');
          downloadLink.href = (window.URL || window.webkitURL || window).createObjectURL(pngBlob);

          downloadLink.download = svgname + '_1500dpi.png'; 
          downloadLink.innerHTML = '<button class="pngButton"><i class="fa-solid fa-download"></i></button>';

          const pngAnchor = document.createElement('div');
          pngAnchor.classList.add('pngAnchorDiv');
          pngAnchor.innerHTML = `<p style="font-size:10px;margin:0;">${svgname}_1500dpi.png</p>`;
          pngAnchor.appendChild(downloadLink);
          pngDiv.appendChild(pngAnchor);
        }, "image/png");
        document.getElementById('canvas').appendChild(pngDiv);
        document.getElementById('zipBtn').style.display = 'flex';
    }).catch((err) => {
        console.log('Error : ', err);
    });
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

const parentDiv = document.getElementById('layerSelectors');
// Function to toggle the disabled state of all buttons within the parent div
function toggleButtonState() {
  const buttons = parentDiv.querySelectorAll('button'); // Select all buttons within the parent div
  buttons.forEach(button => {
    button.disabled = !button.disabled; // Toggle the disabled state of each button
  });
} 


function initializeGerberToSVG(files) {
  console.log('files : ', files);
  $('#overlay').fadeIn(function() {
    viewGerber(files)
  });
}


// __________________________ NavBar Creation & Manipulation ________________________

document.addEventListener('DOMContentLoaded', function() {

  // ----------- Navbar Animation -----------
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
  const button = document.getElementById('addNewButton');

  button.addEventListener('click', function() {
    const addNewIndex = button.getAttribute('data-sds');
    const indexInt = parseInt(addNewIndex);

    button.setAttribute('data-sds', indexInt + 1);

    if (indexInt + 1 < 10) {
      createNewItem();
    } else {
      createNewItem();
      button.style.display = 'none';
    }
  });


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
  const horiSelectorPositon = $(".hori-selector").position();
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

// ____________________________________ End Of NavBar _______________________________________



// _________________________------ Toggle Buttons & Zoom Layer Section ------________________________

document.addEventListener('DOMContentLoaded', () => {

  // ##### Zoom The Layer Using Mouse Wheel #####
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


  // ##### Toggle Button on Each Layer of the PCB #####
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


  // ##### Toggle Button Section For the Top and Bottom #####
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

// ##### Toggle Each Layer Of the  PCB #####
export function toggleLayer(LayerId, index) {
  console.log('LayerId : ', LayerId);
  const top = document.getElementById("toplayers");
  const bottom = document.getElementById("bottomlayers");
  const allLayers = document.getElementById("fullLayers");

  const Layers = allLayers.getElementsByTagName("g");
  const topLayers = top.getElementsByTagName("g");
  const bottomLayers = bottom.getElementsByTagName("g");

  Array.from(topLayers).forEach((layer) => {
    if (layer.hasAttribute("id")) {
      const layerId = layer.getAttribute("id");
      if (layerId.endsWith(LayerId)) {
        layer.style.display = layer.style.display === "none" ? "block" : "none";
        
      }
    }
  });
  Array.from(bottomLayers).forEach((layer) => {
    if (layer.hasAttribute("id")) {
      const layerId = layer.getAttribute("id");
      if (layerId.endsWith(LayerId)) {
        layer.style.display = layer.style.display === "none" ? "block" : "none";
      }
    }
  });
  Array.from(Layers).forEach((layer) => {
    if (layer.hasAttribute("id")) {
      const layerId = layer.getAttribute("id");
      if (layerId.endsWith(LayerId)) {
        layer.style.display = layer.style.display === "none" ? "block" : "none";
      }
    }
  })
}
window.toggleLayer = toggleLayer; // Make it available in the global scope

// __________________________________ End Of Toggle Buttons & Zoom Layer Section __________________________________


// // 
// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById('renderButton').addEventListener('click', function(){
//     const svgParent = document.getElementById('toplayer');
//     const svg = svgParent.querySelector('svg');
//     const svgname = svg.getAttribute('data-name')
//     const pngDiv = document.createElement('div');
//     pngDiv.classList.add('pngCard');
//     const svgString = new XMLSerializer().serializeToString(svg);
//     svg2png(svgString).then((canvas) => {
//       canvas.setAttribute('style', 'width: 100%; height: 100%;');
//       canvas.setAttribute('data-name', svgname);
//       pngDiv.appendChild(document.createElement('div').appendChild(canvas));
//       // Convert canvas to Blob
//       canvas.toBlob((pngBlob) => {
//           // Create a download link for the PNG Blob
//           const downloadLink = document.createElement('a');
//           downloadLink.href = (window.URL || window.webkitURL || window).createObjectURL(pngBlob);

//           downloadLink.download = svgname + '_1500dpi.png'; 
//           downloadLink.innerHTML = '<button class="pngButton"><i class="fa-solid fa-download"></i></button>';

//           const pngAnchor = document.createElement('div');
//           pngAnchor.classList.add('pngAnchorDiv');
//           pngAnchor.innerHTML = `<p style="font-size:10px;margin:0;">${svgname}_1500dpi.png</p>`;
//           pngAnchor.appendChild(downloadLink);
//           pngDiv.appendChild(pngAnchor);
//         }, "image/png");
//         document.getElementById('canvas').appendChild(pngDiv);
//         document.getElementById('zipBtn').style.display = 'flex';
//     }).catch((err) => {
//         console.log('Error : ', err);
//     });
//   })
// })