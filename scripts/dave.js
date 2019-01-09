// Loading
var pageLoaded = false;
document.addEventListener("DOMContentLoaded", function () {
    if (!pageLoaded)
        document.getElementById("body__content").style.opacity = "0";
});

window.addEventListener("load", function () {
    pageLoaded = true;
    ParallaxAnimation(); // Set header background to correct position
    document.getElementById("body__content").style.transition = "ease-out 0.2s opacity";
    document.getElementById("body__content").style.opacity = "1";
    setTimeout(stopLoadingAnimation, 400);
});

function stopLoadingAnimation() {
    document.getElementById("preloader").style.cssText = "animation: none; display: none;";
};

// Scrolling
window.addEventListener('scroll', ParallaxAnimation);

function ParallaxAnimation() {
    if (document.body.scrollTop >= 0)
        document.getElementById("header__background").style.marginTop = (window.pageYOffset / 4) + "px";
    else
        header__background.style.marginTop = "0px";
};