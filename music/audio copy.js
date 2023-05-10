const song1 = new Audio(`audio/2.mp3`)

let songplay = false

function playSong1() {
    song1.play()
    if (songplay = true) {
        stopSong2()
        stopSong3()
    }    
}

function stopSong1() {
    song1.pause()
    songplay = false
}

function resetSong1() {
    song1.load()
}

const song2 = new Audio(`audio/3.mp3`)

let songplay1 = false

function playSong2() {
    song2.play()
    if (songplay1 = true) {
        stopSong1()
        stopSong3()
    }    

}

function stopSong2() {
    song2.pause()
    songplay1 = false
}

function resetSong2() {
    song2.load()
}

const song3 = new Audio(`audio/4.mp3`)

let songplay2 = false

function playSong3() {
    song3.play()
    if (songplay2 = true) {
        stopSong1()
        stopSong2()
    }    

}

function stopSong3() {
    song3.pause()
    songplay2 = false
}

function resetSong3() {
    song3.load()
}