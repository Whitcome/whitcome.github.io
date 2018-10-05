document.addEventListener('DOMContentLoaded', function() {
    const moving__background = $("#header__background");
    window.addEventListener('scroll', function() {
        if (document.body.scrollTop >= 0)
            ParallaxAnimation(moving__background);
        else
            moving__background.css('margin-top', 0);
    });
});

function ParallaxAnimation(el) {
    el.css('margin-top', ($(window).scrollTop())/4); // Parallax scrolling
};