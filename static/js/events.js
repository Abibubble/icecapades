// -------------------------------------------------------------------- Event listeners for keys

let spacePressed = false;
let arrowDownPressed = false;
let arrowUpPressed = false;

// D key or Space bar to Shoot
window.addEventListener("keydown", (e) => {
    if (e.key === "d" || e.key === " " || e.key === "ArrowRight") {
        e.preventDefault();
        spacePressed = true;
        console.log("snowball time!");
        shoot();
    }
});

window.addEventListener("keyup", (e) => {
    if (e.key === "d" || e.key === " " || e.key === "ArrowRight") {
        spacePressed = false;
    }
});

// S key or Down arrow key to Slide
window.addEventListener("keydown", (e) => {
    if (e.key === "s" || e.key === "ArrowDown") {
        e.preventDefault();
        arrowDownPressed = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.key === "s" || e.key === "ArrowDown") {
        arrowDownPressed = false;
        tux.sliding = false;
        playerImage.src = "static/animations/penguin/walk_spritesheet.png";
    }
});

// W key or Up arrow key to Jump
window.addEventListener("keydown", (e) => {
    if (e.key === "w" || e.key === "ArrowUp") {
        e.preventDefault();
        arrowUpPressed = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.key === "w" || e.key === "ArrowUp") {
        arrowUpPressed = false;
        playerImage.src = "static/animations/penguin/walk_spritesheet.png";
    }
});
