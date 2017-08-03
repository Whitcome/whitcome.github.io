$(document).ready(function(){
    var menu__open = 0;
    function menu__toggle() {
        if (menu__open == 0) {
            $("body").css('overflow-y', 'hidden');
            $("#links > ul").css('overflow-y', 'auto');
            $("#links > ul").stop().animate({
                width:'250px'
            }, 200);
            $("#menu__icon").attr('class', 'fa fa-times');
            $("#page__fade").stop().fadeIn(200);
            menu__open=1;
        } else {
            $("body").css('overflow-y', 'auto');
            $("#links > ul").css('overflow-y', 'hidden');
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
        $("body").css('overflow-y', 'auto');
        $("#links > ul").css('overflow-y', 'hidden');
        $("#links > ul").stop().animate({
            width:'0'
        }, 200);
        $("#menu__icon").attr('class', 'fa fa-bars');
        $("#page__fade").stop().fadeOut();
        menu__open=0;
    });
});

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