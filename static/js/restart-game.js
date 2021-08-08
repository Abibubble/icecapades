function restartGame() {
    currentHealth = 50;
    currentAmmo = 10;
    gameFrame = 0;
    score = 0;
    slugsArray = [];
    wormsArray = [];
    checkHealth();
    checkAmmo();
    closeModal();
}