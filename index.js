function initializeGerberToSVG() {
    if (document.getElementById("button") !== null) {
        document.getElementById("button").addEventListener("click", viewGerber); 
    }
  }


function viewGerber() {
    const fileInput = document.getElementById("gerberFile");
    if (fileInput.files !== null && fileInput.files.length > 0) {
        let files = fileInput.files;
        let combinedSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        combinedSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg"); // Set the XML namespace

        let maxWidth = 0;
        let maxHeight = 0;
        let allLayerGroups = []; // To store references to all the layer groups
        let layerdiv0 = document.getElementById(`layer`);
        layerdiv0.innerHTML = "";

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = function (event) {
                const fileContent = event.target.result;
                console.log(file.name)
                const uint8Array = new Uint8Array(fileContent);
                const parser = new DOMParser();
                
                gerberToSvg(uint8Array, `my-gerber-file-${i}`, function(error, svg) {
                    if (error) {
                        return console.error(`Gerber To Svg error for file ${i}: ${error.message}`);
                    }

                    const svgDoc = parser.parseFromString(svg, "image/svg+xml");
                    const svgElem = svgDoc.documentElement;

                    // Get the width and height of the current layer
                    const layerWidth = parseFloat(svgElem.getAttribute("width"));
                    const layerHeight = parseFloat(svgElem.getAttribute("height"));

                    // Update the maximum width and height if necessary
                    maxWidth = Math.max(maxWidth, layerWidth);
                    maxHeight = Math.max(maxHeight, layerHeight);

                    // Create a new group (g element) for each layer and append the layer's SVG to it
                    const layerGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
                    layerGroup.setAttribute("layer", `layer-${i}`);
                    layerGroup.appendChild(svgElem);
                    allLayerGroups.push(layerGroup);

                    // Check if this is the last layer group, then append all the groups to the combinedSVG
                    if (allLayerGroups.length === files.length) {
                        // Update the final width and height of the combinedSVG element
                        combinedSVG.setAttribute("width", `${maxWidth}mm`);
                        combinedSVG.setAttribute("height", `${maxHeight}mm`);
                        
                        // Adjust the position of the layer groups to center align
                        for (let j = 0; j < allLayerGroups.length; j++) {
                            const layerGroup = allLayerGroups[j];
                            combinedSVG.appendChild(layerGroup);

                            
                            let layerdiv = document.createElement('div');
                            layerdiv.setAttribute('class', `form-check col-12`);
                            let layer = document.createElement('input');
                            layer.setAttribute('type', 'checkbox');
                            layer.setAttribute('id', `layer-${i}`);
                            layer.setAttribute('class', `form-check-input`);
                            layer.checked = true;

                            let layerlabel = document.createElement('label');
                            layerlabel.setAttribute('for', `layer-${i}`);
                            layerlabel.setAttribute('class', `form-check-label`);
                            layerlabel.innerText = `Layer ${j + 1}`;
                            layerdiv.appendChild(layer);
                            layerdiv.appendChild(layerlabel);
                            layerdiv0.appendChild(layerdiv); 

                            layer.addEventListener("change", function() {
                                if (this.checked) {
                                // If the checkbox is checked, append the layer to the SVG display
                                combinedSVG.appendChild(layerGroup);
                                } else {
                                // If the checkbox is unchecked, remove the layer from the SVG display
                                combinedSVG.removeChild(layerGroup);
                                }
                            });
                        }
                    }
                });
            };

            reader.onerror = function () {
                alert("Error reading the file.");
            };
            
            reader.readAsArrayBuffer(file);
        }

        // Append the combinedSVG to the svgdiv
        let svgdiv = document.getElementById("svgdiv");
        svgdiv.innerHTML = "";
        svgdiv.appendChild(combinedSVG);
    } else {
        alert("Please upload a gerber file.");
    }
}