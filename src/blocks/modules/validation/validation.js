import $ from "jquery";
import "jquery-validation";
import "inputmask/dist/jquery.inputmask";

$(document).ready(function () {

    // Секция с вызовом масок ввода
    $('.validate_phone').inputmask("+ 7 (999) 999-99-99");

    $('.validate_email').inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        greedy: false,
        onBeforePaste: function (pastedValue, opts) {
            pastedValue = pastedValue.toLowerCase();
            return pastedValue.replace("mailto:", "");
        },
        definitions: {
            '*': {
                validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                cardinality: 1,
                casing: "lower"
            }
        }
    });

    $('.validate_fromto').inputmask("9{1,20}:9{1,20}");

    $('.validate_price').inputmask("999 999 999", { numericInput: true });

    $('.validate_date').inputmask("99.99.9999");
    // Конец секции с вызовом масок ввода


    // Секция с созданием методов валидации
    $.validator.addMethod("validation_phone", function (value, element) {
        return $(element).inputmask("isComplete");
    }, 'Введите номер телефона');

    $.validator.addMethod("validation_email", function (value, element) {
        return this.optional(element) || /^[0-9a-z-_\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i.test(value);
    }, 'Введите корректный email');

    $.validator.addMethod("validation_age", function (value, element) {
        return this.optional(element) || /^([0-9]{2})$/.test(value);
    }, 'Введите корректный возраст');

    $.validator.addMethod("validation_city", function (value, element) {
        return this.optional(element) || /^[а-яА-Я-]*$/.test(value);
    }, 'Используйте только кириллицу, также разрешен знак "-"');

    $.validator.addMethod("validation_password", function (value, element) {
        return this.optional(element) || /^[0-9]{6,30}$/.test(value);
    }, 'Пароль должен содержать от 6 до 30 символов');

    $.validator.addMethod("validation_name", function (value, element) {
        return this.optional(element) || /^[а-яА-Я]*$/.test(value);
    }, 'Используйте только кириллицу');

    $.validator.addMethod("validation_inn", function (value, element) {
        return this.optional(element) || /^([0-9]{10}|[0-9]{12})$/.test(value);
    }, 'ИНН может иметь только 10 или 12 цифр');

    $.validator.addMethod("validation_kpp", function (value, element) {
        return this.optional(element) || /^([0-9]{9})$/.test(value);
    }, 'КПП может иметь только 9 цифр');

    $.validator.addMethod("validation_ogrn", function (value, element) {
        return this.optional(element) || /^([0-9]{13})$/.test(value);
    }, 'ОГРН может иметь только 13 цифр');

    $.validator.addMethod("validation_series_passport", function (value, element) {
        return this.optional(element) || /^([0-9]{6})$/.test(value);
    }, 'Серия паспорта может иметь только 6 цифры');

    $.validator.addMethod("validation_num_passport", function (value, element) {
        return this.optional(element) || /^([0-9]{4})$/.test(value);
    }, 'Номер паспорта может иметь только 4 цифры');

    $.validator.addMethod("validation_pincode_passport", function (value, element) {
        return this.optional(element) || /^([0-9]{6})$/.test(value);
    }, 'Код подразделения может иметь только 6 цифр');

    $.validator.addMethod("validation_corresponding_account", function (value, element) {
        return this.optional(element) || /^([0-9]{20})$/.test(value);
    }, 'Корреспондирующий счет может иметь только 20 цифр');

    $.validator.addMethod("validation_pay_account", function (value, element) {
        return this.optional(element) || /^([0-9]{20})$/.test(value);
    }, 'Рассчетный счет может иметь только 20 цифр');

    $.validator.addMethod("validation_bic", function (value, element) {
        return this.optional(element) || /^([0-9]{9})$/.test(value);
    }, 'БИК может иметь только 9 цифр');

    $.validator.addMethod("validation_okpo", function (value, element) {
        return this.optional(element) || /^([0-9]{8}|[0-9]{10})$/.test(value);
    }, 'ОКПО может иметь только 8 или 10 цифр');

    $.validator.addMethod("validation_contact_person", function (value, element) {
        return this.optional(element) || /^[а-яА-Я.,() ]*$/.test(value);
    }, 'Только кириллица, также разрешены: ("." "," "()")');
    // Конец секции с созданием методов валидации


    // Секция с валидацией по классам
    $.validator.addClassRules({
        validate_phone: {
            required: true,
            validation_phone: true
        },
        validate_email: {
            required: true,
            validation_email: true
        },
        validate_nickname: {
            required: true,
        },
        validate_age: {
            required: true,
            digits: true,
            maxlength: 2
        },
        validate_city: {
            required: true,
            validation_city: true
        },
        validate_password: {
            required: true,
            rangelength: [6, 30]
        },
        validate_name: {
            required: true,
            validation_name: true
        },
        validate_inn: {
            required: true,
            validation_inn: true
        },
        validate_kpp: {
            required: true,
            validation_kpp: true
        },
        validate_ogrn: {
            required: true,
            validation_ogrn: true
        },
        validate_idpass: {
            required: true,
            validation_num_passport: true
        },
        validate_serpass: {
            required: true,
            validation_series_passport: true
        },
        validate_departcode: {
            required: true,
            validation_pincode_passport: true
        },
        validate_fromto: {
            required: true
        },
        validate_post: {
            required: true,
            validation_name: true
        },
        validate_price: {
            required: true
        },
        validate_discount: {
            required: true,
            digits: true
        },
        validate_date: {
            required: true,
            date: true
        },
        validate_offsetacc: {
            required: true,
            validation_corresponding_account: true
        },
        validate_payacc: {
            required: true,
            validation_pay_account: true
        },
        validate_bic: {
            required: true,
            validation_bic: true
        },
        validate_okpo: {
            required: true,
            validation_okpo: true
        },
        validate_supervisor: {
            required: true,
            validation_contact_person: true
        }
    });
    // Конец секции с валидацией по классам


    // Секция с сообщениями по умолчанию
    $.extend($.validator.messages, {
        required: "Это поле обязательно должно быть заполнено",
        remote: "Пожалуйста, исправьте это поле",
        email: "Введите адрес почты",
        date: "Пожалуйста введите корректную дату",
        maxlength: "Лимит из {0} символов превышен",
        minlength: "Введите минимум {0} символов",
        digits: "Введите только цифры",
        number: "Введите только цифры",
        rangelength: "Введите значение минимум из {0} символов и масимум из {1}"
    });
    // Конец секции с сообщениями по умолчанию


    // Секция с инициализацией валидации и её опций
    $(".form-validate").each(function() {
        $(this).validate({
            debug: true,
            oninput: false,
            onsubmit: true
        });
    });
    $(".form-validate input").on("input", function() {
        $(this).valid();
    })
    // Конец секции с инициализацией валидации

});




