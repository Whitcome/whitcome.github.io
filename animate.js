var menu__open = 0;
$(document).ready(function(){
    if ($(window).scrollTop() <= ($("#header").height())) {
        $("#navbar").css('background-color', 'rgba(255, 255, 255, 0.9)');
        $("#navbar").css('box-shadow', '0px 0px 6px 0 rgba(0, 0, 0, 0.0)');
    }

    $(".menu__button").click(function(){
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

    var headerPicture = $("#header__background");
    $(window).scroll(function() { 
        if($(window).scrollTop() <= ($("#header").height())) {
            $("#navbar").css('background-color', 'rgba(255, 255, 255, 0.9)');
            $("#navbar").css('box-shadow', '0px 0px 6px 0 rgba(0, 0, 0, 0.0)');
        } else {
            $("#navbar").css('background-color', '#fff');
            $("#navbar").css('box-shadow', '0px 0px 6px 0 rgba(0, 0, 0, 0.2)');
        }
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