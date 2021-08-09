const snowballSprite = new Image();
snowballSprite.src = "static/animations/projectiles/snowball.png";
const snowballArray = [];

class Snowball {
    constructor() {
        this.originalWidth = 512;
        this.originalHeight = 386;
        this.x = tux.x + (tux.width / 2);
        this.height = this.originalHeight / 3;
        this.width = this.originalWidth / 3;
        this.y = tux.y;
        this.frameX = 5;
        this.hitBoxX = this.x + 55;
        this.hitBoxY = this.y + 30;
        this.hitBoxWidth = this.width - 65;
        this.hitBoxHeight = this.height - 55;
    }

    draw() {
        ctx.drawImage(
            snowballSprite,
            this.frameX * this.originalWidth,
            0,
            this.originalWidth,
            this.originalHeight,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    update() {
        this.y = this.y;
        this.x += flakeSpeed * 2;
        if (gameFrame % staggerFrames === 0) {
            if (this.frameX > 5) this.frameX--;
            else this.frameX = 5;
        }
        this.hitBoxX = this.x + 55;
        this.hitBoxY = this.y + 30;
        this.hitBoxWidth = this.width - 65;
        this.hitBoxHeight = this.height - 55;
        this.draw();
        this.hit();
        if (this.x > canvas.width) snowballArray.pop(this);
    }

    // When a snowball hits an enemy
    hit() {
        for (let i = 0; i < slugsArray.length; i++) { 
            let collideWith = slugsArray[i]; // Slug instance
            if ((collideWith.hitBoxX > this.hitBoxX &&
                collideWith.hitBoxX < this.hitBoxX + this.hitBoxWidth) ||
            (collideWith.hitBoxX + collideWith.hitBoxWidth > this.hitBoxX &&
                collideWith.hitBoxX + collideWith.hitBoxWidth < this.hitBoxX + this.hitBoxWidth)) {
            if ((collideWith.hitBoxY > this.hitBoxY &&
                    collideWith.hitBoxY < this.hitBoxY + this.hitBoxHeight) ||
                (collideWith.hitBoxY + collideWith.hitBoxHeight > this.hitBoxY &&
                    collideWith.hitBoxY + collideWith.hitBoxHeight < this.hitBoxY + this.hitBoxHeight)) {
                    slugsArray.splice(i, 1);
                    if (audio == 'on') {
                        enemyHitSnowballAudio.play();
                    }
                    let thisBall = snowballArray.indexOf(this);
                    snowballArray.splice(thisBall, 1);
                }
            }
        }

        for (let i = 0; i < wormsArray.length; i++) {
            let collideWith =  wormsArray[i]; // Worm instance
            if ((collideWith.hitBoxX > this.hitBoxX &&
                collideWith.hitBoxX < this.hitBoxX + this.hitBoxWidth) ||
            (collideWith.hitBoxX + collideWith.hitBoxWidth > this.hitBoxX &&
                collideWith.hitBoxX + collideWith.hitBoxWidth < this.hitBoxX + this.hitBoxWidth)) {
            if ((collideWith.hitBoxY > this.hitBoxY &&
                    collideWith.hitBoxY < this.hitBoxY + this.hitBoxHeight) ||
                (collideWith.hitBoxY + collideWith.hitBoxHeight > this.hitBoxY &&
                    collideWith.hitBoxY + collideWith.hitBoxHeight < this.hitBoxY + this.hitBoxHeight)) {
                    wormsArray.splice(i, 1); // Remove the hit worm
                    if (audio == 'on') { // Play audio if enabled
                        enemyHitSnowballAudio.play();
                    }
                    let thisBall = snowballArray.indexOf(this); // Get index of ball that hit worm
                    snowballArray.splice(thisBall, 1); // Remove appropriate ball
                }
            }
        }

        if (score >= 150) { // Only apply once snowman reached
            if ((snowman.hitBoxX <= this.hitBoxX + this.hitBoxWidth) &&
                (snowman.hitBoxY <= this.hitBoxY + this.hitBoxHeight)) {
                snowmanHealth -= 10; // Reduce Brian's health
                pushSnowmanHealth(); // Update Brian's health bar

                if (audio == 'on') {
                    enemyHitSnowballAudio.play();
                }

                let thisBall = snowballArray.indexOf(this);
                snowballArray.splice(thisBall, 1); 

                // Win
                if (snowmanHealth == 0) {
                    gameSpeed = 0;
                    endGame = true;
                    if (gameOverModal.classList.contains("invisible")) {
                        winModal.classList.remove("invisible");
                        winInner.classList.add("modal-animation");
                    }
                }
            }
        }
    }
}

const handleSnowball = () => {
    if (!endGame) {
        for (let i = 0; i < snowballArray.length; i++) {
            snowballArray[i].update();
        }

        if (snowballArray.length > 20) {
            snowballArray.pop(snowballArray[0]);
        }
    }
};