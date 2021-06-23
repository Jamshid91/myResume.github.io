let addLikes = document.querySelectorAll('.info_list .fa-heart');
let readMores = document.querySelectorAll('.read_more');
let closeTexts = document.querySelectorAll('.close_text');
let blogLists = document.querySelectorAll('.blog_item .blogList');

let blogBtns = document.querySelectorAll('.blog_btns button');

for(let i = 0; i < blogBtns.length; i++) {
    blogBtns[i].addEventListener('click', function() {
        blogBtns.forEach(function(btn) {
            btn.classList.remove('active_blog')
        })
        this.classList.add('active_blog');
        let getValue = this.getAttribute('data-blog');
        blogLists.forEach(function(item){
            item.style.display = 'none'
        })

        if(getValue == 'firstList') {
            document.querySelector('.' + getValue).style.display = 'flex'
        }
        else if(getValue == 'secondList') {
            document.querySelector('.' + getValue).style.display = 'flex'
        }
        else if(getValue == 'thirdList') {
            document.querySelector('.' + getValue).style.display = 'flex'
        } else{
            alert()
        }
    })
}



for(let addLike of addLikes) {
    addLike.addEventListener('click', () => {
        let countLike = addLike.nextElementSibling
    
        addLike.classList.toggle('fas')
        addLike.classList.toggle('far')
    
        if(addLike.classList.contains('fas')) {
            addLike.classList.add('animation_like')
            countLike.innerText = +countLike.innerText + 1
        } else {
            addLike.classList.remove('animation_like')
            countLike.innerText = +countLike.innerText - 1
    
        }
    })
}

readMores.forEach(readMore => {
    readMore.addEventListener('click', () => {
        readMore.parentElement.children[2].classList.add('addMoreText')
        readMore.style.display = 'none'
        readMore.parentElement.children[2].children[3].style.display = 'block'
    })
});


closeTexts.forEach(close => {
    close.addEventListener('click', () => {
        close.parentElement.classList.remove('addMoreText');
        close.style.display = 'none'
        close.parentElement.nextElementSibling.style.display = 'block'
    })
});