$(document).ready(function() {
    /* LANG SELECTOR */
    $('#lang-toggle').click(function(e){
        e.preventDefault();
        if(!$(this).parent().hasClass('is-open')) {
            $(this).parent().addClass('is-open');
            $('.lang__list').slideDown("slow");
        } else {
            $(this).parent().removeClass('is-open');
            $('.lang__list').slideUp("fast");
        }
    });


    /* SWIPER */
    var mainPageHero = new Swiper('.main-page-hero__swiper', {
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: true,
        speed: 1500,
        delay: 5000,
        loop: true,
    });

    var productSlider = new Swiper('.product-slider__container', {
        slidesPerView: 1,
        centeredSlides: true,
        speed: 1500,
        autoplay: true,
        delay: 5000,
        loop: true,
        navigation: {
            nextEl: '.product-slider__next',
            prevEl: '.product-slider__prev',
        }
    });

    /* SUB-MENU */
    $('.has-sub-menu > a').click(function(e){
        e.preventDefault();
    });

    $('.has-sub-menu').hover(
        function(){
            let submenu = $(this).parent().find('.sub-menu');
            submenu.stop(true, true).removeClass('hide').addClass('open');
        },
        function(){
            let submenu = $(this).parent().find('.sub-menu');
            timer = setTimeout(function(){
                if(!submenu.hasClass('hovered')){
                    submenu.stop(true, true).removeClass('open').addClass('hide');
                }
            }, 2000);
        }
    );

    $('.sub-menu').hover(
        function(){
            $(this).addClass('hovered');
        },
        function(){
            $(this).removeClass('hovered');
        }
    );


    /* FULL PAGE SCROLL */
    if($(window).width() > 1024) {
        $('#fullpage').fullpage({
            licenseKey: 'BAA0F537-E5354366-A0868117-DBEE81BC',
            scrollingSpeed: 1500,
            sectionsColor: '#fff',
            anchors:['firstSection', 'secondSection'],
            fixedElements: '#header',
            scrollBar: true,
            afterLoad (origin, destination, direction) {
                var loadedSection = destination;
                var id = loadedSection.item.id;
                var fader = $("#"+id).find('.fader');
                var title = $("#"+id).find('.category-section__title');
                
                if(destination.index >= 1) {
                    fader.addClass('animated fadeIn slow');
                    title.addClass('animated fadeInUp');
                    $('#toTop').addClass('run');
                } else {
                    $('#toTop').removeClass('run');
                }
            },
    
            onLeave (origin, destination, direction) {
                var loadedSection = destination;
                var id = loadedSection.item.id;
                var fader = $("#"+id).find('.fader');
                var title = $("#"+id).find('.category-section__title');
                
                if(origin.index == 5) {
                    $('#toTop').removeClass('onFooter');
                }
    
                if(destination.index >= 1) {
                    fader.removeClass('animated fadeIn slow');
                    title.removeClass('animated fadeInUp');
                }
    
                if(destination.index == 5) {
                    $('#toTop').addClass('onFooter');
                }
            }
        });
    } else {
        $('#toTop').click(function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#hero').offset().top
            }, 1000);
        });
    }

    /* CONTACT PAGE SELECT */
    $(document).ready(function() {
        $('#showrooms').niceSelect();
    });

    $('#showrooms').change(function(){
        var city = $(this).children("option:selected").val();

        $('.showrooms__content').find('.showrooms__content-tab').hide();
        $('.showrooms__content').find(`[data-tab='${city}']`).fadeIn();
    });

    /* LIGHTBOX ON PRODUCT PAGE */
    var $overlay = $('<div id="overlay"></div>');
    var $image = $('<img/>')
    var $close = $('<span class="close"></span>')
    var slide = $('.product-slider .swiper-slide a');
    if($(window).width() > 1024) {
        $overlay.append($image, $close);

        $('body').append($overlay);

        slide.click( function(e){
            e.preventDefault();
            var source = $(this).attr('href');

            $image.attr('src', source);

            $overlay.fadeIn();
        });

        $('#overlay').click(function(){
            $(this).fadeOut();
        });
    } else {
        slide.click( function(e){
            e.preventDefault();
        });
    }


    /* MOBILE BURGER */

    $('.burger').click(function(e){
        $(this).toggleClass('active');
        $('.mobile-menu-container').toggleClass('active');
        
        if($('.mobile-menu-container').hasClass('active')) {
            $('.mobile-menu-container').slideDown();
            $('.mobile-menu').addClass('forward');
        } else {
            $('.mobile-menu-container').slideUp();
            $('.mobile-menu').removeClass('forward');
        }
    });

    $('.has-sub-menu').click(function(e){
        $(this).toggleClass('open');
        if($(this).hasClass('open')){
            $(this).find('ul').slideDown();
        } else {
            $(this).find('ul').slideUp();
        }
    });

});

/* ELEMENT IN VIEWPORT */
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    
    return elementTop < viewportBottom;
};

var animatedScroll = $('.scroll');
var animatedLoad = $('.load');

$(window).on('scroll load', function(){
    animatedScroll.each(function() {
        if($(this).isInViewport()) {
            $(this).addClass('animated-text-show');
        }
    });
    animatedLoad.each(function() {
        if($(this).isInViewport()) {
            $(this).addClass('animated-text-show');
        }
    });
});

// $(window).on('load', function(){
//     animatedLoad.each(function() {
//         if($(this).isInViewport()) {
//             $(this).addClass('animated-text-show');
//         }
//     });
// });

if($(window).width() > 1024) {
    $(window).on('ready load resize', function(){
        /* HERO */
        var hh = $('#header').outerHeight();
        var wh = $(window).innerHeight();
        $('.hero').css('height', wh +'px');

        $('a[href="#next"').click(function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#next').offset().top - hh
            },1500)
        });
    });
}

