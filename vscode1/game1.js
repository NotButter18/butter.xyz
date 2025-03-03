var rngout = 1
var redo = "redo"
var rng = 10
var hng = 0
hng = localStorage.getItem("hng")
detectrainbow()


document.getElementById("hng").innerHTML ="Highest number generated: " +hng

document.getElementById("rngswitch").innerHTML = ("Currently: 1-" + rng)


function detectrainbow() {
    
if (hng > 9999999) {
    document.getElementById("hng").classList.add("rainbow")


}   else {
    document.getElementById("hng").classList.remove("rainbow")
}
}

function rngswitch() {
    rng = rng * 10
    document.getElementById("rngswitch").innerHTML = ("Currently: 1-" + rng)
    if (rng == 10000000) {
        rng = 10
        document.getElementById("rngswitch").innerHTML = ("Currently: 1-" + rng)
    }
}



function rngdecide() {
    detectrainbow()
    rngout = Math.floor(Math.random()* rng) +1
    document.getElementById("rng").innerHTML= rngout
     if (rngout>hng) {
        hng = rngout 
        localStorage.setItem("hng",hng)
        document.getElementById("hng").innerHTML ="Highest number generated: " +hng
        detectrainbow()
     }
    document.getElementById("rngb").innerHTML = redo
}
