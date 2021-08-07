const playerImage = new Image();
playerImage.src = "static/animations/penguin/penguin_walk.png";

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
  
const fishImage = new Image();
fishImage.src = 'static/animations/fish/purple-fish.png';

function newFish() {
    fish.update();
    fish.draw();
    requestAnimationFrame(newFish);
}

newFish();

function newWorm() {
    worm.update();
    worm.draw();
    requestAnimationFrame(newWorm);
}

newWorm(); // place inside a create function
