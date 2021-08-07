let gameFrame = 0;
let score = 0;
let timerCount;

canvas.style.backgroundColor = "lightblue"; //! for testing only
/**
 * initiates game frame rate for all animations
 * maintained at constant speed
 * clears canvas every frame
 */
function frameRate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameFrame++; //TODO: add posibility to modify  speed for individual character so they can move at different speed
    requestAnimationFrame(frameRate);
}

/**
 * Increases score
 * 1 per second
 */
function scoreCount() {
    timerCount = setInterval(function () {
        score++; // increment score by 1
        console.log(score);
    }, 1000); // 1000ms = 1 second
}

frameRate();
// scoreCount();
