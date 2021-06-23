let form = document.getElementById('form')
let userPhoto = document.getElementById('userPhoto')
let userName = document.getElementById('userName')
let userEmail = document.getElementById('userEmail')
let subject = document.getElementById('subject')
let message = document.getElementById('message');
let submitBtn = document.getElementById('submitForm')

userPhoto.addEventListener('change', (e) => {
          e.target.parentElement.children[1]
      if(e.target.files.length > 0) {
        let src = URL.createObjectURL(e.target.files[0]);
        let addAvatar = e.target.parentElement.children[1];
        addAvatar.src = src;
        addAvatar.style.display = 'block'

    userPhoto.parentElement.classList.remove('inputError')
    userPhoto.parentElement.children[4].style.display = 'none'
    userPhoto.parentElement.children[3].style.display = 'block'
    userPhoto.parentElement.nextElementSibling.innerText = "" 
    userPhoto.parentElement.nextElementSibling.classList.add('success') 
      }
});


submitBtn.addEventListener('click', () => {
  checkInputs()

  let successPhoto = userPhoto.parentElement.nextElementSibling.classList;
  let successName = userName.parentElement.children[3].classList;
  let successEmail = userEmail.parentElement.children[3].classList;
  let successSubject = subject.parentElement.children[3].classList;
  let successMessage = message.parentElement.children[3].classList;

  if(successPhoto == 'success' && successName == 'success' && successEmail == 'success' && successSubject == 'success' && successMessage == 'success') {
    submitBtn.type = 'submit'   
  }

  

});



function checkInputs() {
  const userPhotoValue = userPhoto.value.trim();
  const userNameValue = userName.value.trim();
  const userEmailValue = userEmail.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();


  if(userPhotoValue === '') {

    userPhoto.parentElement.classList.add('inputError');
    userPhoto.parentElement.children[4].style.display = 'block'
    userPhoto.parentElement.nextElementSibling.innerText = "'jpg',  'jpeg', 'png' formatida bo'lishi kerak"
  } else {
  }

  if(userNameValue === '' || userNameValue.length <= 2) {
    setErrorFor(userName, "Ismingiz kamida 3ta so'zdan iborat bo'lishi kerak")
  } else {
    setSuccesFor(userName)
    userName.parentElement.children[3].classList.add('success')
  }

  if(userEmailValue === '') {
    setErrorFor(userEmail, "Elektron pochtangiz noto'g'ri kiritildi")
  } else {
    setSuccesFor(userEmail)
    userEmail.parentElement.children[3].classList.add('success')
  }

  if(subjectValue === '' || subjectValue.length < 10) {
    setErrorFor(subject, "Mavzu nomi qisqa va tushunarli bo'lsin")
  } else {
    setSuccesFor(subject)
    subject.parentElement.children[3].classList.add('success')
  }
  
  if(messageValue === '' || messageValue.length < 20) {
    setErrorFor(message, "Iltimos Fikringizni qoldiring")
  } else {
    setSuccesFor(message)
    message.parentElement.children[3].classList.add('success')
  }
}

function setErrorFor(input, message) {
  
let checkIcon = input.parentElement.children[1]
let errorIcon = input.parentElement.children[2]
let small = input.parentElement.children[3]

    input.classList.add('inputError');
    errorIcon.style.display = 'block'
    checkIcon.style.display = 'none'

    small.innerText = message
}

function setSuccesFor(input) {
  
let checkIcon = input.parentElement.children[1]
let errorIcon = input.parentElement.children[2]
let small = input.parentElement.children[3]

    checkIcon.style.display = 'block'
    errorIcon.style.display = 'none'
    input.classList.remove('inputError');
    input.classList.add('inputSucces');

    small.innerText = ''

} 