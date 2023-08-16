let svg_width = null
let svg_height = null
function viewGerber(fileData) {
  const fileInput = fileData;
  const svgArray = {};

  // _______________________--- Gerber To SVG Conversion ---____________________________
  viewPCBStackUp(fileData).then((stackup) => {
    const svgParser = new DOMParser();
    svg_width = stackup.top.width;
    svg_height = stackup.top.height;

    let files = fileInput;
    let layers = stackup.layers;
    console.log('Stackup : ', stackup);

    // _________________--- Gerber To SVG with PCB-Stackup Library ---_________________

    top_layer = stackup.top.svg;
    bottom_layer = stackup.bottom.svg;
    parsedTopLayer = svgParser.parseFromString(top_layer, "image/svg+xml");
    parsedBottomLayer = svgParser.parseFromString(bottom_layer, "image/svg+xml");

    console.log('parsedTopLayer : ', parsedTopLayer);
    svgArray.topStack = parsedTopLayer.documentElement;
    svgArray.bottomStack = parsedBottomLayer.documentElement;

    let id = [];
    let topFlag = false;
    let bottomFlag = false;
    layers.forEach((layer) => {
      let idstring = layer.side + '_' + layer.type;
      console.log('ID : ', idstring);
      id.push(idstring);
      if (layer.side === 'top') {
        topFlag = true;
      } else if (layer.side === 'bottom') {
        bottomFlag = true;
      }
    })

    if (!topFlag) {
      document.getElementById('mainTop').style.display = "none";
    }
    if (!bottomFlag) {
      document.getElementById('mainBottom').style.display = "none";
    }

    // _________________--- Initial Main SVG ---_________________
    // _________________--- Get The transform attribute from pcbStackup ---_________________
    const svgData = stackup.top.svg;
    const trailDoc = svgParser.parseFromString(svgData, "image/svg+xml");
    const gElem = trailDoc.querySelector("g[transform]");
    let gTransform = gElem.getAttribute("transform");

    function createSVG(svgData, id) {
      let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("id", id);
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
      if (id === 'bottomLayerBW') {
        svg.setAttribute('transform', 'matrix(-1,0,0,-1,0,0)');
      } else if (id === 'topLayerBW') {
        svg.setAttribute("transform","matrix(1,0,0,-1,0,0)");
      }

      svg.setAttribute("viewBox", svgData.viewBox);
      svg.setAttribute("width", `${svgData.width}mm`);
      svg.setAttribute("height", `${svgData.height}mm`);
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-line-join", "round");
      svg.setAttribute("fill-rule", "evenodd");

      let mainG = document.createElementNS("http://www.w3.org/2000/svg", "g");
      mainG.setAttribute("id", id + '_g');
      svg.appendChild(mainG);

      return svg;
    }

    let topSVG = createSVG(stackup.top, 'topLayerBW');
    let mainTopG = topSVG.querySelector('#topLayerBW_g');

    let bottomSVG = createSVG(stackup.bottom, 'bottomLayerBW');
    let mainBottomG = bottomSVG.querySelector('#bottomLayerBW_g');

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = function (event) {
        const fileContent = event.target.result;
        const uint8Array = new Uint8Array(fileContent);

        const gerberToSvgStream = gerberToSvg(uint8Array);
        let data = "";

        gerberToSvgStream.on("data", (chunk) => {
          data += chunk;
        });

        gerberToSvgStream.on("end", () => {
          // 'data' now contains the full SVG output

          // const parser = new DOMParser();
          const svgDocument = svgParser.parseFromString(data, "image/svg+xml");

          const defElements = svgDocument.querySelector("defs");

          if (defElements) {
            defElements.setAttribute("id", `def-${id[i]}`);
            if (layers[i].side === 'top') {
              topSVG.appendChild(defElements);

            } else if (layers[i].side === 'bottom') {
              bottomSVG.appendChild(defElements);

            } else {
              const topSVGCopy = defElements.cloneNode(true); // Create a copy of defElements for top
              const bottomSVGCopy = defElements.cloneNode(true); // Create a copy of defElements for bottom
              topSVG.appendChild(topSVGCopy);
              bottomSVG.appendChild(bottomSVGCopy);

            }
          } 

          const gElements = svgDocument.querySelector("g");
          if (gElements) {
            gElements.setAttribute("id", `g-${id[i]}`);
            gElements.removeAttribute('transform');
            if (layers[i].side == 'top') {
              mainTopG.appendChild(gElements);

            } else if (layers[i].side == 'bottom') {
              mainBottomG.appendChild(gElements);

            } else {
              const topGCopy = gElements.cloneNode(true); // Create a copy of gElements for top
              const bottomGCopy = gElements.cloneNode(true); // Create a copy of gElements for bottom
              mainTopG.appendChild(topGCopy);
              mainBottomG.appendChild(bottomGCopy);
            }
          }
        });
      };

      reader.onerror = function () {
        alert("Error reading the file.");
      };

      reader.readAsArrayBuffer(file);
    }

    svgArray.topBW = topSVG;
    svgArray.bottomBW = bottomSVG;

    $("#overlay").fadeOut(700, function() {
      $("#result").fadeIn(700);
    });

    function createAndModifySvg(svgData) {
     
      let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      for (const [key, value] of Object.entries(svgData.attributes)) {
        svg.setAttribute(key, value);
      }
      let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      defs.innerHTML = svgData.defs.join(' ');
      svg.appendChild(defs);
      let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("transform", gTransform);
      g.innerHTML = svgData.layer;
      svg.appendChild(g);

      const updatedStyle = `
      .${stackup.id}_fr4 {color: #000000;!!important;}
      .${stackup.id}_cu {color: #ffffff;!important;}
      .${stackup.id}_cf {color: #ffffff;!important;}
      .${stackup.id}_sm {color: #000000; opacity: 0;!important;}
      .${stackup.id}_ss {color: #ffffff;!important;}
      .${stackup.id}_sp {color: #ffffff;!important;}
      .${stackup.id}_out {color: #ffffff;!important;}`;
      const existingStyle = defs.querySelector('style');
      if (existingStyle) {
        existingStyle.innerHTML = updatedStyle;
      }
      const svgString = new XMLSerializer().serializeToString(svg);
      let searchId = stackup.id;
      const replacement = 'new_' + searchId;
      const regIdEx = new RegExp(searchId, 'g');
      const modifiedSvg = svgString.replace(regIdEx, replacement);
      const svgDoc = svgParser.parseFromString(modifiedSvg, "image/svg+xml");

      return svgDoc.documentElement;
      
    }

    svgCreatedTop = createAndModifySvg(stackup.top,);
    svgCreatedBottom = createAndModifySvg(stackup.bottom,);

    svgArray.topStackBW = svgCreatedTop;
    svgArray.bottomStackBW = svgCreatedBottom;

    displaySVG(svgArray);
  });
  
}


