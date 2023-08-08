

function initializeGerberToSVG() {
  if (document.getElementById("button") !== null) {
    document.getElementById("button").addEventListener("click", viewGerber);
  }
}

let svg_width = null
let svg_height = null
function viewGerber() {
  const fileInput = document.getElementById("gerberFile");

  // _______________________--- Gerber To SVG Conversion ---____________________________
  viewPCBStackUp().then((stackup) => {
    svg_width = stackup.top.width;
    svg_height = stackup.top.height;

    let files = fileInput.files;
    let layers = stackup.layers;
    console.log('Stackup : ', stackup.top.svg);

    // _________________--- Gerber To SVG with PCB-Stackup Library ---_________________

    const topDiv = document.getElementById("toplayer");
    const bottomDiv = document.getElementById("bottomlayer");
    top_layer = stackup.top.svg;
    bottom_layer = stackup.bottom.svg;
    topDiv.innerHTML = top_layer;
    bottomDiv.innerHTML = bottom_layer;
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
    topSVG.setAttribute("fill-rule", "evenodd");
    document.getElementById("coreTopStack").innerHTML = "";
    document.getElementById("coreTopStack").appendChild(topSVG);


    // ########### BOTTOM ##########
    let bottomSVG = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    bottomSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    bottomSVG.setAttribute("viewBox", stackup.bottom.viewBox);
    bottomSVG.setAttribute("width", `${stackup.bottom.width}mm`);
    bottomSVG.setAttribute("height", `${stackup.bottom.height}mm`);
    bottomSVG.setAttribute("stroke-linecap", "round");
    bottomSVG.setAttribute("stroke-line-join", "round");
    bottomSVG.setAttribute("fill-rule", "evenodd");
    document.getElementById("coreBottomStack").innerHTML = "";
    document.getElementById("coreBottomStack").appendChild(bottomSVG);

    // _________________--- Get The transform attribute from pcbStackup ---_________________
    const svgData = stackup.top.svg;
    const svgParser = new DOMParser();
    const trailDoc = svgParser.parseFromString(svgData, "image/svg+xml");
    const gElem = trailDoc.querySelector("g[transform]");
    let gTransform = gElem.getAttribute("transform");

    // _______________--- Create Main Top <G> ---_________________
    let mainTopG = document.createElementNS("http://www.w3.org/2000/svg", "g");
    mainTopG.setAttribute("id", "main_top");
    mainTopG.setAttribute("transform", gTransform);
    topSVG.appendChild(mainTopG);

    // _______________--- Create Main Bottom <G> ---_________________
    let mainBottomG = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );
    mainBottomG.setAttribute("id", "main_bottom");
    // mainBottomG.setAttribute("transform", gTransform);
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

          const parser = new DOMParser();
          const svgDocument = parser.parseFromString(data, "image/svg+xml");

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

    $("#overlay").fadeOut(700, function() {
      $("#result").fadeIn(700);
    });
  });
}

function toggleLayer(LayerId) {
  console.log(LayerId);
  let stackTop = document.getElementById("mainTop");
  let stackBottom = document.getElementById("mainBottom");
  const topLayerElem = stackTop.getElementsByTagName("g");
  const bottomLayerElem = stackBottom.getElementsByTagName("g");
  Array.from(topLayerElem).forEach((layer) => {
    if (layer.hasAttribute("id")) {
      const layerId = layer.getAttribute("id");
      if (layerId.endsWith(LayerId)) {
        layer.style.display = layer.style.display === "none" ? "block" : "none";
      }
    }
  });
  Array.from(bottomLayerElem).forEach((layer) => {
    if (layer.hasAttribute("id")) {
      const layerId = layer.getAttribute("id");
      if (layerId.endsWith(LayerId)) {
        layer.style.display = layer.style.display === "none" ? "block" : "none";
      }
    }
  });
}


// ---------------------------------------- Function For Converting All the PCB Layers to SVG ----------------------------------------
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
          const scaleFactor = 100;
          let width = swidth ;
          let height = sheight;
          canvas.width = width * scaleFactor;
          canvas.height = height * scaleFactor; 
          const ctx = canvas.getContext("2d");
          
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
