$(document).ready(function () {
    initOutHeader();
    initActiveMenu();
});
function initOutHeader() {
    var header = $('.header'),
        scrollPrev = 0;
    if (header.length){
        $(window).scroll(function () {
            var scrolled = $(window).scrollTop();

            if (scrolled > 100 && scrolled > scrollPrev) {
                header.addClass('header_out');
            } else {
                header.removeClass('header_out');
            }
            scrollPrev = scrolled;
        });
    }
}

function initActiveMenu() {
    $('#menu-button').off('click');
    $('#menu-button').on('click', function () {
        $(this).toggleClass('menu-open');
        $('body').toggleClass('overflow-hidden');
        if ($('.header').not('.header_scrolled')){
            $('.header').addClass('header_scrolled');
        }
        $('.menu-wrapper').toggleClass('menu-wrapper_open')
    });

}