const root = document.documentElement;
var text = document.getElementById('typing')
var ybutton = document.getElementById('yes')
var nbutton = document.getElementById('no')
let continueFlag = false;
var textlength = 37
var typetime = 0
var opacity = 1
var jumpinterval = 0
var questionN = 0;
var buttonShow = 0;
var answer = "";


setTimeout(start, 2000)
setTimeout(checktext, 2000)

function start() {
    typetime = 0.07 * textlength + "s"
    text.classList.remove('textdelete')
    text.classList.add('text')
    ybutton.classList.add('buttonhide')
    nbutton.classList.add('buttonhide')
    text.innerText = "fullscreen for the best experience..."
    questionN = 1
    setTimeout(deletetext, 0.07 * textlength * 1000 + 900)
}

function checktext() {
    root.style.setProperty('--textlength', textlength);
    textlength = text.innerText.length
    typetime = 0.07 * textlength + "s"
    root.style.setProperty('--typetime', typetime);
    console.log(textlength)
    console.log(root)
    console.log(typetime)
    console.log(buttonShow)
}

function deletetext() {
    text.classList.remove('text')
    text.classList.add('textdelete')
    buttonShow = 0;
    continueFlag = false;
    if (buttonShow == 0) {
        hidebuttons()
    }
    setTimeout(newtext, 0.07 * textlength * 1000 + 300)
}

function newtext() {
    changetext()
    checktext()
    root.style.setProperty('--textlength', textlength);
    text.classList.remove('textdelete')
    text.classList.add('text')
    if (buttonShow == 1) {
        setTimeout(showbuttons, 0.07 * textlength * 1000 + 300)
    }
}

function changetext() {
    if (questionN == 1) {
        text.innerText = "this is meant to be a horror game..."
        questionN += 1; 
        setTimeout(deletetext, 0.07 * textlength * 1000 + 900)
    } else {
        if (questionN == 2) {
            text.innerText = "play at your own risk..." 
            questionN += 1; 
            setTimeout(deletetext, 0.07 * textlength * 1000 + 900)
        } else {
            if (questionN == 3) {
            text.innerText = "would you like to begin?"
            buttonShow = 1;
            setTimeout(varchange, 0.07 * textlength * 1000)
            if (answer == "yes") {
            text.innerHTML = "starting <span id='redtxt'>chatb0t</span>"
            buttonShow = 0; 
            questionN += 1; 
            setTimeout(deletetext, 0.07 * textlength * 1000 + 2900)
            if (questionN == 4) {
                text.innerText = "are you afraid of the dark?"
                buttonShow = 1;
                setTimeout(varchange, 0.07 * textlength * 1000)
            } else {
                if (questionN == 5) {
                    text.innerText = "why are you scared?" 
                    questionN += 1; 
                    setTimeout(deletetext, 0.07 * textlength * 1000 + 900)
            } } } } } }
}

function fadeinjump() {
    if (opacity > 10) {
        root.style.setProperty('--jumpopa', 0 + "%");
        opacity = 0
        clearInterval(jumpinterval)
    }
}

function fadeoutjump() {
    root.style.setProperty('--jumpopa', opacity + "%");
    opacity = opacity + 0.1
    fadeinjump()
}

function showbuttons() {
    ybutton.classList.remove('buttonhide')
    nbutton.classList.remove('buttonhide')
    ybutton.classList.add('button')
    nbutton.classList.add('button')
}

function hidebuttons() {
    ybutton.classList.remove('button')
    nbutton.classList.remove('button')
    ybutton.classList.add('buttonhide')
    nbutton.classList.add('buttonhide')
}

function checkansy() {
    answer = "yes";
    continueFlag = true;
    console.log(continueFlag)
    buttonShow = 0;
    deletetext()
}

function checkansn() {
    answer = "no";
    continueFlag = true;
    console.log(continueFlag)
    buttonShow = 0;
    deletetext()
}

function varchange() {
    if (continueFlag = true) {
        
    } else {
        setTimeout(varchange, 100);
    }
}

//   jumpinterval = setInterval(fadeoutjump, 100)