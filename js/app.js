$(function () {
    $('.goto').click(function () {
        var el = $(this).attr('href').replace('#', '');
        var offset = -130;
        $('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

        if ($('.header-menu').hasClass('active')) {
            $('.header-menu,.header-menu__icon').removeClass('active');
            $('body').removeClass('lock');
        }
        return false;
    });

    if ($('.client__slider').length > 0) {
        $('.client__slider').slick({
            autoplay: false,
            arrows: true,
            accessibility: false,
            slidesToShow: 1,
            autoplaySpeed: 3000,
            adaptiveHeight: true,
            nextArrow: '<button type ="button" class="slick-next"></button>',
            prevArrow: '<button type ="button" class="slick-prev"></button>',
            responsive: [{
                breakpoint: 768,
                settings: {}
            }]
        });
    }

    $('body').on('click', '.tab__navitem', function (event) {
        var eq = $(this).index();
        if ($(this).hasClass('parent')) {
            var eq = $(this).parent().index();
        }
        if (!$(this).hasClass('active')) {
            $(this).closest('.tabs').find('.tab__navitem').removeClass('active');
            $(this).addClass('active');
            $(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
            if ($(this).closest('.tabs').find('.slick-slider').length > 0) {
                $(this).closest('.tabs').find('.slick-slider').slick('setPosition');
            }
        }
    });

    $(".rateYo").rateYo({
        readOnly: true,
        ratedFill: "#ffcc00",
        spacing: "5px",
        starWidth: "23px"
    });




    $.each($('.spoller.active'), function (index, val) {
        $(this).next().show();
    });
    $('body').on('click', '.spoller', function (event) {

        if ($(this).parents('.one').length > 0) {
            $(this).parents('.one').find('.spoller').not($(this)).removeClass('active').next().slideUp(300);
            $(this).parents('.one').find('.spoller').not($(this)).parent().removeClass('active');
        }

        if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
            $.each($(this).closest('.spollers').find('.spoller'), function (index, val) {
                $(this).removeClass('active');
                $(this).next().slideUp(300);
            });
        }
        $(this).toggleClass('active').next().slideToggle(300, function (index, val) {
            if ($(this).parent().find('.slick-slider').length > 0) {
                $(this).parent().find('.slick-slider').slick('setPosition');
            }
        });
        return false;
    });

    $('.icon-menu').click(function (event) {
        $(this).toggleClass('active');
        $('.top-header__menu').toggleClass('active');
        if ($(this).hasClass('active')) {
            $('body').data('scroll', $(window).scrollTop());
        }
        $('body').toggleClass('lock');
        if (!$(this).hasClass('active')) {
            $('body,html').scrollTop(parseInt($('body').data('scroll')));
        }
    });

    $('.menu__link').click(function (event) {
        $(this).toggleClass('active');
        $('.top-header__menu').removeClass('active');
        $('.menu__icon').removeClass('active');
        if ($(this).hasClass('active')) {
            $('body').data('scroll', $(window).scrollTop());
        }
        $('body').removeClass('lock');
        if (!$(this).hasClass('active')) {
            $('body,html').scrollTop(parseInt($('body').data('scroll')));
        }
    });

    AOS.init({
        disable: 'phone',
        offset: 100,
        once: true,
        duration: 1100,
        delay: 150
    });
});




