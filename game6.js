var money = 0;
var profit = 1;
var passiveP = 0;
var upgrade1 = 0;
var upgradeCost1 = 10;
var buy1 = document.getElementById("buy1");
var upgrade2 = 0;
var upgradeCost2 = 500;
var buy2 = document.getElementById("buy2");
var upgrade3 = 0;
var upgradeCost3 = 5000;
var buy3 = document.getElementById("buy3");
var pdisplay = document.getElementById("moneyp");
var butter = document.getElementById("butterclick")
var div1 = document.getElementById("upgr1")
var div2 = document.getElementById("upgr2")
var div3 = document.getElementById("upgr3")

passive()

function clickbutton() {
    money = money + profit
    pdisplay.innerHTML = "drops of butter: " + money;
    if (money >= upgradeCost1) {
        div1.classList.remove("upgrdivnone")
        div1.classList.add("upgrdiv")
    }
    if (money >= upgradeCost2) {
        div2.classList.remove("upgrdivnone")
        div2.classList.add("upgrdiv")
    }
    if (money >= upgradeCost3) {
        div3.classList.remove("upgrdivnone")
        div3.classList.add("upgrdiv")
        }   
}

function upgr1() {
    if (money >= upgradeCost1) {
        money = money - upgradeCost1;
        upgrade1 = upgrade1 + 1;
        profit =+ upgrade1 + 1;
        console.log("what the sigma?")
        if (upgradeCost1 < 100) {
            upgradeCost1 += 10;
        }
        else {
            if (upgradeCost1 < 1000) {
                upgradeCost1 += 50;
            }
            else {
                if (upgradeCost1 < 10000) {
                    upgradeCost1 += 500;
                }
                else {
                    if (upgradeCost1 > 10000) {
                        upgradeCost1 += 1000;
                    }
                }
            }
        }
        pdisplay.textContent = "drops of butter: " + money;
        buy1.textContent = "buy(" + upgradeCost1 + " DoB)";
    } else {
        buy1.textContent = "not enough butter"
        setTimeout(normaltext1, 1500)
    }
    if (money == 0) {
        pdisplay.textContent = "drops of butter: none🤣"
    }
}

function upgr2() {
    if (money >= upgradeCost2) {
        money = money - upgradeCost2;
        upgrade2 = upgrade2 + 1;
        passiveP = passiveP + 5;
        profit =+ (upgrade2 * 10) + 1;
        console.log("hawk tuah.")
        if (upgradeCost2 < 1000) {
            upgradeCost2 += 100;
        }
        else {
            if (upgradeCost2 < 10000) {
                upgradeCost2 += 500;
            }
            else {
                if (upgradeCost2 < 10000) {
                    upgradeCost2 += 500;
                }
                else {
                    if (upgradeCost2 > 10000) {
                        upgradeCost2 += 1000;
                    }
                }
            }
        }
        pdisplay.textContent = "drops of butter: " + money;
        buy2.textContent = "buy(" + upgradeCost2 + " DoB)";
    } else {
        buy2.textContent = "not enough butter"
        setTimeout(normaltext2, 1500)
    }
    if (money == 0) {
        pdisplay.textContent = "drops of butter: none🤣"
    }
}

function upgr3() {
    if (money >= upgradeCost3) {
        money = money - upgradeCost3;
        upgrade3 = upgrade3 + 1;
        passiveP = passiveP + 15;
        profit =+ (upgrade3 * 50) + 1;
        console.log("eagle tuah.")
        if (upgradeCost3 < 5500) {
            upgradeCost3 += 100;
        }
        else {
            if (upgradeCost3 < 10000) {
                upgradeCost3 += 500;
            }
            else {
                if (upgradeCost3 < 10000) {
                    upgradeCost3 += 500;
                }
                else {
                    if (upgradeCost3 > 10000) {
                        upgradeCost3 += 1000;
                    }
                }
            }
        }
        pdisplay.textContent = "drops of butter: " + money;
        buy3.textContent = "buy(" + upgradeCost3 + " DoB)";
    } else {
        buy3.textContent = "not enough butter"
        setTimeout(normaltext3, 1500)
    }
    if (money == 0) {
        pdisplay.textContent = "drops of butter: none🤣"
    }
}

function normaltext1() {
    buy1.textContent = "buy(" + upgradeCost1 + " DoB)";
    butter.classList.remove("active")
}

function normaltext2() {
    buy2.textContent = "buy(" + upgradeCost2 + " DoB)";
    butter.classList.remove("active")
}

function normaltext3() {
    buy3.textContent = "buy(" + upgradeCost3 + " DoB)";
    butter.classList.remove("active")
}

function passive() {
    console.log(passiveP)
    setTimeout(passive, 1000)
    money = money + passiveP;
    if (passiveP > 1) {
        pdisplay.textContent = "drops of butter: " + money;
    }
}

/* function perks {

} */