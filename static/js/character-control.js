//-- Tux
const playerImage = new Image();
playerImage.src = "static/animations/penguin/penguin_walk.png";

function tuxControl() {
    handleBackground();
    handleSlugs();
    handleWorms();
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
const fishImage = new Image();
fishImage.src = "static/animations/fish/purple-fish.png";

function newFish() {
    fish.update();
    fish.draw();
    requestAnimationFrame(newFish);
}

newFish();

//-- snowman
const  snowmanImage = new Image()
snowmanImage.src = "static/animations/enemies/snowman/snowman-sprite-right.png"
function newSnowman() {
    snowman.update();
    snowman.draw();
    requestAnimationFrame(newSnowman);
}

newSnowman();
