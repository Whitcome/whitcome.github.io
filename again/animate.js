var menu__open = 0;
$(document).ready(function(){
    
    if ($(window).scrollTop() <= $("#header").height()) {
        $("#navbar").css('background-color', 'rgba(255, 255, 255, 0.9)');
        $("#navbar").css('border-bottom', 'rgba(250, 250, 250, 0.9)');
        $("#menu__button").css('background-color', 'rgba(250, 250, 250, 0.9)');
    }

    $(".menu__button").click(function(){
        if (menu__open == 0) {
            $("ul").css('height', $(window).height());
            $("ul").stop().animate({
                width:'250px'
            }, 300);
            $("#menu__icon").attr('class', 'fa fa-times');
            $(".menu__button").css('background-color', '#eee');
            $("#page__fade").stop().fadeIn();
            menu__open=1;
        } else {
            $("ul").stop().animate({
                width:'0'
            }, 300);
            $("#menu__icon").attr('class', 'fa fa-bars');
            $(".menu__button").css('background-color', 'transparent');
            $("#page__fade").stop().fadeOut();
            menu__open=0;
        }
    });

    $(document).scroll(function() { 
        if($(window).scrollTop() <= $("#header").height()) {
            $("#navbar").css('background-color', 'rgba(255, 255, 255, 0.95)');
            $("#navbar").css('border-bottom', 'rgba(250, 250, 250, 0.95)');
        } else {
            $("#navbar").css('background-color', '#fff');
            $("#navbar").css('transition', 'background 0.2s linear');
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