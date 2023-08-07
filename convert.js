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



function convertSvgToCanvas(svgText, margin = 0, fill = null) {
    return new Promise(function (resolve, reject) {
      try {
        var domUrl = window.URL || window.webkitURL || window;
        if (!domUrl) {
          throw new Error("(browser doesn't support this)");
        }
  
        var match = svgText.match(/height="(\d+)/m);
        var height = match && match[1] ? parseInt(match[1], 10) : 200;
        var match = svgText.match(/width="(\d+)/m);
        var width = match && match[1] ? parseInt(match[1], 10) : 200;
  
        margin = margin || 0;
  
        if (!svgText.match(/xmlns="/mi)) {
          svgText = svgText.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
        }
  
        var canvas = document.createElement("canvas");
        canvas.width = height + margin * 2;
        canvas.height = width + margin * 2;
        var ctx = canvas.getContext("2d");
  
        var svg = new Blob([svgText], {
          type: "image/svg+xml;charset=utf-8",
        });
  
        var url = domUrl.createObjectURL(svg);
  
        var img = new Image();
        img.onload = function () {
          ctx.drawImage(this, margin, margin);
  
          if (fill) {
            var styled = document.createElement("canvas");
            styled.width = canvas.width;
            styled.height = canvas.height;
            var styledCtx = styled.getContext("2d");
            styledCtx.save();
            styledCtx.fillStyle = fill;
            styledCtx.fillRect(0, 0, canvas.width, canvas.height);
            styledCtx.strokeRect(0, 0, canvas.width, canvas.height);
            styledCtx.restore();
            styledCtx.drawImage(canvas, 0, 0);
            canvas = styled;
          }
  
          domUrl.revokeObjectURL(url);
          resolve(canvas);
        };
  
        img.src = url;
      } catch (err) {
        reject("failed to convert svg to canvas: " + err);
      }
    });
  }
  