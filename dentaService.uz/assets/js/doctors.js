let buttons = document.querySelectorAll('.buttons button');
let oneList = document.querySelector('.one_list');
let twoList = document.querySelector('.two_list');

const [one, two] = buttons;

two.addEventListener('click', () => {
    one.classList.remove('active');
    two.classList.add('active')
    oneList.style.display = 'none'
    twoList.style.display = 'flex'

});
one.addEventListener('click', () => {
    two.classList.remove('active');
    one.classList.add('active')
    twoList.style.display = 'none'
    oneList.style.display = 'flex'

});