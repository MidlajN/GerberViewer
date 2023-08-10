

function initializeGerberToSVG() {
  if (document.getElementById("button") !== null) {
    document.getElementById("button").addEventListener("click", viewGerber);
  }
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





