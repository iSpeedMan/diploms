$(document).ready(function () {
    //Слайдеры
    //Главный слайдер
    $('.slider').slick({
        dots: true, // активация точек
        speed: 1000, // время анимации
        autoplay: true, //автоматическое пролистывание
        autoplaySpeed: 2500, //скорость автоматического пролистывания
        pauseOnFocus: true, //Пауза при фокусе слайдера(нажатию куда либо)
        pauseOnHover: true, //Пауза при наведение на слайдер
        pauseOnDotsHover: true, //Пауза при наведение на точки
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    dots: false,
                    arrows: false,
                }
            }
        ]
        //arrows:true, отображение стрелок
        //slidesToShow: 3, количество отображаемых слаййдов
        //slidesToScroll: 1, количество пролистываемых слайдов
        //easing: 'linear' тип анимации
        //infinite: false, бесконечное пролистывание
        //initialSlide: 2, начальный слайд
        //draggable: true,  //Свайп для ПК
        //swipe:true,  Свайп для телефонов
        //waitForAnimate:false,Ускоренноя прокрутка слайдов стрелками
        //rows: 1, //количество рядов
    });



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

    //Появление кнопки вверх при скроле
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.arrow-top').addClass("arrow-active");
        } else {
            $('.arrow-top').removeClass("arrow-active");
        }
    });

    //Открывание меню для мобилы
    $('.nav-mobil').click(function () {
        $(this).toggleClass('active-mobil');
        $('.nav').toggleClass('nav-active');
        $('body').toggleClass('lock');
    })

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
        $('.nav-item').each(function () {
            var location = window.location.href;
            var link = this.href;
            if (location == link) {
                $(this).addClass('active-link');
            }
        });
    });

})
