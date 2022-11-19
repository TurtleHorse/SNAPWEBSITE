"use strict";
//Function to toggles the drop down menu on Features and Company
 function toggleHidden(id) {
   id.classList.toggle("hidden");
}
//Function to toggle arrows up&down when you click Features and Company
function toggleArrow(arrow__down, arrow__up){
  
  if(!arrow__down.classList.contains("hidden") && arrow__up.classList.contains("hidden")){
    arrow__down.classList.toggle("hidden")
    arrow__up.classList.toggle("hidden")
  }
  else if(arrow__down.classList.contains("hidden") && !arrow__up.classList.contains("hidden")){
    arrow__down.classList.toggle("hidden")
    arrow__up.classList.toggle("hidden")
  }
  }

//Small screen and mobile screen functions
//Activates hamburger menu to pop out
  window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav')
    
    menu_btn.addEventListener('click', function (){ //Toggles the hamburger menu slide out and the clicking of the hamburgermenu&X
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active')
    })
}   

  







