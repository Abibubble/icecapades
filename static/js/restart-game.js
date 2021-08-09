// -------------------------------------------------------------------- Restart the game

// Resets all variables to game start
function restartGame() {
    snowmanHealth = 150;
    currentHealth = 50;
    currentAmmo = 10;
    gameFrame = 0;
    score = 0;
    fishArray = [];
    slugsArray = [];
    wormsArray = [];
    flakeArray = [];
    checkHealth();
    pushAmmo();
    closeModal();
    pushSnowmanHealth();
    bossHealthBar.classList.add("invisible");
    gameSpeed = 6;
    tux.dead = false;
    endGame = false;
    tuxIsDead = false;
    flakeSpeed = gameSpeed;
}