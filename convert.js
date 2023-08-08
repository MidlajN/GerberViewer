// import { Canvg } from 'https://cdn.skypack.dev/canvg@^4.0.0';

// async function renderSvgToCanvas() {
//   try {
//     const svgCode = document.getElementById('coreBottomStack').innerHTML;
//     console.log(svgCode);
//     // Calculate the width and height to achieve 1000 DPI
//     // const dpi = 1000;
//     // const width = stackup.top.width * dpi;
//     // const height = stackup.top.height * dpi;

//     const canvas = document.querySelector('#canvaspng');
//     // canvas.width = width;
//     // canvas.height = height;

//     const ctx = canvas.getContext('2d');
//     const v = Canvg.fromString(ctx, svgCode);

//     // Start SVG rendering with animations and mouse handling.
//     v.start();
//   } catch (error) {
//     console.error('Error rendering SVG to canvas:', error);
//   }
// }

// document.getElementById('canvasCon').addEventListener('click', renderSvgToCanvas);



function convertSvgToPng(svgText, width, height) {
  console.log('Function convertSvgToPng');
  return new Promise(function (resolve, reject) {
    var svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
    var svgUrl = URL.createObjectURL(svgBlob);
    console.log('svgUrl', svgUrl);
    var img = new Image();
    img.onload = function () {
      URL.revokeObjectURL(svgUrl);

      var canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      var pngDataUrl = canvas.toDataURL('image/png');
      resolve(pngDataUrl);
    };

    img.onerror = function (error) {
      reject(error);
    };

    img.src = svgUrl;
  });
}
