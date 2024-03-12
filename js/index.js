document.addEventListener("DOMContentLoaded", function () {
    
    var toggleButtons = document.querySelectorAll(".toggle-button");
    var hideResultButtons = document.querySelectorAll(".hide-result-button");
    var images = document.querySelectorAll(".image");
  
    
    toggleButtons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        
        images[index].style.display = "block";
        hideResultButtons[index].style.display = "block";
      });
    });
  
   
    hideResultButtons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        
        images[index].style.display = "none";
        button.style.display = "none";
      });
    });
  });
  