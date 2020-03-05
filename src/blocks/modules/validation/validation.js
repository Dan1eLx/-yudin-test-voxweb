import $ from "jquery";
import "jquery-validation";
import "inputmask/dist/jquery.inputmask";

$(document).ready(function () {

    // Секция с вызовом масок ввода
    $('.phone').inputmask("+ 7 999 999 99 99", { showMaskOnHover: false});
    // Конец секции с вызовом масок ввода

    // Секция с инициализацией валидации и её опций
    $("form").each(function() {
        $(this).validate({
            debug: true,
            oninput: false,
            onsubmit: true,
            errorClass: "error",
            rules: {
                name: "required",
                locality: "required",
                processing: "required"
            },
            messages: {
                name: "Введите имя",
                locality: "Укажите континент, страну или город",
                processing: false,
            }
        });
    });
    $("form input").on("input", function() {
        $(this).valid();
    })
    // Конец секции с инициализацией валидации

});




