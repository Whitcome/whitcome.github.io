var pageLoaded = false;
var headerBackground;

// Loading
document.addEventListener("DOMContentLoaded", function () {
    if (!pageLoaded) {
        document.getElementById("flex-loading").style.display = "flex";
    }       
});

window.addEventListener("load", function () {
    pageLoaded = true;
    headerBackground = document.getElementById("header-background");
    ParallaxAnimation(); // Set header background to correct position

    // Date
    var footerDate = document.getElementById("footerDate");
    if (footerDate != null)
        footerDate.innerText = new Date().getFullYear();

    document.getElementById("flex-loading").style.opacity = "0";
    setTimeout(stopLoadingAnimation, 400);
});

function stopLoadingAnimation() {
    document.getElementById("preloader").style.cssText = "animation: none;";
    document.getElementById("flex-loading").style.cssText = "display: none;";
};

// Scrolling
window.addEventListener('scroll', ParallaxAnimation);

function ParallaxAnimation() {
    if (headerBackground != null) {
        var backgroundPosition = window.pageYOffset / 4;
        if (backgroundPosition >= 0)
            headerBackground.style.marginTop = backgroundPosition + "px";
        else
            headerBackground.style.marginTop = "0px";
    }
};