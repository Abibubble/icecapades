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
    if (gameFrame % staggerFrames == 0) {
        if (frameX < 3) frameX++;
        else frameX = 0;
    }
    requestAnimationFrame(tuxControl);
}

tuxControl();

/* // -- worm
const wormImage = new Image();
wormImage.src = "static/animations/enemies/worm/worm-sprite1.png";

function newWorm() {
    worm.update();
    worm.draw();
    requestAnimationFrame(newWorm);
}

newWorm(); // place inside a create function */

//-- fish


//-- snowman
function newSnowman() {
    snowman.update();
    snowman.draw();
    requestAnimationFrame(newSnowman);
}

newSnowman();

//! for testing only

// todo put timing functionin snowman to call multiple carrots

function newC() {
    carrot.update();
    requestAnimationFrame(newC);
}

newC();
