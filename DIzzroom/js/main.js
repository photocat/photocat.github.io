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
        loop: true,
        navigation: {
            nextEl: '.product-slider__next',
            prevEl: '.product-slider__prev',
        },
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

    /* HERO */
    var hh = $('#header').outerHeight();
    var wh = $(window).innerHeight();
    $('.hero').css('height', wh +'px');

    $('a[href="#next"').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#next').offset().top - hh
        },1500)
    })

    /* ELEMENT IN VIEWPORT */
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
    
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
    
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    var animatedScroll = $('.scroll');
    var animatedLoad = $('.load');
    
    $(window).on('scroll', function(){
        animatedScroll.each(function() {
            if($(this).isInViewport()) {
                $(this).addClass('animated-text-show');
            }
        });
    });
    
    $(window).on('load', function(){
        animatedLoad.each(function() {
            if($(this).isInViewport()) {
                $(this).addClass('animated-text-show');
            }
        });
    });
});
