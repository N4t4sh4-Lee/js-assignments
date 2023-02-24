let period = 1

function addperiod() {
    if (period < 4) {
        period++
    }
    document.querySelector(".period1").innerText = period
}

function subperiod() {
    if (period > 0) {
        period--
    }
    document.querySelector(".period1").innerText = period
}


let score = 0

function addscore() {
    score++
    document.querySelector(".home1").innerText = score
}

function subscore() {
    if (score > 0) {
        score--
    }
    document.querySelector(".home1").innerText = score
}

function addscore2() {
    score = score + 2
    document.querySelector(".home1").innerText = score
}

function subscore2() {
    if (score > 1) {
        score = score - 2
    }
    document.querySelector(".home1").innerText = score
}

function addscore3() {
    score = score + 3
    document.querySelector(".home1").innerText = score
}

function subscore3() {
    if (score > 2) {
        score = score - 3
    }
    document.querySelector(".home1").innerText = score
}

function addscore1() {
    score++
    document.querySelector(".visitor1").innerText = score
}

function subscore1() {
    if (score > 0) {
        score--
    }
    document.querySelector(".visitor1").innerText = score
}

function addscore22() {
    score = score + 2
    document.querySelector(".visitor1").innerText = score
}

function subscore22() {
    if (score > 1) {
        score = score - 2
    }
    document.querySelector(".visitor1").innerText = score
}

function addscore33() {
    score = score + 3
    document.querySelector(".visitor1").innerText = score
}

function subscore33() {
    if (score > 2) {
        score = score - 3
    }
    document.querySelector(".visitor1").innerText = score
}


let sec = 60
let min = 15
let num = 0
let numInterval

   
function start() {
    numInterval = setInterval(subtime,1000)
}

function stop() {
    clearInterval(numInterval)
}

function reset() {
    min = 15
    clearInterval(numInterval)
    document.querySelector(".timer").innerText = "15:00"
}

function subtime() {
    if (min === 15) {
        document.querySelector(".timermin").innerText = "14:" 
        document.querySelector(".timersec").innerText = "59" 
        sec--
    }
    sec--
    document.querySelector(".timersec").innerText = sec
    if (sec === 0) {
        min--
        sec = 60
        if (min < 10) { 
            document.querySelector(".timermin").innerText = "0" + min + ":"
        } else {
            document.querySelector(".timermin").innerText = min + ":"
        }
    } 
    if (sec < 10) { 
        document.querySelector(".timersec").innerText = "0" + sec 
    } else {
        document.querySelector(".timersec").innerText = sec
    }
    if (min === 0) {
        document.querySelector(".timer").innerText = "00:00"
    }
}

let sec1 = 24
let numInterval1

function shotclock() {
    numInterval1 = setInterval(subsec,1000)
}

function resetshotclock() {
    sec1 = 24
    clearInterval(numInterval1)
    document.querySelector(".shotclock").innerText = sec1
}

function stopshotclock() {
    clearInterval(numInterval1)
}

function subsec() { 
    sec1--
    if (sec1 > 0) {
        document.querySelector(".shotclock").innerText = sec1
    } else {
        document.querySelector(".shotclock").innerText = "0"
    }
}
