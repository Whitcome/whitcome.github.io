$(document).ready(function(){

    // Parallax scrolling header
    var moving__background = $("#header__background");
    $(window).scroll(function() { 
        if ($(window).height() >= 540) {
            moving__background.css('margin-top', ($(window).scrollTop())/3); // Parallax scrolling
            moving__background.css('opacity', 1 - ($(window).scrollTop())/moving__background.height()); // Fading out
        }
    });

    // Menu
    var menu__open = 0;
    function menu__toggle() {
        event.preventDefault();
        if (menu__open == 0) {
            $("#links > ul").css('overflow-y', 'auto');
            $("body").css('overflow-y', 'hidden');
            $("#links > ul").stop().animate({
                width:'250px'
            }, 200);
            $("#menu__icon").attr('class', 'fa fa-times');
            $("#page__fade").stop().fadeIn(200);
            menu__open=1;
        } else {
            $("#links > ul").css('overflow-y', 'hidden');
            $("body").css('overflow-y', 'auto');
            $("#links > ul").stop().animate({
                width:'0'
            }, 200);
            $("#menu__icon").attr('class', 'fa fa-bars');
            $("#page__fade").stop().fadeOut(200);
            menu__open=0;
        }
        return false;
    }

    $(".menu__button").click(function(){
        menu__toggle();
    });

    $("#links ul li").click(function(){
        if ($(window).width() <= 760) {
            menu__toggle();
        }
    });

    $("#page__fade").click(function() {
        menu__toggle();
    });
});

// Scroll smoothly when pressing links on navbar
$(document).on('click', 'a', function(event){
    if ($(this).hasClass("top__button")) {
        $('html,body').stop().animate({ scrollTop: 0 }, 500);
    } else {
        $('html, body').stop().animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);                    
    }
    return false;
});