var playercards = []
var jackcards = []

var youramounthtml = document.getElementById("youramount")
var yourcardshtml = document.getElementById("plrcardsdisplay")

var jackamounthtml = document.getElementById("jackamount")
var jackcardshtml = document.getElementById("jackcardsdisplay")

var winq = document.getElementById("winq")
var hitbutton = document.getElementById("hit")
var ngbutton = document.getElementById("ng")
var standbutton = document.getElementById("stand")
var startbutton = document.getElementById("start")

hitbutton.style.display = "none"
standbutton.style.display = "none"
ngbutton.style.display = "none"

var pstood = false

var pct = 0
var jct = 0

var playerstatus = "nil"
var jackstatus = "nil"
var gamestatus = "nil"

const fulldeck = ["♦️2","♦️3","♦️4","♦️5","♦️6","♦️7","♦️8","♦️9","♦️10","♦️Jack","♦️Queen","♦️King","♦️Ace",
    "♣️2","♣️3","♣️4","♣️5","♣️6","♣️7","♣️8","♣️9","♣️10","♣️Jack","♣️Queen","♣️King","♣️Ace",
    "💖2","💖3","💖4","💖5","💖6","💖7","💖8","💖9","💖10","💖Jack","💖Queen","💖King","💖Ace",
    "♠️2","♠️3","♠️4","♠️5","♠️6","♠️7","♠️8","♠️9","♠️10","♠️Jack","♠️Queen","♠️King","♠️Ace"
]
var gamedeck = []



function startgame() {
    startbutton.style.display = "none"
    hitbutton.style.display = "initial"
    standbutton.style.display = "initial"

    givecardtoplayer()
    givecardtoplayer()
    givecardtojack()
    givecardtojack()
}

function cleargame() {
    pstood = false
    gamestatus = "nil"
    gamedeck = [...fulldeck];
    playercards = []
    jackcards = []
    pct = 0
    jct = 0

    winq.innerHTML = ""
    youramounthtml.innerHTML = ""
    jackamounthtml.innerHTML = ""
    yourcardshtml.innerHTML = ""
    jackcardshtml.innerHTML = ""

    startbutton.style.display = "initial"
    ngbutton.style.display = "none"


}

function getstatus(total) {
    return total > 21 ? "Bust" : "Safe"
}

function concathand(hand) {
    let creatingcardstring = "Cards:";
    hand.forEach((value, index) => {
        if (index === 0 && hand === jackcards && !pstood) {
            creatingcardstring += " ❓";
        } else {
            creatingcardstring += (index === 0 ? " " : ", ") + value;
        }
    });
    return creatingcardstring;
}

function rcv(value) {
    if (value.includes("2")) return 2;
    if (value.includes("3")) return 3;
    if (value.includes("4")) return 4;
    if (value.includes("5")) return 5;
    if (value.includes("6")) return 6;
    if (value.includes("7")) return 7;
    if (value.includes("8")) return 8;
    if (value.includes("9")) return 9;
    if (value.includes("10") || value.includes("Jack") || value.includes("Queen") || value.includes("King")) return 10;
    if (value.includes("Ace")) return "Ace";
}

function calculateHandValue(cards) {
    let total = 0;
    let aces = 0;

    cards.forEach(card => {
        let val = rcv(card)
        if (val === "Ace") {
            aces += 1;
        } else {
            total += val;
        }
    })

    if (aces > 0) {
        if (total + 11 + (aces - 1) <= 21) {
            total += 11 + (aces - 1);
        } else {
            total += aces;
        }
    }

    return total;
}

function checkplrhand() {
    pct = calculateHandValue(playercards)
    if (pct > 21) {checkforwin()}
    youramounthtml.innerHTML = pct + " " + getstatus(pct)
    yourcardshtml.innerHTML = concathand(playercards)
}

function checkjackhand() {
    jct = calculateHandValue(jackcards)
    if (jct > 21) {checkforwin()}
    jackamounthtml.innerHTML = jct + " " + getstatus(jct)
    jackcardshtml.innerHTML = concathand(jackcards)
}

function givecardtoplayer() {
    if (pct <= 20) {
        let index = Math.floor(Math.random() * gamedeck.length)
        let card = gamedeck.splice(index, 1)[0]
        playercards.push(card)
        checkplrhand()
        checkforwin()
    }
}

function givecardtojack() {
    let index = Math.floor(Math.random() * gamedeck.length)
    let card = gamedeck.splice(index, 1)[0]
    jackcards.push(card)
    checkjackhand()
}

function checkforwin() {
    if (!pstood) return;

    if (pct > 21) {
        winq.innerText = "Jack is coming"
        winq.style.color = "red"
    } else if (jct > 21) {
        winq.innerText = "Jack is weakened"
        winq.style.color = "green"
    } else if (pct > jct) {
        winq.innerText = "Jack has been thwarted"
        winq.style.color = "green"
    } else if (pct < jct) {
        winq.innerText = "Jack has only gotten closer"
        winq.style.color = "red"
    } else {
        winq.innerText = "Jack is weary"
        winq.style.color = "orange"
    }
    ngbutton.style.display = "initial"

}

function stand() {
    pstood = true
    hitbutton.style.display = "none"
    standbutton.style.display = "none"
    revealDealerAndPlay()
}

function revealDealerAndPlay() {
    function draw() {
        if (jct < 17) {
            setTimeout(() => {
                givecardtojack()
                draw()
            }, 500)
        } else {
            checkjackhand()
            checkforwin()
        }
    }
    draw()
}

function ng() {
    cleargame()
}
cleargame()