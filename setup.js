const setupSelect = document.getElementById('quickSetup');

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

const hideLayerButton = (button) => {
    button.querySelector('i').classList.add('fa-eye-slash');
    button.querySelector('i').style.color = 'black';
    button.style.backgroundColor = 'transparent';
}

const updateSvgtoTraces = () => {
    const svg = document.getElementById('topstack');
    const stackid = svg.querySelector('g svg[data-stackid]').getAttribute('data-stackid');

    const svgMainG = document.getElementById('topstackMainLayer');
    const svgG = svgMainG.querySelectorAll('g');

    Array.from(svgG).forEach((layer) => {
        if (layer.hasAttribute("id")) {
            const layerId = layer.getAttribute("id");
            if (layerId.includes('top_copper')) {
                layer.style.display = 'block';
            } else {
                layer.style.display = 'none';
            }
        }
    })
    
    const defs = svgMainG.querySelector('style');
    console.log('defs : ', defs);
    const svgStyleContent = `
    .${stackid}_fr4 {color: #000000  !important;}
    .${stackid}_cu {color: #ffffff !important;}
    .${stackid}_cf {color: #ffffff !important;}
    .${stackid}_sm {color: #ffffff; opacity: 0 !important;}
    .${stackid}_ss {color: #ffffff !important;}
    .${stackid}_sp {color: #ffffff !important;}
    .${stackid}_out {color: #000000 !important;}
    `

    defs.innerHTML = svgStyleContent
    

}


setupSelect.addEventListener('change', () => {
    if (setupSelect.value === 'top-trace') {
        bottomLayerDiv.classList.add('layerHidden')

        // Hide Toggle Buttons Other Than Top Trace
        hideLayerButton(topLayerButtons[1])
        hideLayerButton(topLayerButtons[2])
        hideLayerButton(commonLayerButtons[0])
        hideLayerButton(commonLayerButtons[1])

        updateSvgtoTraces();
        // Show Top Trace
        $('#fullLayersParent, #bottomlayers').fadeOut(function(){
            $('#toplayers').fadeIn();
        })

        // Change the Side Choosing Button to Top and remove class active from the rest
        $('#allLayers, #bottomlayersbtn').removeClass('active');
        $('#toplayersbtn').addClass('active');

        // Set the data-layer attribute to the render button
        $('#renderButton').attr('data-layer', 'checklayers')

        // Show the Button Container
        $('#buttonContainer').slideDown();
        

    }
})

