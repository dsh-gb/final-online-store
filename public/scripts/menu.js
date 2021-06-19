'use strict';

let burger = document.querySelector('.header__menu-button');
let menu = document.querySelector('.header__navigation');
let menuExit = document.querySelector('.header__navigation-exit');
burger.addEventListener("click", () => {
    if (menu.style.display !== 'block') {
        menu.style.display = 'block';
        burger.children[0].style.fill = '#F16D7F'
    }
    else {
        menu.style.display = 'none';
        burger.children[0].style.fill = ''
    }
});
menuExit.addEventListener("click", () => {
    menu.style.display = 'none';
    burger.children[0].style.fill = ''
});