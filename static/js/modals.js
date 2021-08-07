// -------------------------------------------------------------------- Instructions

const instructionsModal = document.getElementById("instructions-modal");
const iInner = document.getElementById("i-inner");

function toggleInstructions() {
    if (instructionsModal.classList.contains("invisible")) {
        instructionsModal.classList.remove("invisible");
        iInner.classList.add("modal-animation");
    } else {
        instructionsModal.classList.add("invisible");
        iInner.classList.remove("modal-animation");
    }
}

// -------------------------------------------------------------------- Win / Game Over Modal

const winModal = document.getElementById("win-modal");
const gameOverModal = document.getElementById("game-over-modal");
const winInner = document.getElementById("win-inner");
const gameOverInner = document.getElementById("game-over-inner");

function openModal() {
    if (this.id == winModal.id) {
        winModal.classList.remove("invisible");
        winInner.classList.add("modal-animation");
    } else if (this.id == gameOverModal.id) {
        gameOverModal.classList.remove("invisible");
        gameOverInner.classList.add("modal-animation");
    }
}

// -------------------------------------------------------------------- Close modal

const closeButton = document.getElementById("close-modal-button");

function closeModal() {
    winModal.classList.add("invisible");
    gameOverModal.classList.add("invisible");
    winInner.classList.remove("modal-animation");
    gameOverInner.classList.remove("modal-animation");
}