// __________________________ Function For Converting All the PCB Layers to SVG __________________________
function viewPCBStackUp(files) {
  return new Promise((resolve, reject) => {
    console.log('fileInput : ', files.length);
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
          console.log(layers);
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


// ____________________________ Function To Convert The SVG To PNG ____________________________
function svg2png(svg, swidth = svg_width, sheight = svg_height) {
  const dpi = 1000;

  return new Promise((resolve, reject) => {
    
      const svgBlob = new Blob([svg], { type: "image/svg+xml" });
      console.log(':: Blob created ::', svgBlob);
      let blobURL = (window.URL || window.webkitURL || window).createObjectURL(svgBlob);
      console.log(':: Blob URL ::', blobURL);
      const img = new Image();

      img.onload = () => {
          console.log(':: Image loaded ::');
          const canvas = document.createElement("canvas");
          const scaleFactor = 1500 / 25.4;
          let width = swidth ;
          let height = sheight;
          canvas.width = width * scaleFactor;
          canvas.height = height * scaleFactor; 
          const ctx = canvas.getContext("2d");
          
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, width * scaleFactor, height * scaleFactor);
          ctx.drawImage(img, 0, 0, width * scaleFactor, height * scaleFactor);
          resolve(canvas);
      };

      // Handle errors during image loading
      img.onerror = function (err) {
          console.log('Error loading image:', err);
          reject(err);
      };
      img.src = blobURL;
  });
}


// ___________________________ Function To Display SVGs ____________________________
function displaySVG(svgArray) {
  const { topStack, bottomStack, topStackBW, bottomStackBW, topBW, bottomBW } = svgArray;

  document.getElementById('toplayer').appendChild(topStack);
  document.getElementById('bottomlayer').appendChild(bottomStack);

  document.getElementById('coreTopStack').appendChild(topStackBW);
  document.getElementById('coreBottomStack').appendChild(bottomStackBW);
  document.getElementById('topInvert').appendChild(topBW);
  document.getElementById('bottomInvert').appendChild(bottomBW);
}

