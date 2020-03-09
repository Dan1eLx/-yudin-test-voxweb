$(document).ready(function () {
    toggleAccordion();
});

function toggleAccordion(){
    $('.accordion__button').off('click');
    $('.accordion__button').on('click', function(){
        var accordion = $(this).closest('.accordion');
        if (accordion.is('.accordion_open')){
            $('.accordion').removeClass('accordion_hidden');
            accordion.removeClass('accordion_open');
        } else {
            accordion.addClass('accordion_open');
            $('.accordion').addClass('accordion_hidden');
            accordion.removeClass('accordion_hidden');
        }
    })
}