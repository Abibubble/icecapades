// -------------------------------------------------------------------- Instructions

const instructionsModal = document.getElementById("instructions-modal");

function toggleInstructions() {
    if (instructionsModal.classList.contains("hide")) {
        instructionsModal.classList.remove("hide");
    } else {
        instructionsModal.classList.add("hide");
    }
}

// -------------------------------------------------------------------- Win / Game Over Modal

const winModal = document.getElementById("win-modal");
const gameOverModal = document.getElementById("game-over-modal");

function openModal() {
    if (this.id == winModal.id) {
        winModal.classList.remove("hide");
    } else if (this.id == gameOverModal.id) {
        gameOverModal.classList.remove("hide");
    }
}

// -------------------------------------------------------------------- Close modal

const closeButton = document.getElementById("close-modal-button");

function closeModal() {
    winModal.classList.add("hide");
    gameOverModal.classList.add("hide");
}