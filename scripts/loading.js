$(document).ready(function() {
    document.getElementById("loading__content").style.animation = "loading 0.8s cubic-bezier(0.6, 0.4, 0.8, 1) infinite";
    document.getElementById("body__content").style.opacity = "0";
});

onload=function() {   
    document.getElementById("body__content").style.transition = "ease-out 0.2s opacity";
    document.getElementById("body__content").style.opacity = "1";
    setTimeout(stopLoadingAnimation, 400);
}

stopLoadingAnimation=function() {
    document.getElementById("loading__content").style.animation = "none";
}