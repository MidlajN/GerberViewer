
function initializeGerberToSVG() {
    if (document.getElementById("button") !== null) {
        document.getElementById("button").addEventListener("click", viewGerber); 
    }
}

function viewGerber() {
    const fileInput = document.getElementById("gerberFile");
    

    // _______________________--- Gerber To SVG Conversion ---____________________________
    viewPCBStackUp().then((result) => {
        let files = fileInput.files;
        console.log(result);
        const stackup = result.stackup;

        // _________________--- Gerber To SVG with PCB-Stackup Library ---_________________

        const topDiv = document.getElementById('toplayer');
        const bottomDiv = document.getElementById('bottomlayer');
        top_layer = stackup.top.svg;
        bottom_layer = stackup.bottom.svg;

        topDiv.innerHTML = top_layer;
        bottomDiv.innerHTML = bottom_layer;


    // _________________--- Initial Main SVG ---_________________

        // ########### TOP ##########
        let topSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        topSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        topSVG.setAttribute('viewBox', stackup.top.viewBox);
        topSVG.setAttribute('width', `${stackup.top.width}mm`);
        topSVG.setAttribute('height', `${stackup.top.height}mm`);
        topSVG.setAttribute('stroke-linecap', 'round');
        topSVG.setAttribute('stroke-line-join', 'round');
        topSVG.setAttribute('fill-rule', 'evenodd');
        document.getElementById('coreTopStack').innerHTML = "";
        document.getElementById('coreTopStack').appendChild(topSVG);

        // ########### BOTTOM ##########
        let bottomSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        bottomSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        bottomSVG.setAttribute('viewBox', stackup.bottom.viewBox);
        bottomSVG.setAttribute('width', `${stackup.bottom.width}mm`);
        bottomSVG.setAttribute('height', `${stackup.bottom.height}mm`);
        bottomSVG.setAttribute('stroke-linecap', 'round');
        bottomSVG.setAttribute('stroke-line-join', 'round');
        bottomSVG.setAttribute('fill-rule', 'evenodd');
        document.getElementById('coreBottomStack').innerHTML = "";
        document.getElementById('coreBottomStack').appendChild(bottomSVG);


        // _________________--- Get The transform attribute from pcbStackup ---_________________
        const svgData = stackup.top.svg;
        const svgParser = new DOMParser();
        const trailDoc = svgParser.parseFromString(svgData, "image/svg+xml");
        const gElem = trailDoc.querySelector('g[transform]');
        let gTransform = gElem.getAttribute('transform');

        // _______________--- Create Main Top <G> ---_________________
        let mainTopG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        mainTopG.setAttribute("id", "main_top");
        mainTopG.setAttribute("transform", gTransform);
        topSVG.appendChild(mainTopG);

        // _______________--- Create Main Bottom <G> ---_________________
        let mainBottomG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        mainBottomG.setAttribute("id", "main_bottom");
        mainBottomG.setAttribute("transform", gTransform);
        bottomSVG.appendChild(mainBottomG);


        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            const id = result.match[i]

            reader.onload = function (event) {
                const fileContent = event.target.result;
                const uint8Array = new Uint8Array(fileContent);

                const gerberToSvgStream = gerberToSvg(uint8Array);
                let data = '';

                gerberToSvgStream.on('data', (chunk) => {
                data += chunk;
                });

                gerberToSvgStream.on('end', () => {
                    // 'data' now contains the full SVG output

                    const parser = new DOMParser();
                    const svgDocument = parser.parseFromString(data, "image/svg+xml");

                    const defElements = svgDocument.querySelector('defs');
                    
                    if (defElements) {
                        defElements.setAttribute('id', `def-${id}`);
                        if (id.includes('top_')) {
                            topSVG.appendChild(defElements);
                        } else if (id.includes('bottom_')) {
                            bottomSVG.appendChild(defElements);
                        } else {
                            const topSVGCopy = defElements.cloneNode(true); // Create a copy of defElements for top
                            const bottomSVGCopy = defElements.cloneNode(true); // Create a copy of defElements for bottom
                            topSVG.appendChild(topSVGCopy);
                            bottomSVG.appendChild(bottomSVGCopy);
                        }
                    }
                    
                    const gElements = svgDocument.querySelector('g');
                    
                    if (gElements) {
                        gElements.setAttribute('id', `g-${id}`); 
                        gElements.removeAttribute('transform');
                        if (id.includes('top_')) {
                            mainTopG.appendChild(gElements);
                        } else if (id.includes('bottom_')) {
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
        
    })

}




function toggleLayer(LayerId) {
    console.log(LayerId);
    let stackTop = document.getElementById('mainTop');
    let stackBottom = document.getElementById('mainBottom');
    const topLayerElem = stackTop.getElementsByTagName('g');
    const bottomLayerElem = stackBottom.getElementsByTagName('g');
    Array.from(topLayerElem).forEach(layer => {
        if (layer.hasAttribute('id')){
            const layerId = layer.getAttribute('id');
            if (layerId.endsWith(LayerId)){
                layer.style.display = layer.style.display === 'none' ? 'block' : 'none';
            }
        }   
    });
    Array.from(bottomLayerElem).forEach(layer => {
        if (layer.hasAttribute('id')){
            const layerId = layer.getAttribute('id');
            if (layerId.endsWith(LayerId)){
                layer.style.display = layer.style.display === 'none' ? 'block' : 'none';
            }
        }
    })
}



function overrideColor(svgContent) {
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");
    const svgElem = svgDoc.documentElement;
    const defElem = svgElem.querySelector("defs");
    if (defElem !== null && defElem.hasAttribute('style')) {
        defElem.removeAttribute('style');
        console.log('defElem removed');
    }
  
    return svgElem;
  }


// ---------------------------------------- Function For Converting All the PCB Layers to SVG ----------------------------------------
function viewPCBStackUp() {
    return new Promise((resolve, reject) => {
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

            Promise.all(filePromises).then((layers) => {
                console.log(layers);
                const matchArray = []
                layers.forEach((layer) => {
                    if (!layer.filename.endsWith('.gbrjob')) {
                        const gerberStr = layer.gerber;
                        const regEx = /((?<=\bIN)\w+)(.*?)(?=\s*\*%)/g;
                        const match = gerberStr.match(regEx);
                        if (match) {
                            console.log('Extracted match: ', match[0]);
                            let str = match[0];
                            str = str.toLowerCase();

                            if (str.endsWith('top') || str.endsWith('bottom')) {
                                const words = str.split(/\s+/);
                                str = words[1] + '_' + words[0];
                                console.log('Modified String : ', str);
                            } else {
                                const words = str.split(/\s+/);
                                str = words[0] + '_' + words[1];
                            }
                            matchArray.push(str);
                        } else {
                            matchArray.push('outline_gerber');
                            console.log('Outline Pushed')
                        }
                    } else {
                        matchArray.push('gerber_data');
                        console.log('MetaData Pushed')
                    }
                })
                console.log('matchArray: ', matchArray);
                
                pcbStackup(layers).then((stackup) => {
                    result = {
                        match : matchArray,
                        stackup : stackup
                    };
                    resolve(result);
                }).catch(reject);
            }).catch(reject);
        }else {
            reject(new Error("Please upload a gerber file."));
        }
    });
}