let homePage = document.querySelector('.home_page')
let openRecommendedList = document.querySelectorAll('.open_recommended_list');

openRecommendedList.forEach(open => {
    let closeRecommendedList = open.nextElementSibling
    open.addEventListener('click', openRecommended);
    closeRecommendedList.addEventListener('click', closeRecommended);


    function openRecommended() {
        open.previousElementSibling.classList.add('recommendedAdd');
        open.style.display = 'none'
        open.nextElementSibling.style.display = 'inline-block'
        console.dir(open.parentElement.style.boxShadow = '0px 1px 0px #E5E9F2')

    }

    function closeRecommended() {
        open.previousElementSibling.classList.remove('recommendedAdd');
        open.style.display = 'block'
        open.nextElementSibling.style.display = 'none'
        open.parentElement.style.boxShadow = 'none'
    }

    
window.addEventListener('click', (e) => {
if(e.target.tagName == 'DIV' || e.target.tagName == 'SECTION' || e.target.tagName == 'HEADER') {
    open.previousElementSibling.classList.remove('recommendedAdd');
    open.style.display = 'block'
    open.nextElementSibling.style.display = 'none'
    open.parentElement.style.boxShadow = 'none'
}
})
});

// End Recommended text






