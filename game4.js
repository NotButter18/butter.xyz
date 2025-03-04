var hexagon = document.getElementById("colourhexagon")
var colouroptions = "0123456789abcdef";
var hex = document.getElementById("Hex")
colouroptions = colouroptions.split("");


function randomhex() {
    var text = "#" + colouroptions[Math.floor(Math.random()*colouroptions.length)] + colouroptions[Math.floor(Math.random()*colouroptions.length)] + colouroptions[Math.floor(Math.random()*colouroptions.length)] + colouroptions[Math.floor(Math.random()*colouroptions.length)] + colouroptions[Math.floor(Math.random()*colouroptions.length)] + colouroptions[Math.floor(Math.random()*colouroptions.length)]
    hexagon.style.backgroundColor = text
    hex.innerHTML = text
}