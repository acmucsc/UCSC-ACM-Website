document.addEventListener("DOMContentLoaded", function () {
    let burgerBtn = document.querySelector(".burger-menu-btn");
    let burgerMenu = document.querySelector(".burger-menu");
  
    let isBurgerOpen = false;
  
    burgerBtn.addEventListener("click", function () {
        if (!isBurgerOpen) {
            burgerMenu.style.display = "block";
            burgerBtn.style.backgroundPosition = "center left 50px, center";
            isBurgerOpen = true;
        } else {
            burgerMenu.style.display = "none";
            burgerBtn.style.backgroundPosition = "center, center left 50px";
            isBurgerOpen = false;
        }
    });
  });
  