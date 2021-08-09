class Snowman {
    constructor() {
        this.originalWidth = 138; // individual sprite width from sprite sheet
        this.originalHeight = 142; // individual sprite height from sprite sheet
        this.width = this.originalWidth * 2.5; // sensible width for game
        this.height = this.originalHeight * 2.5; // sensible height for game
        this.frameX = 0; // sprite sheet x position (column)
        this.x = canvas.width - this.width; // x position on canvas
        this.y = canvas.height - this.height - floorHeight + 20; // y position on canvas
        this.image = new Image();
        this.image.src = "static/animations/enemies/snowman/snowman-sprite-left.png";
        this.hitBoxX = this.x + 55;
        this.hitBoxY = this.y + 25;
        this.hitBoxWidth = this.width - 120;
        this.hitBoxHeight = this.height - 35;
        this.isSpawned = false;
    }

    update() {
        if (gameFrame % staggerFrames == 0 && !endGame) {
            if (frameX < 1) this.frameX++;
            else this.frameX = 0;
        }
        this.draw();
    }

    draw() {
        ctx.drawImage(
            this.image, // sprite sheet
            this.frameX * this.originalWidth, // x position on sprite sheet
            0,
            this.originalWidth, // individual sprite width
            this.originalHeight, // individual sprite height
            this.x, // x co-ord
            this.y, // y co-ord
            this.width, // intended width
            this.height, // intended height
        );
    }
}

const handleSnowman = () => {
    snowman.update();
}

const snowman = new Snowman();