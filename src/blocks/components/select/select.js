$(document).ready(function () {
    toggleSelect();
});

function toggleSelect(){
    $('.select__show').off('click');
    $('.select__show').on('click', function(){
        var select = $(this).closest('.select__group');
        if (select.is('.select__group_open')){
            select.removeClass('select__group_open');
        } else {
            $('.select__group').removeClass('select__group_open');
            select.addClass('select__group_open');
        }
    })
}