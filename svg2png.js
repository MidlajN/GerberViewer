
export async function createPNG(svgElement) {
  const [outerSVG, gerberSVG] = svgElement.querySelectorAll('svg');
  const name = gerberSVG.getAttribute('data-name');
  const canvasBackground = document.getElementById('canvasBg').value;
  const drillMask = gerberSVG.querySelector('#drillMask path');

  if (drillMask) {
    drillMask.setAttribute('fill', canvasBackground === 'black' ? '#fff' : '#000');
  }

  if (!document.getElementById('sideToggle').checked) {
    svgElement = gerberSVG;
  } else {
    outerSVG.setAttribute('style', 'opacity:1;fill:' + (canvasBackground === 'black' ? '#fff' : '#000') + ';');
  }

  const createDownloadLink = (blob, name) => {
    const pngURL = (window.URL || window.webkitURL || window).createObjectURL(blob);
    console.log('pngURL', pngURL);
    const link = document.createElement('a');
    link.setAttribute('id', 'pngDownload');
    link.classList.add('pngButton')
    link.download = `${name}_1000dpi.png`;
    link.href = pngURL;
    link.innerHTML = '<i class="fa-solid fa-download"></i>';
    return link;
  }

  const createPngFooter = (name, downloadLink, pngDiv) => {
    const footer = document.createElement('div');
    footer.classList.add('pngAnchorDiv');

    const footerText = document.createElement('p');
    footerText.setAttribute('style', 'font-size:10px;margin:0;');

    const nameSpan = document.createElement('span');
    nameSpan.setAttribute('contenteditable', 'true');
    nameSpan.classList.add('pngName');
    nameSpan.textContent = name + '_1000dpi';
    nameSpan.addEventListener('input', (e) => {
      downloadLink.download = e.target.textContent + '.png';
    })

    const extSpan = document.createElement('span');
    extSpan.textContent = '.png';

    // const modsButton = document.createElement('button');
    // modsButton.innerHTML = '<div class="text">Send To Mods</div><i class="fa-solid fa-gear"></i>';
    // modsButton.classList.add('pngModsButton');
    // modsButton.addEventListener('click', () => {
    //   pngToMods(downloadLink.href);
    // });

    const deleteButton = document.createElement('a');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', () => pngDiv.remove());

    footerText.appendChild(nameSpan);
    footerText.appendChild(extSpan);

    const downloadDiv = document.createElement('div');
    downloadDiv.setAttribute('style', 'display:flex;align-items:center;justify-content:flex-end;');
    // downloadDiv.appendChild(modsButton);
    downloadDiv.appendChild(downloadLink);
    downloadDiv.appendChild(deleteButton);

    footer.appendChild(footerText);
    footer.appendChild(downloadDiv);

    return footer;blobURL
  }

  const pngDiv = document.createElement('div');
  pngDiv.classList.add('pngCard');
  const svgString = new XMLSerializer().serializeToString(svgElement);
  const width = parseFloat(svgElement.getAttribute('width'));
  const height = parseFloat(svgElement.getAttribute('height'));

  await svg2png(svgString, width, height, canvasBackground).then(canvas => {
    canvas.setAttribute('style', 'width: 100%; height: 100%;');
    canvas.setAttribute('data-name', name);
    pngDiv.appendChild(canvas);

    canvas.toBlob(pngBlob => {
      const downloadLink = createDownloadLink(pngBlob, name);
      const pngFooter = createPngFooter(name, downloadLink, pngDiv);
      pngDiv.appendChild(pngFooter);
    }, 'image/png', { dpi: 1000 });

  }).catch(err => console.error(err));

  return pngDiv;
}

function pngToMods(pngURL) {
  console.log('pngToMods Called::', pngURL);
  const url = 'https://localhost:8081/?program=programs/machines/Roland/MDX%20mill/PCB';

  let interval;

  function handleMsgFromMods(event) {
    clearInterval(interval);
    console.log('handleMsgFromMods Called::', event.data);
    window.removeEventListener('message', handleMsgFromMods);
  }

  window.addEventListener('message', handleMsgFromMods);
  console.log(':: Sending message to mods ::', pngURL);

  const prox = window.open(url);
  const imgUrl = pngURL;
  
  interval = setInterval(() => {
    prox.postMessage({ image: imgUrl }, 'https://localhost:8081/?program=programs/machines/Roland/MDX%20mill/PCB');
  }, 1000);

}




// --------------------------- Function To Convert The SVG To PNG ---------------------------
export async function svg2png(svg, swidth = null, sheight = null, canvasBg) {
    console.log('swidth : ', swidth, 'sheight : ', sheight);
    return new Promise((resolve, reject) => {
        const svgBlob = new Blob([svg], { type: "image/svg+xml" });
        // console.log(':: Blob created ::', svgBlob);
        let blobURL = (window.URL || window.webkitURL || window).createObjectURL(svgBlob);
        // console.log(':: Blob URL ::', blobURL);
        const img = new Image();

        img.onload = () => {
            // console.log(':: Image loaded ::', img.src);
            const canvas = document.createElement("canvas");

            const scaleFactor = 1000 / 25.4;

            const width = swidth ;
            const height = sheight;
            const scaledWidth = width * scaleFactor;
            const scaledHeight = height * scaleFactor;

            const toolWidth = 0.8;
            const toolWidthErr = 0.02;
            const scaledToolWidth = (toolWidth + toolWidthErr) * scaleFactor;

            canvas.width = scaledWidth + scaledToolWidth * 2;
            canvas.height = scaledHeight + scaledToolWidth * 2; 
            
            const ctx = canvas.getContext("2d");
            
            ctx.fillStyle = canvasBg;
            ctx.fillRect(0, 0, scaledWidth + scaledToolWidth * 2, scaledHeight + scaledToolWidth * 2);
            ctx.drawImage(img, scaledToolWidth, scaledToolWidth, scaledWidth , scaledHeight );

            (window.URL || window.webkitURL || window).revokeObjectURL(blobURL);

            resolve(canvas);
        };

        // Handle errors during image loading
        img.onerror = function (err) {
            console.log('Error loading image:', err);
            reject(err);

            (window.URL || window.webkitURL || window).revokeObjectURL(blobURL);
        };
        img.src = blobURL;
    });
}


// --------------------------- Zip All The Images ---------------------------
export function zipImages() {
    const zip = new JSZip();

    const canvas = document.getElementById('canvas');
    const canvasElements = canvas.querySelectorAll('canvas');

    function canvasToBlob (canvas, callback) {
        canvas.toBlob(callback, 'image/png');
    }

    // wait for all canvas to Blob conversion
    Promise.all(
        Array.from(canvasElements).map((canvas, index) => {
            return new Promise((resolve) => {
                canvasToBlob(canvas, (blob) => {
                zip.file(canvas.getAttribute('data-name') + index + '_1500dpi.png', blob);
                resolve();
                });
            })
        })
    ).then(() => {
        // Generate The Zip Asynchronously
        zip.generateAsync({ type: "blob" }).then((content) => {

            const blobUrl = URL.createObjectURL(content);
            // create a Blob URL for the Zip Content
            const downloadLink = document.createElement("a");
            downloadLink.href = blobUrl;
            downloadLink.download = "pcbImages.zip";  
            downloadLink.click();

            // Clean up the Blob URL
            window.URL.revokeObjectURL(blobUrl);
        });
    });
}
window.zipImages = zipImages;