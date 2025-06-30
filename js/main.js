/*------- SCROLL -------*/
window.onscroll = function () {
    if (window.scrollY > 0) {
        document.getElementById("scroll").style.transition = ".5s";
        document.getElementById("scroll").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("scroll").style.display = "flex";
        }, 500);
    } else if (window.scrollY == 0) {
        document.getElementById("scroll").style.display = "none";
        document.getElementById("scroll").style.opacity = "1";
    }
};

/*------- FILTER -------*/
function filter(criteria) {
    var projects = document.getElementsByClassName("projects");

    for (let i = 0; i < projects.length; i++) {

        if (criteria == projects[i].classList[1] || criteria == "all") {
            projects[i].style.display = "initial";
        } else {
            projects[i].style.display = "none";
        }
    }
}

/*------- SHOW ALL OR HIDE -------*/
/*function filter(criteria) {
    var projects = document.getElementsByClassName("projects");

    for (let i = 0; i < projects.length; i++) {

        if (projects[i] > 8) {
            projects[i].style.display = "none";
        }
    }
}*/

/*------- NAV -------*/

function openNav() {
    var nav = document.getElementsByTagName("nav")[0];
    nav.style.display = "flex";
}

function closeNav() {
    var nav = document.getElementsByTagName("nav")[0];
    nav.style.display = "none";
}

/*------- IMG -------*/
var galeria = document.getElementById("gallery");

function bigImg(e) {
    var imgSrc = e.target.src;

    document.getElementById("zoom").src = imgSrc;
    galeria.style.display = "flex";
    window.setTimeout(function () {
        galeria.style.opacity = "1";
    }, 10)
}

function closeGallery(e) {
    if (e.target == e.currentTarget) {
        window.setTimeout(function () {
            galeria.style.opacity = "0";
        }, 10)

        window.setTimeout(function () {
            galeria.style.display = "none";

        }, 490)
    }
}