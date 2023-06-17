window.onscroll = function() {
    var nav = document.getElementById("navbar");
    var links = document.querySelectorAll("#navbar a");
    var scroll = window.pageYOffset;
    nav.style.opacity = 1 - scroll/800;
    var opacity = nav.style.opacity;
    if (opacity < 1) {
        for (var i = 0; i < links.length; i++) {
            links[i].style.pointerEvents = "none";
        }
    } else {
        for (var i = 0; i < links.length; i++) {
            links[i].style.pointerEvents = "auto";
        }
    }
};