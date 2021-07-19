let formInputs = document.querySelectorAll('.inputs input')
let formMessage = document.querySelector('.inputs textarea')
let submitBtn = document.querySelector('.inputs button')

const [name, email, phone] = formInputs;


submitBtn.addEventListener('click', () => {
    formCheckInputs()

    if(name.classList == 'inputSucces' && email.classList == 'inputSucces' && phone.classList == 'inputSucces' && formMessage.classList == 'inputSucces') {
           return submitBtn.type = 'submit'
        
    }

    

    
})


function formCheckInputs() {
    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let phoneValue = phone.value.trim();
    let messageValue = formMessage.value.trim();

    // user name
  if(nameValue === '') {
    formSetErrorFor(name, 'Введите ваше имя')
    name.style.border = '2px solid red'
  } else if(nameValue.length <= 2) {
    formSetErrorFor(name, "Должно быть не менее 3 слов")
  } else {
    formSetSuccesFor(name)
    name.style.border = '2px solid #19b5fe'
  }

  // user email
  if(emailValue === '') {
    formSetErrorFor(email, 'Введите ваше эл. почта')
    email.style.border = '2px solid red'
  } else if(!isEmail(emailValue)) {
    formSetErrorFor(email, 'Некорректный эл. почта')
  } else {
    formSetSuccesFor(email)
    email.style.border = '2px solid #19b5fe'
  }

  // user phone number
  if(phoneValue === '') {
    formSetErrorFor(phone, 'Введите свой номер телефона')
    phone.style.border = '2px solid red'
  } else {
    formSetSuccesFor(phone)
    phone.style.border = '2px solid #19b5fe'
  }
  
    // user message
    if(messageValue === '') {
        formSetErrorFor(formMessage, 'Введите ваше имя')
        formMessage.style.border = '2px solid red'
      } else if(messageValue.length <= 2) {
        formSetErrorFor(formMessage, "Должно быть не менее 3 слов")
      } else {
        formSetSuccesFor(formMessage)
        formMessage.style.border = '2px solid #19b5fe'
      }
  
}


function formSetErrorFor(formInput, message) {
    let small = formInput.parentElement.children[1] 
        small.innerText = message
    }
    
    function formSetSuccesFor(formInput) {
    let small = formInput.parentElement.children[1]
        formInput.classList.add('inputSucces');
        small.innerText = ''
    }
  
  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }