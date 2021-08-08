//-- Tux
const playerImage = new Image();
playerImage.src = "static/animations/penguin/penguin_walk.png";

function tuxControl() {
    handleBackground();
    handleSlugs();
    handleWorms();
    handleFish();
    handleSnowflake();
    handleSnowball();
    tux.update();
    tux.draw();
    if (score >= 150) {
        gameSpeed = 0;
        snowman.isSpawned = true;
        handleSnowman();
    }
    if (gameFrame % staggerFrames == 0) {
        if (frameX < 3) frameX++;
        else frameX = 0;
    }
    requestAnimationFrame(tuxControl);
}

tuxControl();

//-- snowman
function newSnowman() {
    snowman.update();
    /* snowman.draw(); */
    requestAnimationFrame(newSnowman);
}

//! for testing only

// todo put timing functionin snowman to call multiple carrots

function newC() {
    carrot.update();
    requestAnimationFrame(newC);
}

newC();
