// -------------------------------------------------------------------- Instructions

const instructionsModal = document.getElementById("instructions-modal");
const iInner = document.getElementById("i-inner");

// Toggles instructions modal open + closed, and pauses game
function toggleInstructions() {
    if (instructionsModal.classList.contains("invisible")) {
        gameSpeed = 0;
        endGame = true;
        tux.weight = 0;
        instructionsModal.classList.remove("invisible");
        iInner.classList.add("modal-animation");
    } else {
        gameSpeed = 6;
        endGame = false;
        tux.weight = .7;
        instructionsModal.classList.add("invisible");
        iInner.classList.remove("modal-animation");
    }
}

// -------------------------------------------------------------------- Win / Game Over Modal Variables

// Variables to reference in other script files
const winModal = document.getElementById("win-modal");
const gameOverModal = document.getElementById("game-over-modal");
const winInner = document.getElementById("win-inner");
const gameOverInner = document.getElementById("game-over-inner");

// -------------------------------------------------------------------- Close modal

const closeButton = document.getElementById("close-modal-button");

// Closes win and game over modals
function closeModal() {
    winModal.classList.add("invisible");
    gameOverModal.classList.add("invisible");
    winInner.classList.remove("modal-animation");
    gameOverInner.classList.remove("modal-animation");
}