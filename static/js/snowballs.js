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
        this.x += gameSpeed * 2;
        if (gameFrame % staggerFrames === 0) {
           if (this.frameX > 5) this.frameX--;
            else this.frameX = 5;
        }
        this.draw();

        this.hit();
    }

    hit() {
        for (let i = 0; i < slugsArray.length; i++) {
            let slugX = slugsArray[i].x; // Get slug[i] x value
            if ((slugX > this.x && slugX < this.x + this.width) || (slugX + slug.width > this.x && slugX + slug.width < this.x + this.width)) {
                slugsArray.pop(slugsArray[i]);
                snowballArray.pop(snowballArray[i]);
            }
        }

        for (let i = 0; i < wormsArray.length; i++) {
            let wormX = wormsArray[i].x; // Get slug[i] x value
            if ((wormX > this.x && wormX < this.x + this.width) || (wormX + worm.width > this.x && wormX + worm.width < this.x + this.width)) {
                wormsArray.pop(wormsArray[i]);
                snowballArray.pop(snowballArray[i]);
            }
        }

        for (let i = 0; i < snowballArray.length; i++) {
            if ((snowman.x > this.x && snowman.x < this.x + this.width) || (snowman.x + snowman.width > this.x && snowman.x + snowman.width < this.x + this.width)) {
                snowmanHealth -= 10;
                pushSnowmanHealth();
                snowballArray.pop(snowballArray[i]);
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