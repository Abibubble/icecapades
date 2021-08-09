// -------------------------------------------------------------------- Snowballs Bar
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

    hit() {
        for (let i = 0; i < slugsArray.length; i++) {
            let slugInst = slugsArray[i]; // Get slug[i]
            let collideWith = slugInst;
            if ((collideWith.x > this.hitBoxX && collideWith.x < this.hitBoxX + this.hitBoxWidth) || (collideWith.x + collideWith.width > this.hitBoxX && collideWith.x + collideWith.width < this.hitBoxX + this.hitBoxWidth)) {
                if ((collideWith.y > this.hitBoxY && collideWith.y < this.hitBoxY + this.hitBoxHeight) || (collideWith.y + collideWith.height > this.hitBoxY && collideWith.y + collideWith.height < this.hitBoxY + this.hitBoxHeight)) {
                    slugsArray.pop(collideWith);
                    snowballArray.pop(this);
                    if (audio == 'on') {
                        enemyHitSnowballAudio.play();
                    }
                }
            }
        }

        for (let i = 0; i < wormsArray.length; i++) {
            let collideWith =  wormsArray[i]; // worm instance
            if ((collideWith.hitBoxX > this.hitBoxX &&
                collideWith.hitBoxX < this.hitBoxX + this.hitBoxWidth) ||
            (collideWith.hitBoxX + collideWith.hitBoxWidth > this.hitBoxX &&
                collideWith.hitBoxX + collideWith.hitBoxWidth < this.hitBoxX + this.hitBoxWidth)) {
            if ((collideWith.hitBoxY > this.hitBoxY &&
                    collideWith.hitBoxY < this.hitBoxY + this.hitBoxHeight) ||
                (collideWith.hitBoxY + collideWith.hitBoxHeight > this.hitBoxY &&
                    collideWith.hitBoxY + collideWith.hitBoxHeight < this.hitBoxY + this.hitBoxHeight)) {
                    wormsArray.splice(i, 1); //remove the hit worm
                    if (audio == 'on') { //play audio if enabled
                        enemyHitSnowballAudio.play();
                    }
                    let thisBall = snowballArray.indexOf(this); //get index of ball that hit worm
                    snowballArray.splice(thisBall, 1); //remove appropriate ball
                }
            }
        }

        if (score >= 150) { //only apply once snowman reached
            if ((snowman.hitBoxX <= this.hitBoxX + this.hitBoxWidth) &&
                (snowman.hitBoxY <= this.hitBoxY + this.hitBoxHeight)) {
                snowmanHealth -= 10; //reduce Brian's health
                    pushSnowmanHealth(); //update Brian's health bar
                    if (audio == 'on') {
                        enemyHitSnowballAudio.play();
                    }
                    let thisBall = snowballArray.indexOf(this);
                    snowballArray.splice(thisBall, 1);      
                if (snowmanHealth == 0) { // win
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
    for (let i = 0; i < snowballArray.length; i++) {
        snowballArray[i].update();
    }

    if (snowballArray.length > 20) {
        snowballArray.pop(snowballArray[0]);
    }
};