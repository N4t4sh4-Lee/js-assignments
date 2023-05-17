const music = new Audio(`./music/elevator-music.mp3`)

function playSong() {
    music.play()
}

function stopSong() {
    music.pause()
}