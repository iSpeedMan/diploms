$(document).ready(function () {

    $('.burger').click(function () {
        if ($(window).width() < 400) {
            $('body').toggleClass('lock');
            $('#header').toggleClass('check');

        }
        $(this).toggleClass('active');
        $('.nav-ul').toggleClass('check');
    })

    $('.nav-ul li a').click(function () {
        if ($(window).width() < 400) {
            console.log('клик');
            $('body').toggleClass('lock');
            $('#header').toggleClass('check');
            $('.burger').toggleClass('active');
            $('.nav-ul').toggleClass('check');
        }
    })

    $('.slider').slick({
        dots: false, // активация точек
        speed: 1000, // время анимации
        autoplay: true, //автоматическое пролистывание
        autoplaySpeed: 2500, //скорость автоматического пролистывания
        pauseOnFocus: true, //Пауза при фокусе слайдера(нажатию куда либо)
        pauseOnHover: true, //Пауза при наведение на слайдер
        pauseOnDotsHover: true, //Пауза при наведение на точки
        arrows: false,
    });

    $('.catalog-slider').slick({
        dots: true, // активация точек
        speed: 1000, // время анимации
        autoplay: true, //автоматическое пролистывание
        autoplaySpeed: 2500, //скорость автоматического пролистывания
        pauseOnFocus: true, //Пауза при фокусе слайдера(нажатию куда либо)
        pauseOnHover: true, //Пауза при наведение на слайдер
        pauseOnDotsHover: true, //Пауза при наведение на точки
        arrows: false,
    });

    //Появление кнопки вверх при скроле
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.arrow-top').addClass("arrow-active");
        } else {
            $('.arrow-top').removeClass("arrow-active");
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('#header').addClass("resize");
        } else {
            $('#header').removeClass("resize");
        }
    });
    


    //Плавное перемещение к якорю
    $("a").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

    //Выделение активного пункта меню
    $(function () {
        $('.nav-ul a').each(function () {
            var location = window.location.href;
            var link = this.href;
            if (location == link) {
                $(this).addClass('active');
            }
        });
    });


    //Галлерея
    $('.gallary .catalog-item').click(function () {
        $(this).clone() // сделаем копию картинки на которую было нажато
            .addClass("gallary-active") // добавим этой копии класс активации
            .appendTo(".gallary-big"); // вставим измененный элемент в элемент для просмотра
        $("body").addClass("lock");
        $(".gallary-big").addClass("gallary-big-active");
    })
    $('.gallary-close').click(function () {
        $(".gallary-active").remove();
        $("body").removeClass("lock");
        $(".gallary-big").removeClass("gallary-big-active");
    })

    
    var user_id = $('.username_id').text(); //Получение id пользователя
    var quantity_nbr = $('#quantity_nbr').val(); //Получить количество товара которого хотят купить
    var addBasket = $('#addBasket'); //Получение кнопки отправки формы для считывания с неё data атрибутов
    var product_id = addBasket.data('product-id'); //Получение id продукта в бд
    
    
    var form = $('.order');
    form.on('submit', function (e) {
        e.preventDefault();
        var FIO = $('.FIO').val(); 
        var tel = $('.tel').val(); 
        var massage = $('.massage').val(); 
        
        var data = {};
        data.FIO = FIO;
        data.tel = tel;
        data.massage = massage;

        var url = $(this).attr("action");
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            cache: true,
            success: function (data) {
                alert('Спасибо за заказ, мы свами свяжемся');
                location.reload();
            },
            error: function () {
                console.log('error');
            }
        })

    })
    
})
