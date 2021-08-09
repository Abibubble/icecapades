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

// -------------------------------------------------------------------- Tux sound effects

const jumAudio = new Audio('static/audio/jump.wav');
jumAudio.loop = false;

const hitAudio = new Audio('static/audio/hit.mp3');
hitAudio.loop = false;

const slideAudio = new Audio('static/audio/slide.mp3');
slideAudio.loop = false;

const reloadAudio = new Audio('static/audio/reload.mp3');
slideAudio.loop = false;

const killSlugAudio = new Audio('static/audio/kill-slug.mp3');
slideAudio.loop = false;

const eatFishAudio = new Audio('static/audio/eat-fish.mp3');
eatFishAudio.loop = false;

const throwSnowballAudio = new Audio('static/audio/throw-snowball.mp3');
throwSnowballAudio.loop = false;

const enemyHitSnowballAudio = new Audio('static/audio/enemy-hit-snowball.mp3');
enemyHitSnowballAudio.loop = false;
