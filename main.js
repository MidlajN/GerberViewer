import { viewGerber, updateSVG, svgConf, generateSVG, changeSvgColor } from "./convert.js";
import { createPNG } from "./svg2png.js";
import { setupConfig } from "./setup.js";
import './setup.js';
import './navbar.js';
import './style.css';



document.addEventListener('DOMContentLoaded', () => {
  const dropArea = document.getElementById('dropArea');
  const gerberFileInput = document.getElementById('gerberFileInput');
  const renderBtn = document.getElementById('renderButton');
  

  renderBtn.addEventListener('click', async function(){
    const setup = document.getElementById('quickSetup').value;
    const sideToggle = document.getElementById('sideToggle').checked;
    const canvas = document.getElementById('canvas');
    const zipBtn = document.getElementById('zipBtn');

    if (setup === 'generate-all') {
      const canvasBg = document.getElementById('canvasBg');

      for (const key in setupConfig) {
        const option = setupConfig[key];
        const stack = option['svgOptions']['stack'];
        const layerId = option['svgOptions']['layerid'];

        if (!sideToggle && stack !== 'topstack') continue;

        const svg = document.getElementById(stack);
        const svgClone = svg.cloneNode(true);

        const outerLayer = svgClone.querySelector(`#${stack}OuterLayer`);
        outerLayer.style.display = stack === 'topstack' ? ( layerId === 'outline' ? 'block' : 'none') : 'none';

        const clipPath = svgClone.querySelector(`#${stack}MainLayer`).getElementsByTagName('clipPath')[0];
        clipPath.style.display = layerId === 'outline' ? 'block' : 'none';
        
        const layers = svgClone.querySelector(`#${stack}MainLayer`).querySelectorAll('g');
        layers.forEach((layer) => {
          if (layer.hasAttribute("id")) {
            const id = layer.getAttribute('id');
            layer.style.display = id.includes(layerId) ? 'block' : 'none';
          }
        });

        const stackid = svgClone.querySelector(`#${ stack }MainLayer > svg`).getAttribute('data-stackid');
        svgClone.querySelector(`#${ stack }MainLayer > svg`).setAttribute('data-name', option['svgOptions']['dataname']);
        changeSvgColor(svgClone, stackid, option['svgOptions']['updateSvgConfig'][2]);
        
        canvasBg.value = option['svgOptions']['canvasValue'];
        createPNG(svgClone).then((pngDiv) => {
          canvas.insertBefore(pngDiv, canvas.firstChild);
          zipBtn.style.display = 'flex';
        });
      }
    } else {
      // Get the layer Id from the PNG Conversion Button and the SVG Div
      const layerId = renderBtn.getAttribute('data-layer')
      const svgParent = document.getElementById(layerId);
      let svgClone = svgParent.querySelector('svg').cloneNode(true);   // Create a Clone of the SVG from the SVG Div
      
      createPNG(svgClone).then((pngDiv) => {
        canvas.insertBefore(pngDiv, canvas.firstChild);
        zipBtn.style.display = 'flex';
      });

      console.log('svg', svgClone);
    }
  })

  dropArea.addEventListener('dragenter', (e) => {
    e.preventDefault();
    // dropArea.style.border = '2px dashed #ffff';
    dropArea.style.cursor = 'pointer';
  })
  dropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    // dropArea.style.border = '2px dashed #ccc';
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

  const sideToggle = document.getElementById('doubleSideToggle');
  if (sideToggle.classList.contains('layerHidden')) {
    sideToggle.classList.remove('layerHidden')
  } else {
    sideToggle.classList.add('layerHidden')
  }

  document.getElementById('quickSetup').disabled = !document.getElementById('quickSetup').disabled;
} 


function initializeGerberToSVG(files) {
  console.log('files : ', files);
  $('#overlay').fadeIn(function() {
    viewGerber(files)
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


const refreshBtn = document.getElementById('refreshBtn');
refreshBtn.addEventListener('click', () => {

  ['fullLayers', 'toplayer', 'bottomlayer'].forEach(id => { document.getElementById(id).innerHTML = ''; });
  ['fullLayersParent', 'bottomlayers'].forEach(id => { document.getElementById(id).style.display = 'none'; });
  document.getElementById('toplayers').style.display = 'block';

  
  $('#result').fadeOut(300, () => $('#dropArea').fadeIn(300));
  document.getElementById('sideToggle').checked = false;
  toggleButtonState();

  document.querySelectorAll('#layerSelectors button').forEach(button => {
    const style = button.getAttribute('data-initial-style');
    if (style) {
      button.setAttribute('style', style);
      console.log('style', style);
      button.querySelector('i').classList.replace('fa-eye-slash', 'fa-eye');
      button.querySelector('i').style.color = 'white';
    }
  })

  document.getElementById('original').classList.add('active');
  ['bw', 'invert'].forEach(id => { document.getElementById(id).classList.remove('active') })
  
  document.getElementById('canvasBg').value = 'black';
  document.getElementById('selectToolWidth').classList.add('layerHide');
  document.getElementById('toolWidth').value = '0.8';

  $('#buttonContainer').slideUp();
  $('#allLayers,  #bottomlayersbtn').removeClass('active');
  $('#toplayersbtn').addClass('active');

});

