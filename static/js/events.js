let spacePressed = false;
let arrowRightPressed = false;

// -- Key Presses ------------
window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
      spacePressed = true;
  }
});
window.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
      spacePressed = false;
  }
  tux.frameX = 0;
});

window.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight") {
      arrowRightPressed = true;
  }
});
window.addEventListener("keyup", (e) => {
  if (e.code === "ArrowRight") {
      arrowRightPressed = false;
      tux.sliding = false;
      playerImage.src = "static/animations/penguin/walk_spritesheet.png";
  }
  tux.frameX = 0;
});
