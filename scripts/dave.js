var pageLoaded = false;
var header__background;

// Loading
document.addEventListener("DOMContentLoaded", function () {
    if (!pageLoaded)
        document.getElementById("body__content").style.opacity = "0";
});

window.addEventListener("load", function () {
    pageLoaded = true;
    header__background = document.getElementById("header__background");
    ParallaxAnimation(); // Set header background to correct position

    // Date
    var footerDate = document.getElementById("footerDate");
    if (footerDate != null)
        footerDate.innerText = new Date().getFullYear();

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
    if (header__background != null) {
        if (document.body.scrollTop >= 0)
            header__background.style.marginTop = (window.pageYOffset / 4) + "px";
        else
            header__background.style.marginTop = "0px";
    }
};