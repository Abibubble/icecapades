// -------------------------------------------------------------------- Event listeners for keys

let spacePressed = false;
let spaceHeld = false;
let arrowDownPressed = false;
let arrowUpPressed = false;
let tuxIsDead = false;

// D key or Space bar to Shoot
window.addEventListener("keydown", (e) => {
    if (e.key === "d" || e.key === "D" || e.key === " " || e.key === "ArrowRight") {
        e.preventDefault();
        spacePressed = true;
        if (!spaceHeld  && !tuxIsDead){
            fire = true;
        }
        spaceHeld = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.key === "d" || e.key === "D" || e.key === " " || e.key === "ArrowRight") {
        spacePressed = false;
        spaceHeld = false;
    }
});

// S key or Down arrow key to Slide
window.addEventListener("keydown", (e) => {
    if (e.key === "s" || e.key === "S" || e.key === "ArrowDown") {
        e.preventDefault();
        arrowDownPressed = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.key === "s" || e.key === "S" || e.key === "ArrowDown") {
        arrowDownPressed = false;
    }
});

// W key or Up arrow key to Jump
window.addEventListener("keydown", (e) => {
    if (e.key === "w" || e.key === "W" || e.key === "ArrowUp") {
        e.preventDefault();
        arrowUpPressed = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.key === "w" || e.key === "W" || e.key === "ArrowUp") {
        arrowUpPressed = false;
        playerImage.src = "static/animations/penguin/walk_spritesheet.png";
    }
});
