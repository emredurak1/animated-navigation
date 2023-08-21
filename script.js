"use strict";

const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");

const toggleNav = function () {
    menuBars.classList.toggle("change");
    overlay.classList.toggle("overlay-active");
    
    if (overlay.classList.contains("overlay-active")) {
      overlay.classList.add("overlay-slide-right");
      overlay.classList.remove("overlay-slide-left");
  
      [nav1, nav2, nav3, nav4, nav5].forEach((el, i) => {
        el.classList.remove(`slide-out-${i + 1}`);
        el.classList.add(`slide-in-${i + 1}`);
      });
  
    } else {
      overlay.classList.remove("overlay-slide-right");
      overlay.classList.add("overlay-slide-left");
      [nav1, nav2, nav3, nav4, nav5].forEach((el, i) => {
          el.classList.remove(`slide-in-${i + 1}`);
          el.classList.add(`slide-out-${i + 1}`);
        });
    }
  };
  

[menuBars, nav1, nav2, nav3, nav4, nav5].forEach((el) =>
  el.addEventListener("click", toggleNav)
);
