import { updateSVG } from "./convert";

const doubleSideToggle = document.getElementById('sideToggle');

const topLayerDiv = document.getElementById('toplayerlist');
const topLayerButtons = topLayerDiv.querySelectorAll('button');

const bottomLayerDiv = document.getElementById('bottomlayerlist');
const bottomLayerButtons = bottomLayerDiv.querySelectorAll('button');

const commonLayerDiv = document.getElementById('commonlayerlist');
const commonLayerButtons = commonLayerDiv.querySelectorAll('button');

const canvasSelect = document.getElementById('canvasBg');

const setupConfig = {
    'top-trace': {
        button: topLayerButtons[0],
        color: '#ced8cd',
        toggleButtons: [topLayerButtons[1], topLayerButtons[2], commonLayerButtons[0], commonLayerButtons[1]],
        svgOptions: { 
            stack:'topstack', 
            dataname: 'top_layers_bw', 
            layerid: 'top_copper', 
            updateSvgConfig: ['top_layers_bw','bottom_layers_bw','bw'], 
            canvasValue: 'black' 
        },
    },
    'top-drill': {
        button: commonLayerButtons[1],
        color: '#348f9b',
        toggleButtons: [topLayerButtons[0], topLayerButtons[1], topLayerButtons[2], commonLayerButtons[0]],
        svgOptions: { 
            stack:'topstack', 
            dataname: 'top_layers_bw_invert', 
            layerid: 'drill', 
            updateSvgConfig: ['top_layers_bw_invert','bottom_layers_bw_invert','bwInvert'], 
            canvasValue: 'white' 
        },
    },
    'top-cut': {
        button: commonLayerButtons[0],
        color: '#348f9b',
        toggleButtons: [topLayerButtons[0], topLayerButtons[1], topLayerButtons[2], commonLayerButtons[1]],
        svgOptions: { 
            stack:'topstack', 
            dataname: 'top_layers_bw_invert', 
            layerid: 'outline', 
            updateSvgConfig: ['top_layers_bw_invert','bottom_layers_bw_invert','bwInvert'], 
            canvasValue: 'black' 
        },
    },
    'bottom-trace': {
        button: bottomLayerButtons[0],
        color: '#206b19',
        toggleButtons: [bottomLayerButtons[1], bottomLayerButtons[2], commonLayerButtons[0], commonLayerButtons[1]],
        svgOptions: {
            stack: 'bottomstack',
            dataname: 'bottom_layers_bw',
            layerid: 'bottom_copper',
            updateSvgConfig: ['top_layers_bw','bottom_layers_bw','bw'],
            canvasValue: 'black'
        }
    },
    'bottom-cut': {
        button: commonLayerButtons[0],
        color: '#206b19',
        toggleButtons: [bottomLayerButtons[0], bottomLayerButtons[1], bottomLayerButtons[2], commonLayerButtons[1]],
        svgOptions: {
            stack: 'bottomstack',
            dataname: 'bottom_layers_bw_invert',
            layerid: 'outline',
            updateSvgConfig: ['top_layers_bw_invert','bottom_layers_bw_invert','bwInvert'],
            canvasValue: 'black'
        }
    }
}


const setupSelect = document.getElementById('quickSetup');
setupSelect.addEventListener('change', () => {
    const updateButton = (button, bgcolor) => {
        button.querySelector('i').classList.remove('fa-eye-slash');
        button.querySelector('i').classList.add('fa-eye');
        button.querySelector('i').style.color = 'white';
        button.style.backgroundColor = bgcolor;
    }

    const hideLayerButton = (button) => {
        button.querySelector('i').classList.add('fa-eye-slash');
        button.querySelector('i').classList.remove('fa-eye');
        button.querySelector('i').style.color = 'black';
        button.style.backgroundColor = 'transparent';
    }

    const updateSvgForOption = ({ stack, dataname, layerid, updateSvgConfig, canvasValue }) => {
        // Get the SVG element and set the data-name attribute to render button
        const svg = document.getElementById(stack);
        svg.querySelector('g svg[data-stackid]').setAttribute('data-name', dataname);
    
        // Get the G element which include the main pcb layers
        const svgMainG = document.getElementById(`${stack}MainLayer`);
        console.log('svgMainG : ', svgMainG)
        const svgLayers = svgMainG.querySelectorAll('g');
        const clipPath = svg.getElementsByTagName('clipPath')[0];
        clipPath.style.display = layerid === 'outline' ? 'block' : 'none';
    
        // Loop through the G elements and set the specified layer display to block
        Array.from(svgLayers).forEach((layer) => {
            if (layer.hasAttribute("id")) {
                if (layer.getAttribute('id').includes(layerid)) {
                    layer.style.display = 'block';
                } else {
                    layer.style.display = 'none';
                }
            } 
        })
    
        // Update the SVG element
        updateSVG(...updateSvgConfig);
    
        // Change the Value For the Canvas Option Select
        canvasSelect.value = canvasValue

        if (stack === 'topstack') {
            topLayerDiv.classList.remove('layerHidden')
            bottomLayerDiv.classList.add('layerHidden')

            // Show Top Side
            $('#fullLayersParent, #bottomlayers').fadeOut(function(){
                $('#toplayers').fadeIn();
            })

            // Change the Side Choosing Button to Top and remove class active from the rest
            $('#allLayers, #bottomlayersbtn').removeClass('active');
            $('#toplayersbtn').addClass('active');

            // Set the data-layer attribute to the render button
            $('#renderButton').attr('data-layer', 'toplayers')

            
        } else {
            topLayerDiv.classList.add('layerHidden')
            bottomLayerDiv.classList.remove('layerHidden')
        
            $('#fullLayersParent, #toplayers').fadeOut(function(){
                $('#bottomlayers').fadeIn();
            })
    
            // Change the Side Choosing Button to Bottom and remove class active from the rest
            $('#allLayers, #toplayersbtn').removeClass('active');
            $('#bottomlayersbtn').addClass('active');
    
            // Set the data-layer attribute to the render button
            $('#renderButton').attr('data-layer', 'bottomlayers')
        }

        // Show the Button Container
        $('#buttonContainer').slideDown();
        
        if (doubleSideToggle.checked) {
            if (setupSelect.value === 'top-cut') {

                updateButton(commonLayerButtons[2], 'rgb(85 119 89)')
                document.getElementById(`${stack}OuterLayer`).style.display = 'block';

            } else {

                hideLayerButton(commonLayerButtons[2])
                document.getElementById(`${stack}OuterLayer`).style.display = 'none';
            }
        }
    
    }

    const selection = setupConfig[setupSelect.value];
    if (selection) {
        updateButton(selection.button, selection.color);

        selection.toggleButtons.forEach((button) => { hideLayerButton(button) });

        updateSvgForOption(selection.svgOptions);
    }
})


const gerberSection = document.getElementById('gerberSection');
const gerberButtons = gerberSection.querySelectorAll('button');
const gerberSelects = gerberSection.querySelectorAll('select');
const sideToggle = document.getElementById('sideToggle');

const handleEvent = () => {
    setupSelect.value = 'custom-setup';
}

gerberButtons.forEach((button) => button.addEventListener('click', handleEvent));

gerberSelects.forEach((select) => select.addEventListener('change', handleEvent));

sideToggle.addEventListener('change', handleEvent);

