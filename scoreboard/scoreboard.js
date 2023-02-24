let period = 1

function addPeriod() {
    if (period < 4) {
        period++
    }
    document.querySelector(".period1").innerText = period
}

function subPeriod() {
    if (period > 0) {
        period--
    }
    document.querySelector(".period1").innerText = period
}


let score = 0
let score1 = 0

function addScore() {
    score++
    document.querySelector(".home1").innerText = score
}

function subScore() {
    if (score > 0) {
        score--
    }
    document.querySelector(".home1").innerText = score
}

function addScore2() {
    score = score + 2
    document.querySelector(".home1").innerText = score
}

function subScore2() {
    if (score > 1) {
        score = score - 2
    }
    document.querySelector(".home1").innerText = score
}

function addScore3() {
    score = score + 3
    document.querySelector(".home1").innerText = score
}

function subScore3() {
    if (score > 2) {
        score = score - 3
    }
    document.querySelector(".home1").innerText = score
}

function addScore1() {
    score1++
    document.querySelector(".visitor1").innerText = score1
}

function subScore1() {
    if (score1 > 0) {
        score1--
    }
    document.querySelector(".visitor1").innerText = score1
}

function addScore22() {
    score1 = score1 + 2
    document.querySelector(".visitor1").innerText = score1
}

function subScore22() {
    if (score1 > 1) {
        score1 = score1 - 2
    }
    document.querySelector(".visitor1").innerText = score1
}

function addScore33() {
    score1 = score1 + 3
    document.querySelector(".visitor1").innerText = score1
}

function subScore33() {
    if (score1 > 2) {
        score1 = score1 - 3
    }
    document.querySelector(".visitor1").innerText = score1
}


let sec = 60
let min = 15
let num = 0
let numInterval

   
function start() {
    numInterval = setInterval(subTime,1000)
}

function stop() {
    clearInterval(numInterval)
}

function reset() {
    min = 15
    clearInterval(numInterval)
    document.querySelector(".timer").innerText = "15:00"
}

function subTime() {
    if (min === 15) {
        document.querySelector(".timerMin").innerText = "14:" 
        document.querySelector(".timerSec").innerText = "59" 
        sec--
    }
    sec--
    document.querySelector(".timerSec").innerText = sec
    if (sec === 0) {
        min--
        sec = 60
        if (min < 10) { 
            document.querySelector(".timerMin").innerText = "0" + min + ":"
        } else {
            document.querySelector(".timerMin").innerText = min + ":"
        }
    } 
    if (sec < 10) { 
        document.querySelector(".timerSec").innerText = "0" + sec 
    } else {
        document.querySelector(".timerSec").innerText = sec
    }
    if (min === 0) {
        document.querySelector(".timer").innerText = "00:00"
    }
}

let sec1 = 24
let numInterval1

function shotclock() {
    numInterval1 = setInterval(subSec,1000)
}

function resetShotclock() {
    sec1 = 24
    clearInterval(numInterval1)
    document.querySelector(".shotclock").innerText = sec1
}

function stopShotclock() {
    clearInterval(numInterval1)
}

function subSec() { 
    sec1--
    if (sec1 > 0) {
        document.querySelector(".shotclock").innerText = sec1
    } else {
        document.querySelector(".shotclock").innerText = "0"
    }
}
