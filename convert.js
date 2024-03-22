let svg_width = null
let svg_height = null
let svg_outer_width = null
let svg_outer_height = null

export let svgConf = {
  svgWidth : null,
  svgHeight : null,
  viewboxX : null,
  viewboxY : null,
  viewboxW : null,
  viewboxH : null
}
export function viewGerber(fileData) {
  const fileInput = fileData;
  const svgArray = {};

  // ------------------------------ Gerber To SVG Conversion ------------------------------
  viewPCBStackUp(fileData).then((stackup) => {
    const svgParser = new DOMParser();
    svg_width = stackup.top.width;
    svg_height = stackup.top.height;
   
    svgConf.svgHeight = svg_height;
    svgConf.svgWidth = svg_width;
    svgConf.viewboxX = stackup.top.viewBox[0];
    svgConf.viewboxY = stackup.top.viewBox[1];
    svgConf.viewboxW = stackup.top.viewBox[2];
    svgConf.viewboxH = stackup.top.viewBox[3];


    let files = fileInput;
    let layers = stackup.layers;
    console.log('Stackup : ', stackup);

    // ------------------------------ Gerber To SVG with PCB-Stackup Library ------------------------------

    const top_layer = stackup.top.svg;
    const bottom_layer = stackup.bottom.svg;
    const parsedTopLayer = svgParser.parseFromString(top_layer, "image/svg+xml");
    const parsedBottomLayer = svgParser.parseFromString(bottom_layer, "image/svg+xml");

    const topStack = parsedTopLayer.documentElement;
    const bottomStack = parsedBottomLayer.documentElement;
    topStack.setAttribute("data-stackid", `${stackup.id}`);
    topStack.setAttribute('data-name', 'top_layers_original')
    bottomStack.setAttribute("data-stackid", `${stackup.id}`);
    bottomStack.setAttribute('data-name', 'bottom_layers_original')

    svgArray.topStackSvg = topStack;
    svgArray.bottomStackSvg = bottomStack;

    let id = [];
    let topFlag = false;
    let bottomFlag = false;
    layers.forEach((layer) => {
      let idstring = layer.side + '_' + layer.type;
      // console.log('ID : ', idstring);
      id.push(idstring);
      if (layer.side === 'top') {
        topFlag = true;
      } else if (layer.side === 'bottom') {
        bottomFlag = true;
      }
    })

    // ------------------------------ Initial Main SVG ------------------------------
    // ------------------------------ Get The transform attribute from pcbStackup ------------------------------
    const svgData = stackup.top.svg;
    const trailDoc = svgParser.parseFromString(svgData, "image/svg+xml");
    const gElem = trailDoc.querySelector("svg > g"); // In order to get the <g> as the direct child of the root svg
    let gTransform = gElem.getAttribute("transform");

    function createSVG(svgData, id) {
      let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      for (const [key, value] of Object.entries(svgData.attributes)) {
        svg.setAttribute(key, value);
      }
      svg.setAttribute("id", id);
      let mainG = document.createElementNS("http://www.w3.org/2000/svg", "g");
      mainG.setAttribute("id", id + '_g');
      svg.appendChild(mainG);

      return svg;
    }

    let fullSvg = createSVG(stackup.bottom, 'stackedSvg');
    let fullSvgG = fullSvg.querySelector('#stackedSvg_g');
    fullSvgG.setAttribute('transform', gTransform);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = function (event) {
        const fileContent = event.target.result;
        const uint8Array = new Uint8Array(fileContent);

        let gerberToSvgStream;

        gerberToSvgStream = gerberToSvg(uint8Array);

        let data = "";

        gerberToSvgStream.on("data", (chunk) => {
          data += chunk;
        });

        gerberToSvgStream.on("end", () => {
          // 'data' now contains the full SVG output
          const svgDocument = svgParser.parseFromString(data, "image/svg+xml");

          // console.log(svgDocument.documentElement);
          const defElements = svgDocument.querySelector("defs");
          
          if (defElements) {
            defElements.setAttribute("id", `def-${id[i]}`);
            fullSvg.appendChild(defElements);
          } 

          const gElements = svgDocument.querySelector("g");
          if (gElements) {
            gElements.setAttribute("id", `g-${id[i]}`);
            gElements.removeAttribute('transform');
            const gElemClone = gElements.cloneNode(true);

            switch (id[i]) {
              case 'top_copper':
                gElemClone.setAttribute('style', 'color: crimson; opacity: 0.3;');
                break;
              case 'bottom_copper':
                gElemClone.setAttribute('style', 'color: #008208; opacity: 0.3;');
                break;
              case 'all_outline':
                gElemClone.setAttribute('style', 'color: green; opacity: 0.5;');
                break;
              case 'top_silkscreen':
                gElemClone.setAttribute('style', 'color: red; opacity: 0.5;');
                break;
              case 'bottom_silkscreen':
                gElemClone.setAttribute('style', 'color: blue; opacity: 0.5;');
                break;
              case 'bottom_soldermask':
                gElemClone.setAttribute('style', 'color: #757500; opacity: 0.5; display: none;');
                break;
              case 'bottom_solderpaste':
                gElemClone.setAttribute('style', 'color: orange; opacity: 0.5;');
                break;
              case 'top_solderpaste':
                gElemClone.setAttribute('style', 'color: #c362c3; opacity: 0.5;');
                break;
              case 'top_soldermask':
                gElemClone.setAttribute('style', 'color: #af4e5f; opacity: 0.5; display: none;');
                break;
            }
            
            fullSvgG.appendChild(gElemClone);
          }
        });
      };

      reader.onerror = function () {
        alert("Error reading the file.");
      };

      reader.readAsArrayBuffer(file);
    }

    svgArray.fullSvg = fullSvg;
    $('#dropArea').css('display', 'none');
    $('#overlay').fadeOut(function() {
      $("#result").fadeIn(700);
    })
    
    displaySVG(svgArray);
  });
  
}


