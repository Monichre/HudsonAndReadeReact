// Deleted Google Map Code

retinajs();

$("#slider-animation").typed({
    strings: ["Fashion", "Design", "New York", "Travel"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});
$("#slider-animation-2").typed({
    strings: ["Fashion", "Design", "New York", "Travel"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});

$(window).scroll(function(){
    if( $(window).scrollTop() > 400){
        $('#mobile-nav').removeClass('header_white').css({
            'background-color': 'rgba(255, 255, 255, 0.7)',
            'color': '#333',

        });
        $('.logo').fadeIn(500);
        $('#mobile-nav').addClass('fixed');
    }else{
        $('#mobile-nav').addClass('header_white').removeClass('fixed').css({
            'background-color': ''
        });
        $('.logo').fadeOut(500);
    }
});

$(window).on('load', function () {
    $('.gallery-masonry').masonry({
        itemSelector: '.gallery-masonry-item',
        columnWidth: '.gallery-masonry-sizer',
        gutter: 30,
        percentPosition: true,
        originLeft: true
    });
});

$(document).ready(function(){

    $(document).on('click', '.menu', function () {
        $('#nav_overlay').css('left', '0');
    });

    $(document).on('click', '.close_btn', function () {
        $('#nav_overlay').css('left', '-100%');
    });

    $(".animsition").animsition();

    $('.my-gallery').magnificPopup({
        delegate: 'a',
        type:'image',
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-fade'
    });

    $(".post-carousel").owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        nav:true,
        navText: ['', ''],
        responsive:{
            0:{
                items:1
            }
        }
    });

    $(".opinions").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ['', ''],
        responsive:{
            0:{
                items:1
            }
        }
    });

    $('.full_slider_arrow').on('click', function(){
       $('html, body').animate({
           scrollTop: $(window).height() - $('header').height()
       }, 500);
    });
});
