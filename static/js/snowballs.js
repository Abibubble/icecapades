// -------------------------------------------------------------------- Snowballs Bar

const snowballSprite = new Image();
snowballSprite.src = "static/animations/projectiles/snowball.png";
const snowballArray = [];

class Snowball {
    constructor() {
        this.originalWidth = 512;
        this.originalHeight = 386;
        this.x = tux.x + tux.width;
        this.height = this.originalHeight / 3;
        this.width = this.originalWidth / 3;
        this.y = tux.y + tux.height / 2;
    }

    draw() {
        ctx.drawImage(
            snowballSprite,
            this.frameX * this.originalWidth,
            0,
            this.originalWidth,
            this.originalHeight,
            this.x,
            canvas.height - this.height - floorHeight,
            this.width,
            this.height
        );
    }
    update() {
        this.x += gameSpeed * 3;
        if (gameFrame % staggerFrames == 0) {
            if (frameX < 5) this.frameX++;
            else this.frameX = 0;
        }
        this.draw();
    }
}

const snowball = new Snowball();
snowball;