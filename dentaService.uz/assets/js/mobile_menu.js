
const menuBurger = document.querySelector('.menu_burger');
const menuList = document.querySelector('.mobile_header .menu_list');
const logoHeader = document.querySelector('.mobile_header .logo_header');

menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('change');
  menuList.classList.toggle('menuSlider');
  logoHeader.classList.toggle('animLogoHeader');
  menuBurger.parentElement.children[3].classList.toggle('langMob')
})