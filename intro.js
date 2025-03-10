var intro = document.querySelector(".intro")
var header = document.getElementById("sigma")
var counter = 0
var cyclecount = 0
var rand = Math.floor(Math.random() * (3.5 - 0.5 + 1) + 0.5) * 1000;


setInterval(butterRotate, 200);

function butterRotate() {
    if(counter == 0) {
        header.innerHTML = "🧈utter.xyz"
        counter = 1
    } else if(counter == 1) {
        header.innerHTML = "b🧈tter.xyz"
        counter = 2
    } else if(counter == 2) {
        header.innerHTML = "bu🧈ter.xyz"
        counter = 3
    } else if(counter == 3) {
        header.innerHTML = "but🧈er.xyz"
        counter = 4
    } else if(counter == 4) {
        header.innerHTML = "butt🧈r.xyz"
        counter = 5
    } else if(counter == 5) {
        header.innerHTML = "butte🧈.xyz"
        counter = 6
    } else if(counter == 6) {
        header.innerHTML = "butter🧈xyz"
        counter = 7
    } else if(counter == 7) {
        header.innerHTML = "butter.🧈yz"
        counter = 8
    } else if(counter == 8) {
        header.innerHTML = "butter.x🧈z"
        counter = 9
    } else if(counter == 9) {
        header.innerHTML = "butter.xy🧈"
        counter = 0
        cyclecount = cyclecount + 1
    } 


    if(cyclecount == 2) {
        header.innerHTML = "butter.xyz"
        intro.style.top = "-100vh"
    }
}

