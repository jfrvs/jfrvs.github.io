
let n = Math.random();

if (n > 0.666667) {
    document.getElementById("main__quote--1").style.visibility = "visible";
    document.getElementById("main__quote--1").style.opacity = 1;
} else if (n > 0.333334) {
    document.getElementById("main__quote--2").style.visibility = "visible";
    document.getElementById("main__quote--2").style.opacity = 1;
} else {
    document.getElementById("main__quote--3").style.visibility = "visible";
    document.getElementById("main__quote--3").style.opacity = 1;
}
