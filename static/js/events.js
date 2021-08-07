// -------------------------------------------------------------------- Event listeners for keys

let spacePressed = false;
let arrowDownPressed = false;
let arrowUpPressed = false;

// D key or Space bar to Shoot
window.addEventListener("keydown", (e) => {
  if (e.key === "d" || e.key === " ") {
    spacePressed = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key === "d" || e.key === " ") {
    spacePressed = false;
  }
  tux.frameX = 0;
});

// S key or Down arrow key to Slide
window.addEventListener("keydown", (e) => {
  if (e.key === "s" || e.code === "40") {
    arrowDownPressed = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key === "s" || e.code === "40") {
    arrowDownPressed = false;
    tux.sliding = false;
    playerImage.src = "static/animations/penguin/walk_spritesheet.png";
  }
  tux.frameX = 0;
});

// W key or Up arrow key to Jump
window.addEventListener("keydown", (e) => {
  if (e.key === "w" || e.code === "38") {
    arrowUpPressed = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key === "w" || e.code === "38") {
    arrowUpPressed = false;
    tux.jumping = false;
    playerImage.src = "static/animations/penguin/walk_spritesheet.png";
  }
  tux.frameX = 0;
});
