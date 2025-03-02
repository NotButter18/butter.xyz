var c = document.getElementById("c");
var ctx = c.getContext("2d");
var matrixcolor = "#0f0"

c.height = window.innerHeight
c.width = window.innerWidth;

//田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑
var huh = "1234567890";
huh = huh.split("");

var font_size = 12;
var columns = c.width/font_size; 
var drops = [];

document.getElementById("fntswitch").innerHTML = ("Size: " + font_size)

function sizeswitch() {
    font_size = font_size + 1
    document.getElementById("fntswitch").innerHTML = ("Size: " + font_size)
    if (font_size > 25) {
        font_size = 12
        document.getElementById("fntswitch").innerHTML = ("Size: " + font_size)
    }
}

function btnswitch() {
    document.getElementById("clrswitch").style.color = matrixcolor
    document.getElementById("clrswitch").style.borderColor = matrixcolor
    document.getElementById("fntswitch").style.color = matrixcolor
    document.getElementById("fntswitch").style.borderColor = matrixcolor
    document.getElementById("home").style.color = matrixcolor
    document.getElementById("home").style.borderColor = matrixcolor
    document.getElementById("skib").style.color = matrixcolor
    document.getElementById("skib").style.borderColor = matrixcolor
}

function colorswitch() {
    if (matrixcolor == "#0f0") {
       matrixcolor = "#0037ff"
    } else if (matrixcolor == "#0037ff") {
       matrixcolor = "#9e00ff"
    } else if (matrixcolor == "#9e00ff") {
       matrixcolor = "#f00"
    } else if (matrixcolor == "#f00") {
       matrixcolor = "#ff7b00"
    } else if (matrixcolor == "#ff7b00") {
       matrixcolor = "#ff0"
    } else if (matrixcolor =="#ff0") {
       matrixcolor = "#0f0"
    }
    btnswitch()
}


for(var x = 0; x < columns; x++)
	drops[x] = 1; 

function draw()
{
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);
	
	ctx.fillStyle =matrixcolor;
	ctx.font = font_size + "px arial";
	for(var i = 0; i < drops.length; i++)
	{
		var text = huh[Math.floor(Math.random()*huh.length)];
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
			drops[i]++;
	}
}

function resize() {
   c.height = window.innerHeight;
   c.width = window.innerWidth;
}

setInterval(draw, font_size / 2 * 11);