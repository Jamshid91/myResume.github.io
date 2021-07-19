let inputs = document.querySelectorAll('form input');
let btnRequest = document.querySelector('.btn-request');


const [userName, userEmail, userPhone] = inputs;

btnRequest.addEventListener('click', () => {
  checkInputs()
  if(userName.classList == 'inputSucces' && userEmail.classList == 'inputSucces' && userPhone.classList == 'inputSucces') {
   return btnRequest.type = 'submit'
  }
})

function checkInputs() {
  let userNameValue = userName.value.trim();
  let userEmailValue = userEmail.value.trim();
  let userPhoneValue = userPhone.value.trim();

  // user name
  if(userNameValue === '') {
    setErrorFor(userName, 'Введите ваше имя')
    userName.style.border = '2px solid red'
  } else if(userNameValue.length <= 2) {
    setErrorFor(userName, "Должно быть не менее 3 слов")
  } else {
    setSuccesFor(userName)
    userName.style.border = '2px solid #19b5fe'
  }

  // user email
  if(userEmailValue === '') {
    setErrorFor(userEmail, 'Введите ваше эл. почта')
    userEmail.style.border = '2px solid red'
  } else if(!isEmail(userEmailValue)) {
    setErrorFor(userEmail, 'Некорректный эл. почта')
  } else {
    setSuccesFor(userEmail)
    userEmail.style.border = '2px solid #19b5fe'
  }

  // user phone number
  if(userPhoneValue === '') {
    setErrorFor(userPhone, 'Введите свой номер телефона')
    userPhone.style.border = '2px solid red'
  } else {
    setSuccesFor(userPhone)
    userPhone.style.border = '2px solid #19b5fe'
  }
  

}



function setErrorFor(input, message) {
  let small = input.parentElement.children[1] 
      small.innerText = message
  }
  
  function setSuccesFor(input) {
  let small = input.parentElement.children[1]
      input.classList.add('inputSucces');
      small.innerText = ''
  }

function isEmail(userEmail) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail);
}


















// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const number = document.getElementById('number');
// const btnRequest = document.querySelector('.btn-request');
// const modalRequest = document.querySelector('.modal-request');
// const modalClose = document.querySelector('.modal-close');
// const infoName = document.querySelector('.info-name');
// const infoEmail = document.querySelector('.info-email');
// const infoNumber = document.querySelector('.info-number');

// btnRequest.addEventListener('click', clickRequest);

// function clickRequest() {
//   if (name.value == '' || email.value == '' || number == '') {
//     name.style.border = '2px solid red';
//     email.style.border = '2px solid red';
//     number.style.border = '2px solid red';
//   }
//   else {
//     name.style.border = '';
//     email.style.border = '';
//     number.style.border = '';
//     modalRequest.style.display = 'block';
//     infoName.innerHTML = name.value;
//     infoEmail.innerHTML = email.value;
//     infoNumber.innerHTML = number.value;
//   }
// }


// modalClose.addEventListener('click', () => {
//   modalRequest.style.display = 'none';
//   name.value = '';
//   email.value = '';
//   number.value = '';
// })
