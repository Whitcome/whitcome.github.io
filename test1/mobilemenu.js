function openNav() {
    document.getElementById("navbar__side").style.width = "100%";
    document.getElementsByClassName("sidenav")[0].style.overflowY = "visible";
}

function closeNav() {
    document.getElementById("navbar__side").style.width = "0";
    document.getElementsByClassName("sidenav")[0].style.overflowY = "hidden";
}