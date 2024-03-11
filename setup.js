import { updateSVG } from "./convert";

const doubleSideToggle = document.getElementById('sideToggle');

const topLayerDiv = document.getElementById('toplayerlist');
const topLayerButtons = topLayerDiv.querySelectorAll('button');
const bottomLayerDiv = document.getElementById('bottomlayerlist');
const bottomLayerButtons = bottomLayerDiv.querySelectorAll('button');
const commonLayerDiv = document.getElementById('commonlayerlist');
const commonLayerButtons = commonLayerDiv.querySelectorAll('button');

const canvasSelect = document.getElementById('canvasBg');


const hideLayerButton = (button) => {
    button.querySelector('i').classList.add('fa-eye-slash');
    button.querySelector('i').classList.remove('fa-eye');
    button.querySelector('i').style.color = 'black';
    button.style.backgroundColor = 'transparent';
}


const setupSelect = document.getElementById('quickSetup');
setupSelect.addEventListener('change', () => {
    const updateButton = (button, bgcolor) => {
        button.querySelector('i').classList.remove('fa-eye-slash');
        button.querySelector('i').classList.add('fa-eye');
        button.querySelector('i').style.color = 'white';
        button.style.backgroundColor = bgcolor;
    }

    const updateSvgForOption = (id, dataname, layerid, updateSvgConfig, canvasValue) => {
        // Get the SVG element and set the data-name attribute to render button
        const svg = document.getElementById(id);
        svg.querySelector('g svg[data-stackid]').setAttribute('data-name', dataname);
    
        // Get the G element which include the main pcb layers
        const svgMainG = document.getElementById(`${id}MainLayer`);
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

        if (id === 'topstack') {
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

                updateButton(commonLayerButtons[2])
                document.getElementById(`${id}OuterLayer`).style.display = 'block';

            } else {

                hideLayerButton(commonLayerButtons[2])
                document.getElementById(`${id}OuterLayer`).style.display = 'none';
            }
        }
    
    }

    if (setupSelect.value === 'top-trace') {

        updateButton(topLayerButtons[0], '#ced8cd')

        // Hide Toggle Buttons Other Than Top Trace
        hideLayerButton(topLayerButtons[1])
        hideLayerButton(topLayerButtons[2])
        hideLayerButton(commonLayerButtons[0])
        hideLayerButton(commonLayerButtons[1])

        updateSvgForOption('topstack', 'top_layers_bw', 'top_copper', ['top_layers_bw','bottom_layers_bw','bw'], 'black');
    
    } else if (setupSelect.value === 'top-drill') {

        updateButton(commonLayerButtons[1], '#348f9b')

        // Hide Toggle Buttons Other Than Top Trace
        hideLayerButton(topLayerButtons[0])
        hideLayerButton(topLayerButtons[1])
        hideLayerButton(topLayerButtons[2])
        hideLayerButton(commonLayerButtons[0])

        updateSvgForOption('topstack', 'top_layers_bw_invert', 'drill', ['top_layers_bw_invert','bottom_layers_bw_invert','bwInvert'], 'white');

    } else if (setupSelect.value === 'top-cut') {

        updateButton(commonLayerButtons[0], '#348f9b')
        updateButton(commonLayerButtons[2], 'rgb(85, 119, 89)')

        // Hide Toggle Buttons Other Than Top Trace
        hideLayerButton(topLayerButtons[0])
        hideLayerButton(topLayerButtons[1])
        hideLayerButton(topLayerButtons[2])
        hideLayerButton(commonLayerButtons[1])

        updateSvgForOption('topstack', 'top_layers_bw_invert', 'outline', ['top_layers_bw_invert','bottom_layers_bw_invert','bwInvert'], 'black');

    } else if (setupSelect.value === 'bottom-trace') {

        updateButton(bottomLayerButtons[0], '#206b19')

        // Hide Toggle Buttons Other Than Top Trace
        hideLayerButton(bottomLayerButtons[1])
        hideLayerButton(bottomLayerButtons[2])
        hideLayerButton(commonLayerButtons[0])
        hideLayerButton(commonLayerButtons[1])

        updateSvgForOption('bottomstack', 'bottom_layers_bw', 'bottom_copper', ['top_layers_bw','bottom_layers_bw','bw'], 'black');

    } else if (setupSelect.value === 'bottom-cut') {

        updateButton(commonLayerButtons[0], '#206b19')

        // Hide Toggle Buttons Other Than Top Trace
        hideLayerButton(bottomLayerButtons[0])
        hideLayerButton(bottomLayerButtons[1])
        hideLayerButton(bottomLayerButtons[2])
        hideLayerButton(commonLayerButtons[1])

        updateSvgForOption('bottomstack', 'bottom_layers_bw_invert', 'outline', ['top_layers_bw_invert','bottom_layers_bw_invert','bwInvert'], 'black');

    }
})

const gerberSection = document.getElementById('gerberSection');
const gerberButtons = gerberSection.querySelectorAll('button');
const gerberSelects = gerberSection.querySelectorAll('select');
gerberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.id !== 'renderBtnText') {
            setupSelect.value = 'custom-setup';
        }
    })
})

gerberSelects.forEach((select) => {
    select.addEventListener('change', (event) => {
        console.log(event.target.id)
        if (event.target.id !== 'quickSetup') {
            setupSelect.value = 'custom-setup';
        }
    })
})

document.getElementById('sideToggle').addEventListener('change', () => {
    setupSelect.value = 'custom-setup';
})
