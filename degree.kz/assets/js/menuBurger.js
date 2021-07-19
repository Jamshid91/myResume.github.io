const menuBurger = document.querySelector('.menu_burger');
const burgerList = document.querySelector('.menu_burger_list');
const hidden = document.querySelector('.hidden');

menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('change');
  hidden.classList.toggle('openSidebar');
});

$(document).ready(function () {

  $(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('.topBtn').addClass('openBtn')
      $('.hidden').removeClass('openSidebar');
      $('.menu_burger').removeClass('change');
    } else {
      $('.topBtn').removeClass('openBtn');
    }
  });

});