// -------------------------------------------------------------------- Instructions

const instructionsModal = document.getElementById("instructions-modal");
const iInner = document.getElementById("i-inner");

function toggleInstructions() {
    if (instructionsModal.classList.contains("hide")) {
        instructionsModal.classList.remove("hide");
        iInner.classList.add("scale-0");
    } else {
        instructionsModal.classList.add("hide");
        iInner.classList.remove("scale-0");
    }
}

// -------------------------------------------------------------------- Win / Game Over Modal

const winModal = document.getElementById("win-modal");
const gameOverModal = document.getElementById("game-over-modal");

function openModal() {
    if (this.id == winModal.id) {
        winModal.classList.remove("hide");
        winModal.classList.add("scale-0");
    } else if (this.id == gameOverModal.id) {
        gameOverModal.classList.remove("hide");
        gameOverModal.classList.add("scale-0");
    }
}

// -------------------------------------------------------------------- Close modal

const closeButton = document.getElementById("close-modal-button");

function closeModal() {
    winModal.classList.add("hide");
    gameOverModal.classList.add("hide");
    winModal.classList.remove("scale-0");
    gameOverModal.classList.remove("scale-0");
}