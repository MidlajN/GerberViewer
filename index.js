

function initializeGerberToSVG(files) {
  console.log('files : ', files);
  $('#overlay').fadeIn(700);
  viewGerber(files)
  // if (document.getElementById("button") !== null) {
  //   document.getElementById("button").addEventListener("click", viewGerber);
  // }
}

document.addEventListener('DOMContentLoaded', function() {
  var tabsNewAnim = $('#navbar-animmenu');
  var activeItemNewAnim = tabsNewAnim.find('.active');
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
      "left": itemPosNewAnimLeft.left + "px",
      "width": activeWidthNewAnimWidth + "px"
  });

  $("#navbar-animmenu").on("click", "li", function(e) {
      $('#navbar-animmenu ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
          "left": itemPosNewAnimLeft.left + "px",
          "width": activeWidthNewAnimWidth + "px"
      });
  });

  // add new Task to the Navbar list
  const button = document.getElementById('addNewButton');

  button.addEventListener('click', function() {
    const addNewIndex = button.getAttribute('data-sds');
    const indexInt = parseInt(addNewIndex);

    button.setAttribute('data-sds', indexInt + 1);

    if (indexInt + 1 < 10) {
      createNewItem();
    } else {
      createNewItem();
      button.style.display = 'none';
    }
  });

  function createNewItem() {
    const newItem = document.createElement('li');
    const newLink = document.createElement('a');
    const secondLink = document.createElement('a');
    secondLink.style.paddingLeft = '0px';
    newItem.style.minWidth = '130px';
    newItem.style.maxWidth = '130px';
    secondLink.setAttribute('onclick', 'removeItem(this.parentElement)');
    newLink.innerHTML = '<i class="far fa-file"></i>New Item ';
    secondLink.innerHTML = '<i class="fa-solid fa-circle-xmark fa-sm" style="position:relative; right:-8px"></i>';
    newItem.appendChild(newLink);
    newItem.appendChild(secondLink);

    $('#navbar-animmenu ul li').removeClass("active");

    const navbarList = document.querySelector('#navbar-animmenu ul');
    navbarList.appendChild(newItem);

    $(newItem).addClass('active');

    const activeWidthNewAnimWidth = $(newItem).innerWidth();
    const itemPosNewAnimLeft = $(newItem).position();
    $(".hori-selector").css({
        "left": itemPosNewAnimLeft.left + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
  }
});



// ------------------- Remove The Task from TaskBar -------------------
function removeItem(parent) {
  const addNewButton = document.getElementById('addNewButton');
  const index = parseInt(addNewButton.getAttribute('data-sds'));

  const isActive = $(parent).hasClass("active");
  let parentWidth = $(parent).innerWidth();
  const horiSelectorPositon = $(".hori-selector").position();
  let newHoriPosition = horiSelectorPositon.left - parentWidth;

  if (newHoriPosition <= 0) {
    newHoriPosition = 10;
    parentWidth -= 10;
  }

  const siblings = $(parent).siblings();
  const parentIndex = $(parent).index();
  const activeIndex = siblings.index(siblings.filter('.active'));

  // Check if the parent element is active or the active element is after the parent element
  if (isActive || activeIndex >= parentIndex) {
    $('.hori-selector').css({
      "left": newHoriPosition + "px",
      "width": parentWidth + "px",
    });

    if (isActive) {
      $(parent).prev().addClass("active");
    }
    $(parent).remove();
    addNewButton.setAttribute('data-sds', index - 1);
  } else {
    $(parent).remove();
  }
  
  if (index === 10) {
      addNewButton.style.display = '';
  }

  addNewButton.setAttribute('data-sds', index - 1);
}



function toggleLayer(LayerId, index) {
  console.log('LayerId : ', index);
  const stackTop = document.getElementById("mainTop");
  const stackBottom = document.getElementById("mainBottom");
  const topLayerElem = stackTop.getElementsByTagName("g");
  const bottomLayerElem = stackBottom.getElementsByTagName("g");

  Array.from(topLayerElem).forEach((layer) => {
    if (layer.hasAttribute("id")) {
      const layerId = layer.getAttribute("id");
      if (layerId.endsWith(LayerId)) {
        layer.style.display = layer.style.display === "none" ? "block" : "none";
        layerStatus[index] = index;
        
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




function makeEditable(liElement) {
  // Create an input element and set its value to the text content of the li element
  var inputElement = document.createElement("input");
  inputElement.value = liElement.textContent;

  // Replace the li element's content with the input element
  liElement.innerHTML = "";
  liElement.appendChild(inputElement);

  // Focus on the input element and select its content
  inputElement.focus();
  inputElement.select();

  // When the input element loses focus, revert back to the li element with the updated value
  inputElement.addEventListener("blur", function() {
      liElement.textContent = inputElement.value;
  });
  
  // When the Enter key is pressed, update the li element and remove the input element
  inputElement.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
          liElement.textContent = inputElement.value;
      }
  });
}
