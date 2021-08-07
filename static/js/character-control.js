const playerImage = new Image();
playerImage.src = "static/animations/penguin/walk_spritesheet.png";

const wormImage = new Image();
wormImage.src = "static/animations/enemies/worm/worm-sprite1.png"

function tuxControl() {
    handleBackground();
    tux.update();
    tux.draw();
    if (gameFrame % staggerFrames == 0) {
        if (frameX < 3) frameX++;
        else frameX = 0;
    }
    requestAnimationFrame(tuxControl);
}

tuxControl();

function newWorm() {
    worm.update();
    worm.draw();
    requestAnimationFrame(newWorm);
}

newWorm(); // place inside a create function
