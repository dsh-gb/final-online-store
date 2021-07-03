'use strict';

let filter = document.querySelector('.dropdowns__heading--filter');
let filterIcon = document.querySelector('.dropdowns__icon-filter');
let trending = document.querySelector('.dropdowns__heading--trending');
let size = document.querySelector('.dropdowns__heading--size');
let price = document.querySelector('.dropdowns__heading--price');
let menuFilter = document.querySelector('.dropdowns__list--filter');
let menuTrending = document.querySelector('.dropdowns__list--trending');
let menuSize = document.querySelector('.dropdowns__list--size');
let menuPrice = document.querySelector('.dropdowns__list--price');
if (filter != null) {
    filter.addEventListener("click", () => {
        if (menuFilter.style.display !== 'block') {
            menuFilter.style.display = 'block';
            filter.style.color = '#F16D7F';
            filter.children[0].style.fill = '#F16D7F';
            filter.children[0].style.transform = 'rotateX(0.5turn)';
        }
        else {
            menuFilter.style.display = 'none';
            filter.style.color = '';
            filter.children[0].style.fill = '';
            filter.children[0].style.transform = 'rotateX(1.0turn)';
        }
    });
};

if (filterIcon != null) {
    filterIcon.addEventListener("click", () => {
        if (menuFilter.style.display !== 'block') {
            menuFilter.style.display = 'block';
            filterIcon.style.fill = '#F16D7F';
            filterIcon.style.transform = 'rotateX(0.5turn)';
        }
        else {
            menuFilter.style.display = 'none';
            filterIcon.style.fill = '';
            filterIcon.style.transform = 'rotateX(1.0turn)';
        }
    });
};

if (trending != null) {
    trending.addEventListener("click", () => {
        if (menuTrending.style.display !== 'block') {
            menuTrending.style.display = 'block';
            trending.style.color = '#F16D7F';
            trending.children[0].style.fill = '#F16D7F';
            trending.children[0].style.transform = 'rotateX(0.5turn)';
        }
        else {
            menuTrending.style.display = 'none';
            trending.style.color = '';
            trending.children[0].style.fill = '';
            trending.children[0].style.transform = 'rotateX(1.0turn)';
        }
    });
};

if (size != null) {
    size.addEventListener("click", () => {
        if (menuSize.style.display !== 'block') {
            menuSize.style.display = 'block';
            size.style.color = '#F16D7F';
            size.children[0].style.fill = '#F16D7F';
            size.children[0].style.transform = 'rotateX(0.5turn)';
        }
        else {
            menuSize.style.display = 'none';
            size.style.color = '';
            size.children[0].style.fill = '';
            size.children[0].style.transform = 'rotateX(1.0turn)';
        }
    });
};

if (price != null) {
    price.addEventListener("click", () => {
        if (menuPrice.style.display !== 'block') {
            menuPrice.style.display = 'block';
            price.style.color = '#F16D7F';
            price.children[0].style.fill = '#F16D7F';
            price.children[0].style.transform = 'rotateX(0.5turn)';
        }
        else {
            menuPrice.style.display = 'none';
            price.style.color = '';
            price.children[0].style.fill = '';
            price.children[0].style.transform = 'rotateX(1.0turn)';
        }
    });
};