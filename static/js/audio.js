// -------------------------------------------------------------------- Audio functions

let audio = "off";
const gameAudio = new Audio('static/audio/game.mp3');
gameAudio.loop = true;
const playButton = document.getElementById("play-button");
const playIcon = document.getElementById("play-icon");
const pauseButton = document.getElementById("pause-button");
const pauseIcon = document.getElementById("pause-icon");

// Change the button icons and play / pause the audio
function checkAudioButtons() {
    if (audio === "on") {
        playButton.classList.add("hide");
        playIcon.classList.add("hide");
        pauseButton.classList.remove("hide");
        pauseIcon.classList.remove("hide");
        gameAudio.play();
    } else {
        playButton.classList.remove("hide");
        playIcon.classList.remove("hide");
        pauseButton.classList.add("hide");
        pauseIcon.classList.add("hide");
        gameAudio.pause();
    }
}

// So that the user can toggle the audio off or on
function toggleAudio() {
    if (audio === "off") {
        audio = "on";
    } else {
        audio = "off";
    }
    checkAudioButtons();
}



