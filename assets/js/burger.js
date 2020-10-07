let hamburger = document.querySelector('.burger');
let menu = document.querySelector('#menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');
  menu.classList.toggle('menu-open');
})

menu.addEventListener('click', function () {
  hamburger.classList.remove('open');
  menu.classList.remove('menu-open');
})

AOS.init();