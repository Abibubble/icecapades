const playerImage = new Image();
playerImage.src = "static/animations/penguin/walk_spritesheet.png";

function tuxControl() {
  tux.update();
  tux.draw();
  if (gameFrame % tuxStaggerFrames == 0) {
    if (frameX < tuxStaggerFrames - 1) frameX++;
    else frameX = 0;
  }
  requestAnimationFrame(tuxControl);
}

tuxControl();