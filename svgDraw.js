// onmessage = (event) => {
//     const {canvas, imgSrc} = event.data
//     const ctx = canvas.getContext("2d");
          
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, width * scaleFactor + 10, height * scaleFactor + 10);
//     ctx.drawImage(img, 5, 5, width * scaleFactor , height * scaleFactor );

//     postMessage(canvas)
// }