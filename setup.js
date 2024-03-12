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

        const allLayers = document.getElementById('fullstacklayer');
        const allLayersG = allLayers.querySelector('g');
        const Gs = allLayersG.querySelectorAll('g');

        // Loop through the G elements and set the specified layer display to block
        Array.from(Gs).forEach((layer) => {
            if (layer.hasAttribute("id")) {
                if (layer.getAttribute('id').includes(layerid)) {
                    layer.style.display = 'block';
                } else {
                    if (!layer.getAttribute('id').includes(`${stack === 'topstack' ? 'bottom' : 'top'}`)) {
                        layer.style.display = 'none';
                    }
                }
            } 
        })
    
        updateSVG(...updateSvgConfig);  // Update the SVG element
    
        canvasSelect.value = canvasValue;   // Change the Value For the Canvas Option Select

        const isTopStack = stack === 'topstack';
        const divToShow = isTopStack ? topLayerDiv : bottomLayerDiv;
        const divToHide = isTopStack ? bottomLayerDiv : topLayerDiv;

        divToShow.classList.remove('layerHidden')
        divToHide.classList.add('layerHidden')

        $(`#fullLayersParent, #${ isTopStack ? 'bottomlayers' : 'toplayers' }`).fadeOut(function(){
            $(`#${ isTopStack ? 'toplayers' : 'bottomlayers' }`).fadeIn();
        });

        $('#allLayers, #toplayersbtn, #bottomlayersbtn').removeClass('active');
        $(`${isTopStack ? 'top' : 'bottom'}layersbtn`).addClass('active');
        $(`#renderButton`).attr('data-layer', `${ isTopStack ? 'toplayers' : 'bottomlayers' }`);

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

const handleEvent = () => { setupSelect.value = 'custom-setup'; }

gerberButtons.forEach((button) => button.addEventListener('click', (event) => { 
    if (event.target.id !== 'renderButton') {
        handleEvent();
    }
}));

gerberSelects.forEach((select) => select.addEventListener('change', (event) => {
    if (event.target.id !== 'quickSetup') {
        handleEvent();
    } 
}));

sideToggle.addEventListener('change', handleEvent);
