$(document).ready(function () {
    //Двежение кнопки открывающей меню
    $('.burger').click(function () {
        if ($(window).width() < 450) {
            $('body').toggleClass('lock');
            $('.header').toggleClass('lockheader');
        }
        $(this).toggleClass('active');
        $('.header-menu').toggleClass('check');
    })

    //Галлерея
    $('.gallary-item').click(function () {
        $(this).clone() // сделаем копию картинки на которую было нажато
            .addClass("gallary-active") // добавим этой копии класс активации
            .appendTo(".galary-big"); // вставим измененный элемент в элемент для просмотра
        $("body").addClass("lock");
        $(".galary-big").addClass("galary-big-active");
    })
    $('.gallary-close').click(function () {
        $(".galary-big").closest('.gallary-item').remove();
        $("body").removeClass("lock");
        $(".galary-big").removeClass("galary-big-active");
    })

    $('.slider').slick({
        dots: false, // активация точек
        speed: 1000, // время анимации
        autoplay: true, //автоматическое пролистывание
        autoplaySpeed: 2500, //скорость автоматического пролистывания
        pauseOnFocus: true, //Пауза при фокусе слайдера(нажатию куда либо)
        pauseOnHover: true, //Пауза при наведение на слайдер
        pauseOnDotsHover: true, //Пауза при наведение на точки
    });

    //Появление кнопки вверх при скроле
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.arrow-top').addClass("arrow-active");
        } else {
            $('.arrow-top').removeClass("arrow-active");
        }
    });

    //Плавное перемещение к якорю
    $("a.arrow-top").click(function () {
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
        $('.menu-item').each(function () {
            var location = window.location.href;
            var link = this.href;
            if (location == link) {
                $(this).addClass('active-link');
            }
        });
    });

})
