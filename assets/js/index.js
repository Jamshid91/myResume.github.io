// scroll

const progressBar = document.querySelector('#progressBar');
let gitHub = document.querySelector('.gitHub i');
let openGit = document.querySelector('.open_git');
let openContact = document.querySelector('.open_contact');
let telegram = document.querySelector('.my_contact .fa-telegram-plane');
let instagram = document.querySelector('.my_contact .fa-instagram');
let facebook = document.querySelector('.my_contact .fa-facebook-f');


let totalHight = document.body.scrollHeight - window.innerHeight;

window.onscroll = () => {
  let progressHight = (window.pageYOffset / totalHight) * 100;
  progressBar.style.height = progressHight + '%'
}


gitHub.addEventListener('click', ()=> {
  openGit.classList.add('openGit');
  gitHub.parentElement.innerText = 'Введите разрешенный код, чтобы перейти на GitHub'

  if(button.disabled = true) {
    button.style.cursor = 'not-allowed'
  }
});


let input = openGit.children[0];
let button = openGit.children[1].children[0];

button.disabled = true;

input.addEventListener('keydown', () => {
  if(input.value != 'jamdev') {
    input.style.border = '2px solid red'

  } else {
    input.style.border = '2px solid green'
    button.disabled = false;
    button.style.cursor = 'pointer'
    button.style.opacity = '1'
  }
});

let i;
openContact.addEventListener('click', () => {
  if(i == 0) {
    openContact.firstElementChild.classList.remove('rotateIcon')
    telegram.classList.remove('telegram');
    instagram.classList.remove('instagram');
    facebook.classList.remove('facebook');
    telegram.style.left = '0px'
    instagram.style.left = '0px'
    facebook.style.left = '0px'
    return i = 1
  }

  else {
    console.dir(openContact)
    openContact.firstElementChild.classList.add('rotateIcon')
    telegram.style.left = '50px'
    instagram.style.left = '50px'
    facebook.style.left = '50px'
    setTimeout(() => {
      telegram.classList.add('telegram');
      instagram.classList.add('instagram');
      facebook.classList.add('facebook');
    }, 1000);
    return i = 0
  }

});


window.addEventListener('scroll', () => {
  const myInfo = document.querySelector('.my_info');
  const tatuText = document.querySelector('.tatu_text');
  const codeClassText = document.querySelector('.codeClass_text');
  const energoInfo = document.querySelector('.energo_info');
  const letcopInfo = document.querySelector('.letcop_info');
  const barkamolInfo = document.querySelector('.barkamol_info');
  const myWorkInfo = document.querySelector('.myWork_info');


  const positionMyInfo = myInfo.getBoundingClientRect().top;
  const positionTatuText = tatuText.getBoundingClientRect().top;
  const positionCodeClassText = codeClassText.getBoundingClientRect().top;
  const positionenergoInfo = energoInfo.getBoundingClientRect().top;
  const positionletcopInfo = letcopInfo.getBoundingClientRect().top;
  const positionbarkamolInfo = barkamolInfo.getBoundingClientRect().top;
  const positionmyWorkInfo = myWorkInfo.getBoundingClientRect().top;

  const screenPosition = window.innerHeight;

  if(screenPosition > positionMyInfo) {
    myInfo.classList.add('activeMyInfo')
  } else {
    myInfo.classList.remove('activeMyInfo')
  }
  
  if(screenPosition > positionTatuText) {
    tatuText.classList.add('activeMyInfo')
  } else {
    tatuText.classList.remove('activeMyInfo')
  }
  
  if(screenPosition > positionCodeClassText) {
    codeClassText.classList.add('activeMyInfo')
  } else {
    codeClassText.classList.remove('activeMyInfo')
  }
  if(screenPosition > positionenergoInfo) {
    energoInfo.classList.add('activeMyInfo')
  } else {
    energoInfo.classList.remove('activeMyInfo')
  }
  if(screenPosition > positionletcopInfo) {
    letcopInfo.classList.add('activeMyInfo')
  } else {
    letcopInfo.classList.remove('activeMyInfo')
  }
  if(screenPosition > positionbarkamolInfo) {
    barkamolInfo.classList.add('activeMyInfo')
  } else {
    barkamolInfo.classList.remove('activeMyInfo')
  }
  if(screenPosition > positionmyWorkInfo) {
    myWorkInfo.classList.add('activeMyInfo')
    setTimeout(() => {
      // myWorkInfo.classList.add('myWorkPosition')
    }, 1000);
  } else {
    myWorkInfo.classList.remove('activeMyInfo')
    // myWorkInfo.classList.remove('myWorkPosition')
  }

})