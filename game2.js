var timer = 1
var buttonstatus = "normal"
var canclick = true
var timing1 = 0
var timing2 = 0
var currenttime = NaN
var besttime = NaN
var readybuttontimeoutfunc
var scr = 0
var hscr = 1000

if (localStorage.getItem("highscore") == null) {
    localStorage.setItem("highscore", 10000)
}

hscr = localStorage.getItem("highscore")
 
document.getElementById("hscr").innerHTML = "High Score: "+localStorage.getItem("highscore")+"ms"


function readybutton() {
    document.getElementById("bigtext").classList.add("buttonready")
    document.getElementById("bigtext").classList.remove("buttonpriming")
    buttonstatus = "ready"
    document.getElementById("bigtext").innerHTML = "~~ click! ~~"
    canclick = true
    timing1 = performance.now()
}

function resetbutton() {
    canclick = true
    buttonstatus = "normal"
    document.getElementById("bigtext").innerHTML = "click to start"
    document.getElementById("bigtext").classList.add("button")
    document.getElementById("bigtext").classList.remove("buttonpriming")
}

function starttest() {
    if (buttonstatus == "normal" && canclick == true) {
        timer = Math.floor(Math.random() * (10000 - 2500) + 2500) 
        document.getElementById("bigtext").classList.add("buttonpriming")
        document.getElementById("bigtext").classList.remove("button")
        buttonstatus = "priming"
        document.getElementById("bigtext").innerHTML = "get ready..."
        canclick = false
        readybuttontimeoutfunc = setTimeout(readybutton,timer)
    

    } else if (buttonstatus == "priming" && canclick == false) {

        clearTimeout(readybuttontimeoutfunc)
        resetbutton()

    } else if (buttonstatus == "ready" && canclick == true) {
        document.getElementById("bigtext").classList.add("button")
        document.getElementById("bigtext").classList.remove("buttonready")
        buttonstatus = "normal"
        canclick = false
        timing2 = performance.now()
        scr = Math.floor(timing2 - timing1)
        document.getElementById("bigtext").innerHTML = Math.floor(scr)+"ms"
        if (scr<hscr) {
            hscr = scr
            localStorage.setItem("highscore",scr)         
            document.getElementById("hscr").innerHTML = "High Score: "+scr+"ms"
        }
        setTimeout(resetbutton, 3000)
    } 
}