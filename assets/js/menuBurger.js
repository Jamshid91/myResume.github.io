const menuBurger = document.querySelector('.menu_burger');
const navMobile = document.querySelector('.nav_mobile');
const navMobileBGC = document.querySelector('.nav_mobile_bgc');

menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('change');
  navMobile.classList.toggle('change');
  navMobileBGC.classList.toggle('change_bg');
})