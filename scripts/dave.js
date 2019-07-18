var pageLoaded = false;
var header__background;

// Loading
document.addEventListener("DOMContentLoaded", function () {
    if (!pageLoaded) {
        document.getElementById("flex__loading").style.display = "flex";
    }       
});

window.addEventListener("load", function () {
    pageLoaded = true;
    header__background = document.getElementById("header__background");
    ParallaxAnimation(); // Set header background to correct position

    // Date
    var footerDate = document.getElementById("footerDate");
    if (footerDate != null)
        footerDate.innerText = new Date().getFullYear();

    document.getElementById("flex__loading").style.opacity = "0";
    setTimeout(stopLoadingAnimation, 400);
});

function stopLoadingAnimation() {
    document.getElementById("preloader").style.cssText = "animation: none;";
    document.getElementById("flex__loading").style.cssText = "display: none;";
};

// Scrolling
window.addEventListener('scroll', ParallaxAnimation);

function ParallaxAnimation() {
    if (header__background != null) {
        var backgroundPosition = window.pageYOffset / 4;
        if (backgroundPosition >= 0)
            header__background.style.marginTop = backgroundPosition + "px";
        else
            header__background.style.marginTop = "0px";
    }
};