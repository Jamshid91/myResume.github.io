// Start scroll page

window.onload = function() {
    $(document).ready(function () {

        $(window).on('scroll', function () {
            if ($(window).scrollTop()) {
                $('header').addClass('headerScroll')
                $('.clickUp').css('display', 'flex')
            } else {
            $('header').removeClass('headerScroll')
            $('.clickUp').css('display', 'none')
            }
        });

    });

    let scrolled;
    let timer;

    document.querySelector('.clickUp').onclick = function() {
        scrolled = window.pageYOffset

        scrollToTop();
    }

    function scrollToTop() {
        if(scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled -20000;

            timer = setTimeout(scrollToTop, 100)
        } else {
            clearTimeout(timer);
            window.scrollTo(0, 0)
        }
    }
}
