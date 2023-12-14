

function initializeGerberToSVG(files) {
  console.log('files : ', files);
  $('#overlay').fadeIn(function() {
    viewGerber(files)
  });
}


// __________________________ NavBar Creation & Manipulation ________________________

document.addEventListener('DOMContentLoaded', function() {

  // ----------- Navbar Animation -----------
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


  // ---------------- Create New Task in Navbar ----------------
  function createNewItem() {
    const newItem = document.createElement('li');
    const newLink = document.createElement('a');
    const secondLink = document.createElement('a');
    const name = document.createElement('a');
  
    name.setAttribute('contenteditable', 'false');
    name.classList.add('editableName');
    secondLink.style.paddingLeft = '0px';
    newItem.style.width = '130px';
    newItem.style.maxWidth = '130px';
    
    // Set the click event handler for the second link to remove the item
    secondLink.onclick = function() {
      removeItem(this.parentElement);
    };
    
    // Set the double click event handler for the new item to make it editable
    newItem.ondblclick = function() {
      makeEditable(this);
    };

    newLink.style.maxWidth = '30px';
    newLink.innerHTML = '<i class="far fa-file"></i>';
    name.innerHTML = 'New Layer';
    secondLink.innerHTML = '<i class="fa-solid fa-circle-xmark fa-sm" style="position:relative; right:-8px"></i>';
    
    newItem.appendChild(newLink);
    newItem.appendChild(name);
    newItem.appendChild(secondLink);
  
    $('#navbar-animmenu ul li').removeClass('active');
  
    const navbarList = document.querySelector('#navbar-animmenu ul');
    navbarList.appendChild(newItem);
  
    newItem.classList.add('active');
  
    const activeWidth = $(newItem).innerWidth();
    const itemPosLeft = $(newItem).position();
    $('.hori-selector').css({
      left: itemPosLeft.left + 'px',
      width: activeWidth + 'px'
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
  // 
}


// ----------------------- Make The Task Name Editable ------------------------
function makeEditable(element) {
  const contentElement = element.querySelector('a[contenteditable]');
  contentElement.setAttribute('contenteditable', 'true');
  contentElement.focus();
  
  // Add event listener for blur (when user clicks outside the element)
  contentElement.addEventListener('blur', function() {
      contentElement.setAttribute('contenteditable', 'false');
  });

  // Add event listener for Enter key
  contentElement.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
          event.preventDefault(); // Prevent newline from being added
          contentElement.blur(); // Trigger blur event to make content uneditable
      }
  });
}

// ____________________________________ End Of NavBar _______________________________________



// _________________________------ Toggle Buttons & Zoom Layer Section ------________________________

document.addEventListener('DOMContentLoaded', () => {

  // ##### Zoom The Layer Using Mouse Wheel #####
  const zoomContainer = document.getElementById('result');
  const zoomedContent = document.getElementById('zoomContainer');
  let zoomLevel = 1;
  const maxZoomLevel = 4

  zoomContainer.addEventListener('wheel', (event) => {
    event.preventDefault();

    const zoomFactor = event.deltaY > 0 ? 0.9 : 1.1; // Adjust the zoom speed

    const rect = zoomedContent.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const offsetX = (mouseX / rect.width) * 100;
    const offsetY = (mouseY / rect.height) * 100;

    const newZoomLevel = zoomLevel * zoomFactor;
    zoomLevel = Math.max(1, Math.min(maxZoomLevel, newZoomLevel)); // Ensure zoom doesn't go below 100%

    zoomedContent.style.transformOrigin = `${offsetX}% ${offsetY}%`;
    zoomedContent.style.transform = `scale(${zoomLevel})`;
  });


  // ##### Toggle Button on Each Layer of the PCB #####
  const toggleButtons = document.querySelectorAll('.toggleButton');

  toggleButtons.forEach(button => {
    const icon = button.querySelector('i');
    let color = button.style.backgroundColor;
    button.addEventListener('click', () => {
      
      if (icon.classList.contains('fa-eye')) {
        button.style.backgroundColor = 'white';
        icon.style.color = 'black';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        button.style.backgroundColor = color;
        icon.style.color = 'white';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    });
  });


  // ##### Toggle Button Section For the Top and Bottom #####
  $('#container').on('click', '#allLayers', function() {
    $('#buttonContainer').slideUp();
    $('#toplayersbtn, #bottomlayersbtn').removeClass('active');
    $('#allLayers').addClass('active');
    $('#toplayerlist, #bottomlayerlist').addClass('layerVisible').removeClass('layerHidden');
    $('#toplayers, #bottomlayers').fadeOut(function(){
      $('#fullLayersParent').fadeIn();
    });
  });

  $('#container').on('click', '#toplayersbtn', function() {
    $('#buttonContainer').slideDown();
    $('#allLayers, #bottomlayersbtn').removeClass('active');
    $('#toplayersbtn').addClass('active');
    $('#bottomlayerlist').removeClass('layerVisible').addClass('layerHidden');
    $('#toplayerlist').removeClass('layerHidden').addClass('layerVisible');
    $('#bottomlayers, #fullLayersParent').fadeOut(function(){
      $('#toplayers').fadeIn();
    });
  });

  $('#container').on('click', '#bottomlayersbtn', function() {
    $('#buttonContainer').slideDown();
    $('#allLayers, #toplayersbtn').removeClass('active');
    $('#toplayerlist').removeClass('layerVisible').addClass('layerHidden');
    $('#bottomlayerlist').removeClass('layerHidden').addClass('layerVisible');
    $('#bottomlayersbtn').addClass('active');
    $('#toplayers, #fullLayersParent').fadeOut(function(){
      $('#bottomlayers').fadeIn();
    });
  });

});

// ##### Toggle Each Layer Of the  PCB #####
function toggleLayer(LayerId, index) {
  console.log('LayerId : ', LayerId);
  const top = document.getElementById("toplayers");
  const bottom = document.getElementById("bottomlayers");
  const allLayers = document.getElementById("fullLayers");

  const Layers = allLayers.getElementsByTagName("g");
  const topLayers = top.getElementsByTagName("g");
  const bottomLayers = bottom.getElementsByTagName("g");

  Array.from(topLayers).forEach((layer) => {
    if (layer.hasAttribute("id")) {
      const layerId = layer.getAttribute("id");
      if (layerId.endsWith(LayerId)) {
        layer.style.display = layer.style.display === "none" ? "block" : "none";
        
      }
    }
  });
  Array.from(bottomLayers).forEach((layer) => {
    if (layer.hasAttribute("id")) {
      const layerId = layer.getAttribute("id");
      if (layerId.endsWith(LayerId)) {
        layer.style.display = layer.style.display === "none" ? "block" : "none";
      }
    }
  });
  Array.from(Layers).forEach((layer) => {
    if (layer.hasAttribute("id")) {
      const layerId = layer.getAttribute("id");
      if (layerId.endsWith(LayerId)) {
        layer.style.display = layer.style.display === "none" ? "block" : "none";
      }
    }
  })
}

// __________________________________ End Of Toggle Buttons & Zoom Layer Section __________________________________


// 