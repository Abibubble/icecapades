class Snowman {
    constructor() {
        this.x = 600; // x position on canvas
        this.y = floorHeight; // y position on canvas
        this.vy = 0; // y velocity
        this.originalWidth = 138; // individual sprite width from sprite sheet
        this.originalHeight = 142; // individual sprite height from sprite sheet
        this.width = this.originalWidth / 5; // sensible width for game
        this.height = this.originalHeight / 5; // sensible height for game
        this.weight = 1; // gravity effect
        this.frameX = 0; // sprite sheet x position (column)
        this.frameY = 0; // sprite sheet y position (row)
        this.row = 0; // row counter for sprite sheet
        // this.color; // ??assign a value from a random array to select fish color??
    }

    update() {
        let snowManColCalc = frameX % 2; // to cycle through 4 columns
    }

    // frameX is main frame rate

    draw() {
        // ctx.fillStyle = "purple"; // Collision box
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(
            snowmanImage, // sprite sheet
            this.frameX * this.originalWidth, // x position of sprite sheet
            this.frameY * this.originalHeight, // y position of sprite sheet
            this.originalWidth, // individual sprite width
            this.originalHeight, // individual sprite height
            this.x, // x position of fish
            this.y + 300, // height of fish
            this.width, // intended width
            this.height, // intended height
        );
    }
}

const snowman = new Snowman();