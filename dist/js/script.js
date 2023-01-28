"use strict"

/**
 * Menu Hamburger
 */
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

/**
 * Skills Counter Progress Line
 */

const counters = document.querySelectorAll('.skills__progress-counter'),
      lines = document.querySelectorAll('.skills__progress-bar span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});