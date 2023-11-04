document.addEventListener("DOMContentLoaded", function() {
    var currentHour = new Date().getHours();
    var bodyElement = document.querySelector("body");
  
    if (currentHour >= 20 || currentHour < 6) {
      bodyElement.classList.add("dark-mode");
    }
  });
  