import { updateSVG } from "./convert";



const doubleSideToggle = document.getElementById('sideToggle');
const toolWidthSelect = document.getElementById('toolWidth')

const topLayerDiv = document.getElementById('toplayerlist');
const topLayerButtons = topLayerDiv.querySelectorAll('button');
const bottomLayerDiv = document.getElementById('bottomlayerlist');
const bottomLayerButtons = bottomLayerDiv.querySelectorAll('button');
const commonLayerDiv = document.getElementById('commonlayerlist');
const commonLayerButtons = commonLayerDiv.querySelectorAll('button');

const canvasSelect = document.getElementById('canvasBg');

const sideButtonDiv = document.getElementById('container');
const sideButtons = sideButtonDiv.querySelectorAll('button');

const colorButtonDiv = document.getElementById('buttonContainer');
const colorButtons = colorButtonDiv.querySelectorAll('button');


let svgStyleContent;
const hideLayerButton = (button) => {
    button.querySelector('i').classList.add('fa-eye-slash');
    button.querySelector('i').classList.remove('fa-eye');
    button.querySelector('i').style.color = 'black';
    button.style.backgroundColor = 'transparent';
}

// Update Svg To Traces for select Top-Traces
const updateSvgtoTraces = () => {
    const svg = document.getElementById('topstack');
    const stackid = svg.querySelector('g svg[data-stackid]').getAttribute('data-stackid');
    svg.querySelector('g svg[data-stackid]').setAttribute('data-name', 'top_layers_bw')

    const svgMainG = document.getElementById('topstackMainLayer');
    const svgLayers = svgMainG.querySelectorAll('g');
    const clipPath = svgMainG.getElementsByTagName('clipPath')[0];
    clipPath.style.display = 'none';

    Array.from(svgLayers).forEach((layer) => {
        if (layer.hasAttribute("id")) {
            const layerId = layer.getAttribute("id");
            if (layerId.includes('top_copper')) {
                layer.style.display = 'block';
            } else {
                layer.style.display = 'none';
            }
        }
    })
    
    updateSVG('top_layers_bw', 'bottom_layers_bw', 'bw')

    colorButtons.forEach((button) => {
        if (button.getAttribute('id') === 'bw') {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    })

    canvasSelect.value = 'black';
}


// Update Svg To Drills For the Select Top-Drill
const updateSvgToDrill = () => {
    const svg = document.getElementById('topstack');
    const stackid = svg.querySelector('g svg[data-stackid]').getAttribute('data-stackid');
    svg.querySelector('g svg[data-stackid]').setAttribute('data-name', 'top_layers_bw_invert')

    const svgMainG = document.getElementById('topstackMainLayer');
    const svgLayers = svgMainG.querySelectorAll('g');
    const clipPath = svgMainG.getElementsByTagName('clipPath')[0];
    clipPath.style.display = 'none';

    Array.from(svgLayers).forEach((layer) => {
        if (layer.hasAttribute("id")) {
            const layerId = layer.getAttribute("id");
            if (layerId.includes('top_drill')) {
                layer.style.display = 'block';
            } else {
                layer.style.display = 'none';
            }
        }
    })
    
    updateSVG('top_layers_bw_invert', 'bottom_layers_bw_invert', 'bwInvert')

    colorButtons.forEach((button) => {
        if (button.getAttribute('id') === 'invert') {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    })

    canvasSelect.value = 'white';
}


// Update Svg To Drills For the Select Top-Drill
const updateSvgToCut = () => {
    const svg = document.getElementById('topstack');
    const stackid = svg.querySelector('g svg[data-stackid]').getAttribute('data-stackid');
    svg.querySelector('g svg[data-stackid]').setAttribute('data-name', 'top_layers_bw_invert')

    const svgMainG = document.getElementById('topstackMainLayer');
    const svgLayers = svgMainG.querySelectorAll('g');
    const clipPath = svgMainG.getElementsByTagName('clipPath')[0];
    clipPath.style.display = 'block';

    Array.from(svgLayers).forEach((layer) => {
        if (layer.hasAttribute("id")) {
            const layerId = layer.getAttribute("id");
            if (layerId.includes('outline')) {
                layer.style.display = 'block';
            } else {
                layer.style.display = 'none';
            }
        }
    })
    
    updateSVG('top_layers_bw_invert', 'bottom_layers_bw_invert', 'bwInvert')

    colorButtons.forEach((button) => {
        if (button.getAttribute('id') === 'invert') {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    })

    canvasSelect.value = 'black';
}


// Update Svg To Traces for select Top-Traces
const updateSvgBottomToTraces = () => {
    const svg = document.getElementById('bottomstack');
    const stackid = svg.querySelector('g svg[data-stackid]').getAttribute('data-stackid');
    svg.querySelector('g svg[data-stackid]').setAttribute('data-name', 'bottom_layers_bw')

    const svgMainG = document.getElementById('bottomstackMainLayer');
    const svgLayers = svgMainG.querySelectorAll('g');
    const clipPath = svgMainG.getElementsByTagName('clipPath')[0];
    clipPath.style.display = 'none';

    // const outerLayer = document.getElementById('bottomstackOuterLayer');
    // outerLayer.style.display = 'none';

    Array.from(svgLayers).forEach((layer) => {
        if (layer.hasAttribute("id")) {
            const layerId = layer.getAttribute("id");
            if (layerId.includes('bottom_copper')) {
                layer.style.display = 'block';
            } else {
                layer.style.display = 'none';
            }
        }// gerberSection.addEventListener('click', (event) => {
//     console.log(event.target)
//     if (event.target.id !== 'quickSetup' && event.target.id !== 'renderBtnText') {
//         setupSelect.value = 'custom-setup';
//     }
// })
    })
    
    updateSVG('top_layers_bw', 'bottom_layers_bw', 'bw')

    colorButtons.forEach((button) => {
        if (button.getAttribute('id') === 'bw') {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    })

    canvasSelect.value = 'black';
}


// Update Svg To Cut For Select Bottom-Cut
const updateSvgBottomToCut = () => {
    const svg = document.getElementById('bottomstack');
    const stackid = svg.querySelector('g svg[data-stackid]').getAttribute('data-stackid');
    svg.querySelector('g svg[data-stackid]').setAttribute('data-name', 'bottom_layers_bw_invert')

    const svgMainG = document.getElementById('bottomstackMainLayer');
    const svgLayers = svgMainG.querySelectorAll('g');
    const clipPath = svgMainG.getElementsByTagName('clipPath')[0];
    clipPath.style.display = 'block';

    // const outerLayer = document.getElementById('bottomstackOuterLayer');
    // outerLayer.style.display = 'none';

    svgLayers.forEach((layer) => {
        if (layer.hasAttribute("id")) {
            const layerId = layer.getAttribute("id");
            if (layerId.includes('outline')) {
                layer.style.display = 'block';
            } else {
                layer.style.display = 'none';
            }
        }
    })

    updateSVG('top_layers_bw_invert', 'bottom_layers_bw_invert', 'bwInvert')

    colorButtons.forEach((button) => {
        if (button.getAttribute('id') === 'invert') {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    })
}



const setupSelect = document.getElementById('quickSetup');
setupSelect.addEventListener('change', () => {
    if (setupSelect.value === 'top-trace') {
        topLayerDiv.classList.remove('layerHidden')
        bottomLayerDiv.classList.add('layerHidden')

        topLayerButtons[0].querySelector('i').classList.remove('fa-eye-slash');
        topLayerButtons[0].querySelector('i').classList.add('fa-eye');
        topLayerButtons[0].querySelector('i').style.color = 'white';
        topLayerButtons[0].style.backgroundColor = '#ced8cd';
        // Hide Toggle Buttons Other Than Top Trace
        hideLayerButton(topLayerButtons[1])
        hideLayerButton(topLayerButtons[2])
        hideLayerButton(commonLayerButtons[0])
        hideLayerButton(commonLayerButtons[1])

        updateSvgtoTraces();
        // Show Top Side
        $('#fullLayersParent, #bottomlayers').fadeOut(function(){
            $('#toplayers').fadeIn();
        })

        // Change the Side Choosing Button to Top and remove class active from the rest
        $('#allLayers, #bottomlayersbtn').removeClass('active');
        $('#toplayersbtn').addClass('active');

        // Set the data-layer attribute to the render button
        $('#renderButton').attr('data-layer', 'toplayers')

        // Show the Button Container
        $('#buttonContainer').slideDown();
        

    } else if (setupSelect.value === 'top-drill') {
        topLayerDiv.classList.remove('layerHidden');
        bottomLayerDiv.classList.add('layerHidden');

        commonLayerButtons[1].querySelector('i').classList.remove('fa-eye-slash');
        commonLayerButtons[1].querySelector('i').classList.add('fa-eye');
        commonLayerButtons[1].querySelector('i').style.color = 'white';
        commonLayerButtons[1].style.backgroundColor = '#348f9b';

        // Hide Toggle Buttons Other Than Top Trace
        hideLayerButton(topLayerButtons[0])
        hideLayerButton(topLayerButtons[1])
        hideLayerButton(topLayerButtons[2])
        hideLayerButton(commonLayerButtons[0])
        // hideLayerButton(commonLayerButtons[1])

        updateSvgToDrill();
        // Show Top Side
        $('#fullLayersParent, #bottomlayers').fadeOut(function(){
            $('#toplayers').fadeIn();
        })

        // Change the Side Choosing Button to Top and remove class active from the rest
        $('#allLayers, #bottomlayersbtn').removeClass('active');
        $('#toplayersbtn').addClass('active');

        // Set the data-layer attribute to the render button
        $('#renderButton').attr('data-layer', 'toplayers')

        // Show the Button Container
        $('#buttonContainer').slideDown();
    } else if (setupSelect.value === 'top-cut') {
        topLayerDiv.classList.remove('layerHidden');
        bottomLayerDiv.classList.add('layerHidden');

        commonLayerButtons[0].querySelector('i').classList.remove('fa-eye-slash');
        commonLayerButtons[0].querySelector('i').classList.add('fa-eye');
        commonLayerButtons[0].querySelector('i').style.color = 'white';
        commonLayerButtons[0].style.backgroundColor = '#348f9b';

        // Hide Toggle Buttons Other Than Top Trace
        hideLayerButton(topLayerButtons[0])
        hideLayerButton(topLayerButtons[1])
        hideLayerButton(topLayerButtons[2])
        hideLayerButton(commonLayerButtons[1])

        updateSvgToCut();
        // Show Top Side
        $('#fullLayersParent, #bottomlayers').fadeOut(function(){
            $('#toplayers').fadeIn();
        })
    } else if (setupSelect.value === 'bottom-trace') {
        topLayerDiv.classList.add('layerHidden')
        bottomLayerDiv.classList.remove('layerHidden')

        topLayerButtons[0].querySelector('i').classList.remove('fa-eye-slash');
        topLayerButtons[0].querySelector('i').classList.add('fa-eye');
        topLayerButtons[0].querySelector('i').style.color = 'white';
        topLayerButtons[0].style.backgroundColor = '#206b19';

        // Hide Toggle Buttons Other Than Top Trace
        hideLayerButton(bottomLayerButtons[1])
        hideLayerButton(bottomLayerButtons[2])
        hideLayerButton(commonLayerButtons[0])
        hideLayerButton(commonLayerButtons[1])
        // hideLayerButton(commonLayerButtons[2])

        updateSvgBottomToTraces();
        // Show Bottom Side
        $('#fullLayersParent, #toplayers').fadeOut(function(){
            $('#bottomlayers').fadeIn();
        })

        // Change the Side Choosing Button to Bottom and remove class active from the rest
        $('#allLayers, #toplayersbtn').removeClass('active');
        $('#bottomlayersbtn').addClass('active');

        // Set the data-layer attribute to the render button
        $('#renderButton').attr('data-layer', 'bottomlayers')
        
        // Show the Button Container
        $('#buttonContainer').slideDown();
    } else if (setupSelect.value === 'bottom-cut') {
        topLayerDiv.classList.add('layerHidden')
        bottomLayerDiv.classList.remove('layerHidden')

        commonLayerButtons[0].querySelector('i').classList.remove('fa-eye-slash');
        commonLayerButtons[0].querySelector('i').classList.add('fa-eye');
        commonLayerButtons[0].querySelector('i').style.color = 'white';
        commonLayerButtons[0].style.backgroundColor = '#206b19';

        // Hide Toggle Buttons Other Than Top Trace
        hideLayerButton(bottomLayerButtons[0])
        hideLayerButton(bottomLayerButtons[1])
        hideLayerButton(bottomLayerButtons[2])
        hideLayerButton(commonLayerButtons[1])
        // hideLayerButton(commonLayerButtons[2])

        updateSvgBottomToCut();
        // Show Bottom Side
        $('#fullLayersParent, #toplayers').fadeOut(function(){
            $('#bottomlayers').fadeIn();
        })

        // Change the Side Choosing Button to Bottom and remove class active from the rest
        $('#allLayers, #toplayersbtn').removeClass('active');
        $('#bottomlayersbtn').addClass('active');

        // Set the data-layer attribute to the render button
        $('#renderButton').attr('data-layer', 'bottomlayers')
        
        // Show the Button Container
        $('#buttonContainer').slideDown();
    }
})


function updateSvgForSelect() {

}





















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
