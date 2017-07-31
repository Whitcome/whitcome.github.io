var menu__open = 0;
$(document).ready(function(){
    if ($(window).scrollTop() <= ($("#header").height())) {
        $("#navbar").css('background-color', 'rgba(255, 255, 255, 0.85)');
        $("#navbar").css('border-bottom', 'rgba(250, 250, 250, 0.0)');
        $("#navbar").css('box-shadow', '0px 0px 6px 0 rgba(0, 0, 0, 0.0)');
        $("#navbar").css('color', '#eee');
    }

    $(".menu__button").click(function(){
        if (menu__open == 0) {
            $("#links > ul").css('height', $(window).height()+71);
            $("#links > ul").stop().animate({
                width:'250px'
            }, 200);
            $("#menu__icon").attr('class', 'fa fa-times');
            $("#page__fade").stop().fadeIn(200);
            menu__open=1;
        } else {
            $("#links > ul").stop().animate({
                width:'0'
            }, 200);
            $("#menu__icon").attr('class', 'fa fa-bars');
            $("#page__fade").stop().fadeOut(200);
            menu__open=0;
        }
    });

    $(document).scroll(function() { 
        if($(window).scrollTop() <= ($("#header").height())) {
            $("#navbar").css('background-color', 'rgba(255, 255, 255, 0.85)');
            $("#navbar").css('border-bottom', 'rgba(250, 250, 250, 0.0)');
            $("#navbar").css('box-shadow', '0px 0px 6px 0 rgba(0, 0, 0, 0.0)');
            $("#navbar").css('color', '#eee');
        } else {
            $("#navbar").css('background-color', '#fff');
            $("#navbar").css('transition', 'background 0.2s linear');
            $("#navbar").css('box-shadow', '0px 0px 6px 0 rgba(0, 0, 0, 0.2)');
        }
        if (menu__open == 1) {
            $("ul").stop().animate({
                width:'0'
            }, 200);
            $("#menu__icon").attr('class', 'fa fa-bars');
            $(".menu__button").css('background-color', 'transparent');
            $("#page__fade").stop().fadeOut();
            menu__open=0;
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