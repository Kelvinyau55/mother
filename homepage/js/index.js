$(document).ready(function () {
   var mySwiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 4000,
            autoplayDisableOnInteraction: false,
            keyboardControl: true,
            loop: true
        });

        var swiper2 = new Swiper('.swiper-container-recommended', {
            slidesPerView: 2,
            spaceBetween: 20,
            autoplayDisableOnInteraction: false,
            keyboardControl: true,
            loop: true,
            autoplay: 3000
        });
  
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $.fn.extend({
        animateCss: function (animationName) {

            $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);

            });
        },
        closeanimateCss: function (animationName) {
            $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName).toggleClass("d-none ");
            });
        },
        accordion: function (duration) {

            var accord = $(this).find('.collapse');

            if (accord.hasClass('show')) {
                accord.slideUp(duration, function () {
                    accord.removeClass('show');
                });

            } else {
                accord.parent().each(function () {
                    $('.collapse').slideUp(duration, function () {
                        $(this).removeClass('show');
                    });
                    accord.slideDown(duration);
                    accord.addClass('show');

                });

            }
            return false;

        }
    });



    $('.menu-item').click(function () {
        $(this).accordion(300);
    });

    $('.menu-item2').click(function () {
        $(this).accordion(300);
    });


    $('#burger-menu').click(function () {
        $('#geser').toggleClass('hide-menu-right-50');
        $('.dim-background, #menu-side-right').toggleClass("d-none ");
        $('.dim-background').animateCss('bounceInLeft');
        $('#menu-side-right').animateCss('bounceInRight');
    });

    $('#close-menu').click(function () {
        $('#geser').toggleClass('hide-menu-right-50');
        $('.dim-background').closeanimateCss('bounceOutLeft');
        $('#menu-side-right').closeanimateCss('bounceOutRight');

    });


    $('#search').click(function () {
        $(this).toggleClass('zoomOut');
        $('.dim-background, #search-form').toggleClass("d-none ").animateCss('bounceInDown');
    });

    $('#close-search').click(function () {
        $('#search').toggleClass('zoomOut');
        $('.dim-background, #search-form').closeanimateCss('bounceOutUp');
    });


    $('#show-catalog').click(function () {
        $('#hide-catalog, #show-catalog, #catalog').toggleClass('d-none ');
        $('#catalog').animateCss('bounceInUp');
    });

    $('#hide-catalog').click(function () {
        $('#hide-catalog, #show-catalog').toggleClass('d-none ');
        $('#catalog').closeanimateCss('bounceOutDown', function () {
            $(this).toggleClass("d-none");
        });

    });

});