// --------------------------- Function For Converting All the PCB Layers to SVG ---------------------------
function viewPCBStackUp(files) {
  return new Promise((resolve, reject) => {
    // console.log('fileInput : ', files.length);
    if (files !== null && files.length > 0) {
      const filePromises = Array.from(files).map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();

          reader.onload = function (event) {
            const fileContent = event.target.result;
            resolve({
              filename: file.name,
              gerber: fileContent,
            });
          };

          reader.onerror = function () {
            reject(new Error("Failed to read the file."));
          };
          reader.readAsText(file);
        });
      });

      Promise.all(filePromises)
        .then((layers) => {
          // console.log(layers);
          pcbStackup(layers)
            .then((stackup) => {
              resolve(stackup);
            })
            .catch(reject);
        })
        .catch(reject);
    } else {
      $('#overlay').fadeOut(500);
      reject(new Error("Please upload a gerber file."));
    }
  });
}


// --------------------------- Function To Display SVGs ---------------------------
function displaySVG(svgArray) {
  const { topStackSvg, bottomStackSvg,fullSvg } = svgArray;

  const topStackSVG = modifiedSVG(topStackSvg, 'topstack');
  const bottomStackSVG = modifiedSVG(bottomStackSvg, 'bottomstack');
  const fullSVG = modifiedSVG(fullSvg, 'fullstack');

  document.getElementById('toplayer').appendChild(topStackSVG);
  document.getElementById('toplayerlist').style.display = 'block';
  $('#buttonContainer').slideDown();
  document.getElementById('bottomlayerlist').classList.add('layerHidden')
  document.getElementById('bottomlayer').appendChild(bottomStackSVG);
  document.getElementById('fullLayers').appendChild(fullSVG);


  function modifiedSVG(svg, id) {
    // Define New SVG
    const svgNew = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const outerG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const mainG = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    if (id !== 'fullstack') {
      const svgG = svg.querySelectorAll('g');
      Array.from(svgG).forEach((layer) => {
        if (layer.hasAttribute("id")) {
          const layerId = layer.getAttribute("id");
          if (layerId.includes('soldermask')) {
            layer.style.display = layer.style.display === "none" ? "block" : "none";
          } 
        }
      });
    }

    // Generate Outer Layer
    const outerSVG = generateSVG(svgConf.svgWidth, svgConf.svgHeight, 0.8, {x : svgConf.viewboxX, y : svgConf.viewboxY});

    // Set the Attribute for the Parent SVG
    svgNew.setAttribute('id', `${id}`);
    svgNew.setAttribute('width', `${outerSVG.width}mm`);
    svgNew.setAttribute('height', `${outerSVG.height}mm`);

    // Add the Outer Layer
    outerSVG.svg.setAttribute('style', 'fill : #86877c;opacity: 0.5;');
    outerSVG.svg.setAttribute('id', `${id}OuterSvg`);
    outerG.appendChild(outerSVG.svg);
    outerG.setAttribute('id', `${id}OuterLayer`);
    outerG.setAttribute('style', 'display: none;');

    // Get the Path from the ClipPath element
    const clipPath = svg.querySelector('clipPath');
    if (clipPath) {
      const d = clipPath.querySelector('path').getAttribute('d');

      const outlineG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      path.setAttribute('fill', 'none');
      outlineG.setAttribute('id', 'drillMask');
      outlineG.setAttribute('transform', `translate(${ svgConf.viewboxX + 100 } ${ svgConf.viewboxY + svgConf.viewboxH - 100 }) scale(0.99, -0.99) translate(${ -svgConf.viewboxX } ${ -svgConf.viewboxY })`);
      outlineG.appendChild(path);
      
      // Insert the Drill Mask into the SVG as the first child
      svg.insertBefore(outlineG, svg.firstChild);
    }

    // Add the Main Layer
    // svg.setAttribute('id', `${id}layer`);
    mainG.appendChild(svg);
    mainG.setAttribute('id', `${id}MainLayer`);
    mainG.setAttribute('transform', 'translate(3, 3)');

    // Append Both Group to the Parent
    svgNew.appendChild(outerG);
    svgNew.appendChild(mainG);

    return svgNew;
  }
}


