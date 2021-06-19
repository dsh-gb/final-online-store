'use strict';

let widthWindow = window.screen.width;
let widthContainer;
let container = document.querySelectorAll('.container');
let descriptionCart = document.querySelector('.description');

if (widthWindow >= 1600) {
    widthContainer = 1140;
} else if (widthWindow < 1600 && widthWindow >= 768) {
    widthContainer = 363 + 0.4856 * widthWindow;
} else if (widthWindow < 768 && widthWindow >= 375) {
    widthContainer = 0.9567 * widthWindow + 1.2;
} else widthContainer = 96;

if (widthWindow > 375) {
    container.forEach(elem => elem.style.width = `${widthContainer}px`);
} else container.forEach(elem => elem.style.width = `${widthContainer}%`);

window.addEventListener('resize', function () {
    widthWindow = window.screen.width;
    if (widthWindow >= 1600) {
        widthContainer = 1140;
    } else if (widthWindow < 1600 && widthWindow >= 768) {
        widthContainer = 363 + 0.4856 * widthWindow;
    } else if (widthWindow < 768 && widthWindow >= 375) {
        widthContainer = 0.9567 * widthWindow + 1.2;
    } else widthContainer = 96;

    if (widthWindow > 375) {
        container.forEach(elem => elem.style.width = `${widthContainer}px`);
    } else container.forEach(elem => elem.style.width = `${widthContainer}%`);

    if (descriptionCart != null) {
        if (widthWindow < 769) {
            descriptionCart.classList.remove('container');
            descriptionCart.style.width = '100%';
        } else {
            descriptionCart.classList.add('container');
        };
    };
});