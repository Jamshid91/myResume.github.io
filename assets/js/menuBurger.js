const menuBurger = document.querySelector('.menu_burger');
const navMobile = document.querySelector('.nav_mobile');
const navMobileBGC = document.querySelector('.nav_mobile_bgc');
let mobileList = document.querySelectorAll('.nav_mobile li');


const [l1, l2, l3, l4, l5 ] = mobileList;

console.log(l1, l2, l3, l4, l5)

mobileList.forEach(list => {
  list.addEventListener('click', () => {
    // list.classList.add('animate__bounceOutLeft')
    // setTimeout(() => {
      menuBurger.classList.remove('change');
    navMobile.classList.remove('change');
    navMobileBGC.classList.remove('change_bg');
    // }, 2000);

    // setTimeout(() => {
    //   list.classList.remove('animate__bounceOutLeft')
    // }, 3000);

  })
})

menuBurger.addEventListener('click', () => {

  navMobile.classList.toggle('change');
  menuBurger.classList.toggle('change');
  navMobileBGC.classList.toggle('change_bg');

  l1.classList.add('animate__bounceInRight', 'animate__delay-.5s')
  l2.classList.add('animate__bounceInRight', 'animate__delay-1s')
  l3.classList.add('animate__bounceInRight', 'animate__delay-2s')
  l4.classList.add('animate__bounceInRight', 'animate__delay-3s')
  l5.classList.add('animate__bounceInRight', 'animate__delay-4s')
});