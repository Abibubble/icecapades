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
        ctx.fillStyle = "red";
        ctx.fillRect(this.hitBoxX, this.hitBoxY, this.hitBoxWidth, this.hitBoxHeight);
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
        this.x += gameSpeed * 2;
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
    }

    hit() {
        for (let i = 0; i < slugsArray.length; i++) {
            let slugInst = slugsArray[i]; // Get slug[i]
            let collideWith = slugInst;
            if ((collideWith.x > this.hitBoxX && collideWith.x < this.hitBoxX + this.hitBoxWidth) || (collideWith.x + collideWith.width > this.hitBoxX && collideWith.x + collideWith.width < this.hitBoxX + this.hitBoxWidth)) {
                if ((collideWith.y > this.hitBoxY && collideWith.y < this.hitBoxY + this.hitBoxHeight) || (collideWith.y + collideWith.height > this.hitBoxY && collideWith.y + collideWith.height < this.hitBoxY + this.hitBoxHeight)) {
                    slugsArray.pop(collideWith);
                    snowballArray.pop(this);
                }
            }
        }

        for (let i = 0; i < wormsArray.length; i++) {
            let wormInst = wormsArray[i];
            let collideWith = wormInst;
            if ((collideWith.x > this.hitBoxX && collideWith.x < this.hitBoxX + this.hitBoxWidth) || (collideWith.x + collideWith.width > this.hitBoxX && collideWith.x + collideWith.width < this.hitBoxX + this.hitBoxWidth)) {
                if ((collideWith.y > this.hitBoxY && collideWith.y < this.hitBoxY + this.hitBoxHeight) || (collideWith.y + collideWith.height > this.hitBoxY && collideWith.y + collideWith.height < this.hitBoxY + this.hitBoxHeight)) {
                    wormsArray.pop(collideWith);
                    snowballArray.pop(this);
                }
            }
        }

        for (let i = 0; i < snowballArray.length; i++) {
            if ((snowman.x > this.x && snowman.x < this.x + this.width) || (snowman.x + snowman.width > this.x && snowman.x + snowman.width < this.x + this.width)) {
                snowmanHealth -= 10;
                pushSnowmanHealth();
                snowballArray.pop(snowballArray[i]);
                snowballArray.pop(this);
                if (snowmanHealth == 0) {
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
    if (snowballArray.length > 5) {
        snowballArray.pop(snowballArray[0]);
    }
};