// Preloader
var pageLoaded = false;

$(document).ready(function () {
    if (!pageLoaded) {
        document.getElementById("body__content").style.opacity = "0";
    }
});

window.onload = function () {
    pageLoaded = true;
    ParallaxAnimation($("#header__background"));
    document.getElementById("body__content").style.transition = "ease-out 0.2s opacity";
    document.getElementById("body__content").style.opacity = "1";
    setTimeout(stopLoadingAnimation, 400);
};

function stopLoadingAnimation() {
    document.getElementById("preloader").style.cssText = "animation: none; display: none;";
};

// Scrolling
document.addEventListener('DOMContentLoaded', function () {
    const moving__background = $("#header__background");
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop >= 0)
            ParallaxAnimation(moving__background);
        else
            moving__background.css('margin-top', 0);
    });
});

function ParallaxAnimation(el) {
    el.css('margin-top', ($(window).scrollTop() / 4)); // Parallax scrolling
};