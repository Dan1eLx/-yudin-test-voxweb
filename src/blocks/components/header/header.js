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
    $('.header__menu-btn').off('click');
    $('.header__menu-btn').on('click', function () {
        $(this).toggleClass('header__menu-btn_open');
        $('body').toggleClass('overflow-hidden');
        $('.header').toggleClass('header_open-curtain')
    });

}