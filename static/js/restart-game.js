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
}