// -------------------------------------------------------------------- Audio functions

let audio = "off";
const gameAudio = new Audio('static/audio/game.mp3');
gameAudio.loop = true;

function checkAudioButtons() {
    if (audio === "on") {
        document.getElementById("play-button").classList.add("hide");
        document.getElementById("pause-button").classList.remove("hide");
        gameAudio.play();
    } else {
        document.getElementById("play-button").classList.remove("hide");
        document.getElementById("pause-button").classList.add("hide");
        gameAudio.pause();
    }
}

function toggleAudio() { // So that the user can toggle the audio off or on
    if (audio === "off") {
        audio = "on";
    } else {
        audio = "off";
    }
    checkAudioButtons();
}