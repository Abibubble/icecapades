let fishArray = [];
class Fish {
    constructor() {
        this.x = canvas.width; // x position on canvas
        this.y = canvas.height - (floorHeight + 1.5 * tux.height) - (Math.random() * 1.5 * tux.height); // within tux jump range
        this.originalWidth = 498; // Individual sprite width from sprite sheet
        this.originalHeight = 327; // Individual sprite height from sprite sheet
        this.width = this.originalWidth / 5; // Sensible width for game
        this.height = this.originalHeight / 5; // Sensible height for game
        this.frameX = 0; // Sprite sheet x position (column)
        this.frameY = 0; // Sprite sheet y position (row)
        this.row = 0; // Row counter for sprite sheet
        this.image = new Image();
        this.image.src = `static/animations/fish/${fishColor}-fish.png`
        this.hitBoxWidth = this.width * .83;
        this.hitBoxHeight = this.height * .87;
        this.hitBoxX = this.x + (this.width * .05);
        this.hitBoxY = this.y + this.height * .1;
    }

    update() {
        let fishColCalc = frameX % 4; // To cycle through 4 columns
        switch (fishColCalc) {
            case 0:
                this.frameX = 0;
                if (this.row <= 4) { // For no.of rows
                    this.row++; // Increase row no. at end of row
                } else {
                    this.row = 0;
                }
                break;
            case 1:
                this.frameX = 1;
                break;
            case 2:
                this.frameX = 2;
                break;
            case 3:
                this.frameX = 3;
                break;
            default:
                this.frameX = 0;
        }

        let fishRowCalc = this.row % 5; // Cycle through 5 columns
        switch (fishRowCalc) {
            case 0:
                this.frameY = 0;
                break;
            case 1:
                this.frameY = 1;
                break;
            case 2:
                this.frameY = 2;
                break;
            case 3:
                this.frameY = 3;
                break;
            case 4:
                this.frameY = 4;
                break;
            default:
                this.frameY = 0;
        }

        this.x -= gameSpeed;

        this.hitBoxWidth = this.width * .83;
        this.hitBoxHeight = this.height * .87;
        this.hitBoxX = this.x + (this.width * .05);
        this.hitBoxY = this.y + this.height * .1;
        this.draw();
    }

    draw() {
        ctx.drawImage(
            this.image, // Sprite sheet
            this.frameX * this.originalWidth, // x position of sprite sheet
            this.frameY * this.originalHeight, // y position of sprite sheet
            this.originalWidth, // Individual sprite width
            this.originalHeight, // Individual sprite height
            this.x, // x position of fish
            this.y, // Height of fish
            this.width, // Intended width
            this.height, // Intended height
        );
    }
}

const handleFish = () => {
    if (gameFrame % 1100 === 0) {
        fishArray.unshift(new Fish());
        if (fishIndex < 2) { // Cycle through fish colors
            fishIndex++;
            fishColor = fishColorArray[fishIndex];
        } else {
            fishIndex = 0;
            fishColor = fishColorArray[fishIndex];
        }
    }

    for (let i = 0; i < fishArray.length; i++) {
        fishArray[i].update();
    }

    if (fishArray.length > 10) {
        fishArray.pop(fishArray[0]);
    }
};

const fish = new Fish();