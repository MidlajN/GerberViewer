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

    const topStack = parsedTopLayer.documentElement;
    const bottomStack = parsedBottomLayer.documentElement;
    topStack.setAttribute("data-stackid", `${stackup.id}`);
    bottomStack.setAttribute("data-stackid", `${stackup.id}`);

    svgArray.topStackSvg = topStack;
    svgArray.bottomStackSvg = bottomStack;

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

    // _________________--- Initial Main SVG ---_________________
    // _________________--- Get The transform attribute from pcbStackup ---_________________
    const svgData = stackup.top.svg;
    const trailDoc = svgParser.parseFromString(svgData, "image/svg+xml");
    const gElem = trailDoc.querySelector("g[transform]");
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

        const gerberToSvgStream = gerberToSvg(uint8Array);
        let data = "";

        gerberToSvgStream.on("data", (chunk) => {
          data += chunk;
        });

        gerberToSvgStream.on("end", () => {
          // 'data' now contains the full SVG output
          const svgDocument = svgParser.parseFromString(data, "image/svg+xml");

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
                gElemClone.setAttribute('style', 'color: #757500; opacity: 0.5;');
                break;
              case 'bottom_solderpaste':
                gElemClone.setAttribute('style', 'color: orange; opacity: 0.5;');
                break;
              case 'top_solderpaste':
                gElemClone.setAttribute('style', 'color: #c362c3; opacity: 0.5;');
                break;
              case 'top_soldermask':
                gElemClone.setAttribute('style', 'color: #af4e5f; opacity: 0.5;');
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

    $("#overlay").fadeOut(700, function() {
      $('#dropArea').css('display', 'none');
      $("#result").fadeIn(700);
    });
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
  const { topStackSvg, bottomStackSvg,fullSvg } = svgArray;
  topStackSvg.setAttribute('id', 'topstacklayer');
  bottomStackSvg.setAttribute('id', 'bottomstacklayer');
  document.getElementById('toplayer').appendChild(topStackSvg);
  document.getElementById('bottomlayer').appendChild(bottomStackSvg);
  document.getElementById('fullLayers').appendChild(fullSvg); 
  
}


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('renderButton').addEventListener('click', function(){
    svgParent = document.getElementById('toplayer');
    svg = svgParent.querySelector('svg');
    console.log('SVG :: ', svg);
    const svgString = new XMLSerializer().serializeToString(svg);
    console.log('SVG String :: ', svgString);
    svg2png(svgString).then((canvas) => {
      console.log('PNG : ', canvas);
      document.getElementById('canvas').appendChild(canvas);

      // Convert canvas to Blob
      canvas.toBlob((pngBlob) => {
          // Create a download link for the PNG Blob
          const downloadLink = document.createElement('a');
          downloadLink.href = (window.URL || window.webkitURL || window).createObjectURL(pngBlob);

          downloadLink.download = 'converted-image.png'; // Set the desired filename
          downloadLink.textContent = 'Download PNG';
          document.getElementById('canvas').appendChild(downloadLink);
        }, "image/png");
    }).catch((err) => {
        console.log('Error : ', err);
    });
  })
})