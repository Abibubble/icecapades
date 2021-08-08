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
        this.x += gameSpeed * 2;
        if (gameFrame % staggerFrames == 0) {
            if (frameX < 5) this.frameX--;
            else this.frameX = 5;
        }
        this.draw();
    }
}

// const snowball = new Snowball();
// snowball;

const handleSnowball = () => {
    if (gameFrame % 300 === 0) {
        snowballArray.unshift(new Snowball());
    }
    for (let i = 0; i < snowballArray.length; i++) {
        snowballArray[i].update();
    }
    if (snowballArray.length > 5) {
        snowballArray.pop(snowballArray[0]);
    }
  };