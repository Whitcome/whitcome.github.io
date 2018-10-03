var pageLoaded = false;

// Preloader
$(document).ready(function() {
    if (!pageLoaded) {
        document.getElementById("body__content").style.opacity = "0";
    }
});

// When page is loaded
window.onload = function() {
    pageLoaded = true;
    document.getElementById("body__content").style.transition = "ease-out 0.2s opacity";
    document.getElementById("body__content").style.opacity = "1";
    setTimeout(stopLoadingAnimation, 400);
};

// Stop preloader animation
function stopLoadingAnimation() {
    document.getElementById("loading__content").style.cssText = "animation: none; display: none;";
};