// --------------------------- Function To Update SVG Style ------------------------
export function updateSVG(topName = null, bottomName = null, mode) {

  const svgTop = document.getElementById('topstack').querySelector('g svg[data-stackid]');
  const svgBottom = document.getElementById('bottomstack').querySelector('g svg[data-stackid]');

  const colorButtons = document.querySelectorAll('#buttonContainer button');
  colorButtons.forEach((btn) => {
    btn.classList.remove('active');
  })

  svgTop.setAttribute('data-name', topName);
  svgBottom.setAttribute('data-name', bottomName);
  
  // since both bottom and top layer has the same ID only need to use one
  const stackid = svgTop.getAttribute('data-stackid');

  if (mode === 'bw') {
    changeSvgColor(svgTop, stackid, 'bw');
    changeSvgColor(svgBottom, stackid, 'bw');
    document.getElementById('bw').classList.add('active');

  } else if (mode === 'bwInvert') {
    changeSvgColor(svgTop, stackid, 'bwInvert');
    changeSvgColor(svgBottom, stackid, 'bwInvert');
    document.getElementById('invert').classList.add('active');

  } else {
    changeSvgColor(svgTop, stackid, 'original');
    changeSvgColor(svgBottom, stackid, 'original');
    document.getElementById('original').classList.add('active');
  }
}


export function changeSvgColor(svg, stackid, mode) {

  let svgStyleContent;
  if (mode === 'bw') {
    svgStyleContent = `
    .${stackid}_fr4 {color: #000000  !important;}
    .${stackid}_cu {color: #ffffff !important;}
    .${stackid}_cf {color: #ffffff !important;}
    .${stackid}_sm {color: #ffffff; opacity: 0 !important;}
    .${stackid}_ss {color: #ffffff !important;}
    .${stackid}_sp {color: #ffffff !important;}
    .${stackid}_out {color: #000000 !important;}
    `
  } else if(mode === 'bwInvert') {
    svgStyleContent = `
    .${stackid}_fr4 {color: #ffffff  !important;}
    .${stackid}_cu {color: #000000 !important;}
    .${stackid}_cf {color: #000000 !important;}
    .${stackid}_sm {color: #ffffff; opacity: 0 !important;}
    .${stackid}_ss {color: #000000 !important;}
    .${stackid}_sp {color: #000000 !important;}
    .${stackid}_out {color: #ffffff !important;}
    `
  } else {
    svgStyleContent = `
    .${stackid}_fr4 {color: #666666  !important;}
    .${stackid}_cu {color: #cccccc !important;}
    .${stackid}_cf {color: #cc9933 !important;}
    .${stackid}_sm {color: #004200 !important; opacity: 0.75 !important;}
    .${stackid}_ss {color: #ffffff !important;}
    .${stackid}_sp {color: #999999 !important;}
    .${stackid}_out {color: #000000 !important;}
    `
  }

  let svgStyle = svg.querySelector('style');
  svgStyle.textContent = svgStyleContent;
} 


// --------------------------- Function To Generate Outer SVG ---------------------------
export function generateSVG(width, height, toolwidth , viewbox) {
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  const originX = viewbox.x;
  const originY = viewbox.y;
  svg_outer_width = width + 2 * toolwidth;
  svg_outer_height = height + 2 * toolwidth;

  // Generate Outer SVG
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', `${originX - toolwidth} ${originY - toolwidth} ${width + 2 * toolwidth} ${height + 2 * toolwidth}`);
  svg.setAttribute('width', `${width + 2 * toolwidth}mm`);
  svg.setAttribute('height', `${height + 2 * toolwidth}mm`);

  const pathlines =   `
  M ${ originX } ${ originY }
  L ${ originX + halfWidth +  2 * toolwidth } ${ originY }
  L ${ originX + halfWidth +  2 * toolwidth } ${ originY - toolwidth }
  L ${ originX + width + toolwidth } ${ originY - toolwidth }
  L ${ originX + width + toolwidth } ${ originY + halfHeight + 2 * toolwidth }
  L ${ originX + width } ${ originY + halfHeight + 2 * toolwidth }
  L ${ originX + width } ${ originY + height }
  L ${ originX + halfWidth - 2 * toolwidth } ${ originY + height }
  L ${ originX + halfWidth - 2 * toolwidth } ${ originY + height + toolwidth }
  L ${ originX - toolwidth } ${ originY + height + toolwidth }
  L ${ originX - toolwidth } ${ originY + halfHeight - 2 * toolwidth }
  L ${ originX } ${ originY + halfHeight - 2 * toolwidth }
  L ${ originX } ${ originY }
  Z`

  let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', pathlines);

  svg.appendChild(path)


  let response = {
    svg : svg,
    width : width + 2 * toolwidth,
    height : height + 2 * toolwidth,
  }
  return response
}