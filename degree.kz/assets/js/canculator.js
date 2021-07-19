const calcHouse = document.getElementById("calcHouse");
const rangeCub = document.getElementById("rangeCub");
const medium = document.getElementById("medium");
const mediumObj = document.getElementById("mediumObj");

let buttons = document.querySelectorAll('.paket button')

const [btnLight, btnMedium, btnFull] = buttons


buttons.forEach(btn => {
  btn.addEventListener('mouseover', () => {
    btn.nextElementSibling.classList.add('openInfo')
  });

  btn.addEventListener('mouseout', () => {
    btn.nextElementSibling.classList.remove('openInfo')
  });

  btn.addEventListener('click', () => {
   buttons.forEach(button => button.classList.remove('active_pacet'))
   btn.classList.add('active_pacet')
  })
})

calcHouse.addEventListener('input', addPrice);
function addPrice() {
  rangeCub.innerHTML = this.value;
  medium.innerHTML = Math.round(this.value * 42.5);
  mediumObj.innerHTML = Math.round(this.value * 425);
}

btnLight.addEventListener('click', () => {
  if (true) {
    calcHouse.addEventListener('input', addPrice);
    function addPrice() {
      rangeCub.innerHTML = this.value;
      medium.innerHTML = Math.round(this.value * 42.5);
      mediumObj.innerHTML = Math.round(this.value * 425);
    }

  }
  medium.innerHTML = '0'
  mediumObj.innerHTML = '0'
});

btnMedium.addEventListener('click', () => {
  if (true) {
    calcHouse.addEventListener('input', addPrice);
    function addPrice() {
      rangeCub.innerHTML = this.value;
      medium.innerHTML = Math.round(this.value * 4.5);
      mediumObj.innerHTML = Math.round(this.value * 450);
    }
  }
  medium.innerHTML = '0'
  mediumObj.innerHTML = '0'
});
btnFull.addEventListener('click', () => {
  if (true) {
    calcHouse.addEventListener('input', addPrice);
    function addPrice() {
      rangeCub.innerHTML = this.value;
      medium.innerHTML = Math.round(this.value * 5);
      mediumObj.innerHTML = Math.round(this.value * 500);
    }
  }
  medium.innerHTML = '0'
  mediumObj.innerHTML = '0'
});