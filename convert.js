let svg_width = null
let svg_height = null
function viewGerber() {
  const fileInput = document.getElementById("gerberFile");
  const svgArray = {};

  // _______________________--- Gerber To SVG Conversion ---____________________________
  viewPCBStackUp().then((stackup) => {
    const svgParser = new DOMParser();
    svg_width = stackup.top.width;
    svg_height = stackup.top.height;

    let files = fileInput.files;
    let layers = stackup.layers;
    console.log('Stackup : ', stackup);

    // _________________--- Gerber To SVG with PCB-Stackup Library ---_________________

    // const topDiv = document.getElementById("toplayer");
    // const bottomDiv = document.getElementById("bottomlayer");
    top_layer = stackup.top.svg;
    bottom_layer = stackup.bottom.svg;
    parsedTopLayer = svgParser.parseFromString(top_layer, "image/svg+xml");
    parsedBottomLayer = svgParser.parseFromString(bottom_layer, "image/svg+xml");

    console.log('parsedTopLayer : ', parsedTopLayer);
    svgArray.topStack = parsedTopLayer.documentElement;
    svgArray.bottomStack = parsedBottomLayer.documentElement;
    
    // topDiv.innerHTML = top_layer;
    // bottomDiv.innerHTML = bottom_layer;
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

    // ########### TOP ##########
    let topSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    topSVG.setAttribute("id", "topLayerBW");
    topSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    topSVG.setAttribute("viewBox", stackup.top.viewBox);
    topSVG.setAttribute("width", `${stackup.top.width}mm`);
    topSVG.setAttribute("height", `${stackup.top.height}mm`);
    topSVG.setAttribute("stroke-linecap", "round");
    topSVG.setAttribute("stroke-line-join", "round");
    topSVG.setAttribute("fill-rule", "nonzero");
    // document.getElementById("coreTopStack").innerHTML = "";
    // document.getElementById("coreTopStack").appendChild(topSVG);

    // ########### BOTTOM ##########
    let bottomSVG = document.createElementNS("http://www.w3.org/2000/svg","svg");
    bottomSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    bottomSVG.setAttribute("id", "bottomLayerBW");
    bottomSVG.setAttribute("viewBox", stackup.bottom.viewBox);
    bottomSVG.setAttribute("width", `${stackup.bottom.width}mm`);
    bottomSVG.setAttribute("height", `${stackup.bottom.height}mm`);
    bottomSVG.setAttribute("stroke-linecap", "round");
    bottomSVG.setAttribute("stroke-line-join", "round");
    bottomSVG.setAttribute("fill-rule", "evenodd");
    // document.getElementById("coreBottomStack").innerHTML = "";
    // document.getElementById("coreBottomStack").appendChild(bottomSVG);

    // _________________--- Get The transform attribute from pcbStackup ---_________________
    const svgData = stackup.top.svg;
    const trailDoc = svgParser.parseFromString(svgData, "image/svg+xml");
    const gElem = trailDoc.querySelector("g[transform]");
    let gTransform = gElem.getAttribute("transform");

    // _______________--- Create Main Top <G> ---_________________
    let mainTopG = document.createElementNS("http://www.w3.org/2000/svg", "g");
    mainTopG.setAttribute("id", "main_top");
    mainTopG.setAttribute("transform", gTransform);
    topSVG.appendChild(mainTopG);

    // _______________--- Create Main Bottom <G> ---_________________
    let mainBottomG = document.createElementNS("http://www.w3.org/2000/svg","g");
    mainBottomG.setAttribute("id", "main_bottom");
    mainBottomG.setAttribute("transform", gTransform);
    bottomSVG.appendChild(mainBottomG);

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
    console.log('SVG : ', topSVG);
    console.log('SVG : ', bottomSVG);
    svgArray.topBW = topSVG;
    svgArray.bottomBW = bottomSVG;
    
    console.log('SVG ARRAY : ', svgArray);

    $("#overlay").fadeOut(700, function() {
      $("#result").fadeIn(700);
    });

    function createAndModifySvg(svgData, svgId, gTransform) {
      console.log('createAndModifySvg : ', svgData);
      let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("id", svgId);
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

      return svg;
      
    }
    svgCreated = createAndModifySvg(stackup.top, 'top', gTransform);
    console.log('SVG Created : ', svgCreated);
    // // _______________--- Create Temporary SVG From PCB stacup ---_________________

    // let tempTopSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // for (const [key, value] of Object.entries(stackup.top.attributes)) {
    //   tempTopSvg.setAttribute(key, value);
    // }
    // tempTopSvg.setAttribute('id', 'topLayerBW');

    // let defsTop = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    // defsTop.innerHTML = stackup.top.defs.join(' ');
    // tempTopSvg.appendChild(defsTop);
    // let gTop = document.createElementNS("http://www.w3.org/2000/svg", "g");
    // gTop.setAttribute("transform", gTransform);
    // gTop.innerHTML = stackup.top.layer;
    // tempTopSvg.appendChild(gTop);

    // const updatedTopStyle = `.${stackup.id}_fr4 {color: #000000;!!important;}
    // .${stackup.id}_cu {color: #ffffff;!important;}
    // .${stackup.id}_cf {color: #ffffff;!important;}
    // .${stackup.id}_sm {color: #000000; opacity: 0;!important;}
    // .${stackup.id}_ss {color: #ffffff;!important;}
    // .${stackup.id}_sp {color: #ffffff;!important;}
    // .${stackup.id}_out {color: #ffffff;!important;}`;
    // const existingTopStyle = defsTop.querySelector('style');
    // if (existingTopStyle) {
    //   existingTopStyle.innerHTML = updatedTopStyle;
    // }

    const svgTopString = new XMLSerializer().serializeToString(svgCreated);
    console.log('svgTopString : ', svgTopString);
    let searchTopId = stackup.id;
    const topReplacement = 'new_' + searchTopId;
    const regTopEx = new RegExp(searchTopId, 'g');
    const modifiedSvgTopString = svgTopString.replace(regTopEx, topReplacement);
    const svgTopDocument = svgParser.parseFromString(modifiedSvgTopString, "image/svg+xml");
  
    svgArray.topStackBW = svgTopDocument.documentElement;

    document.getElementById('coreTopStack').appendChild(svgTopDocument.documentElement);
      
      
    

    // _______________--- Create Temporary Bottom SVG From PCB stacup ---_________________

    let tempBottomSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    for (const [key, value] of Object.entries(stackup.bottom.attributes)) {
      tempBottomSvg.setAttribute(key, value);
    }
    tempBottomSvg.setAttribute('id', 'topLayerBW');


    let defsBottom = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defsBottom.innerHTML = stackup.bottom.defs.join(' ');
    tempBottomSvg.appendChild(defsBottom);
    let gBottom = document.createElementNS("http://www.w3.org/2000/svg", "g");
    gBottom.setAttribute("transform", gTransform);
    gBottom.innerHTML = stackup.bottom.layer;
    tempBottomSvg.appendChild(gBottom);

    const updatedBottomStyle = `.${stackup.id}_fr4 {color: #000000;!!important;}
    .${stackup.id}_cu {color: #ffffff;!important;}
    .${stackup.id}_cf {color: #ffffff;!important;}
    .${stackup.id}_sm {color: #000000; opacity: 0;!important;}
    .${stackup.id}_ss {color: #ffffff;!important;}
    .${stackup.id}_sp {color: #ffffff;!important;}
    .${stackup.id}_out {color: #ffffff;!important;}`;
    const existingBottomStyle = defsBottom.querySelector('style');
    if (existingBottomStyle) {
      existingBottomStyle.innerHTML = updatedBottomStyle;
    }

    const svgBottomString = new XMLSerializer().serializeToString(tempBottomSvg);
    console.log('svgBottomString : ', svgBottomString);
    let searchBottomId = stackup.id;
    const bottomReplacement = 'new_' + searchBottomId;
    const regBottomEx = new RegExp(searchBottomId, 'g');
    const modifiedSvgBottomString = svgBottomString.replace(regBottomEx, bottomReplacement);
    const svgBottomDocument = svgParser.parseFromString(modifiedSvgBottomString, "image/svg+xml");
    
    // Wait for the parsing to complete
    console.log('tempBottomSvg : ', svgBottomDocument.documentElement);
    svgArray.bottomStackBW = svgBottomDocument.documentElement;
    document.getElementById('coreTopStack').appendChild(svgBottomDocument.documentElement);
    console.log('svgArray New : ', svgArray);

    displaySVG(svgArray);
  });
  
}



// __________________________ Function For Converting All the PCB Layers to SVG __________________________
function viewPCBStackUp() {
  return new Promise((resolve, reject) => {
    $('#overlay').fadeIn(700);
    const fileInput = document.getElementById("gerberFile");
    if (fileInput.files !== null && fileInput.files.length > 0) {
      let files = fileInput.files;
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
  document.getElementById('coreTopStack').appendChild(topBW);
  document.getElementById('coreBottomStack').appendChild(bottomBW);
}

