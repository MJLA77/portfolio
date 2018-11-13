




var mywork = document.getElementById("mywork");
var aboutme = document.getElementById("aboutme");


mywork.addEventListener('click',scroll);

function scroll() {
    event.preventDefault();
    call = setInterval(scroll,10);
    target = event.srcElement.dataset.scroll;
    offset = document.getElementById(mywork).offsetTop

}