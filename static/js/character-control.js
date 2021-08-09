// -------------------------------------------------------------------- Tux
const playerImage = new Image();
playerImage.src = "static/animations/penguin/penguin_walk.png";

function tuxControl() {
    handleBackground();
    if (score < 150) {
        handleSlugs();
        handleWorms();
        handleFish();
    }

    handleSnowflake();
    handleSnowball();
    tux.update();
    tux.draw();

    if (score >= 150) {
        gameSpeed = 0;
        snowman.isSpawned = true;
        bossHealthBar.classList.remove("invisible");
        handleSnowman();

        if (!endGame) { // Stop carrots on end game
            handleCarrot();
        }
    }

    if (gameFrame % staggerFrames == 0) {
        if (frameX < 3) frameX++;
        else frameX = 0;
    }

    requestAnimationFrame(tuxControl);
}

tuxControl();