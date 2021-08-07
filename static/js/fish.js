class Fish {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.originalWidth = 498;
        this.originalHeight = 370;
        this.width = this.originalWidth;
        this.height = this.originalHeight;
        this.weight = 1;
        this.frameX = 0;
        this.frameY = 0;
        this.hitWidth = 75;
        this.hitHeight = 75;
    }

    update() {
        if (gameFrame % staggerFrames == 0) {
            let fishRow = 0;
            switch (frameX) {
                case (frameX % 4 == 0):
                    this.frameX = 0;
                    if (fishRow <= 4) {
                        fishRow++;
                    } else {
                        fishRow = 0;
                    }
                    break;
                case (frameX % 4 == 1):
                    this.frameX = 1;
                    break;
                case (frameX % 4 == 2):
                    this.frameX = 2;
                    break;
                case (frameX % 4 == 3):
                    this.frameX = 3;
                    break;
                default:
                    this.frameX = 0;
            }
            switch (fishRow) {
                case (fishRow % 5 == 0):
                    this.frameY = 0;
                    break;
                case (fishRow % 5 == 1):
                    this.frameY = 1;
                    break;
                case (fishRow % 5 == 2):
                    this.frameY = 2;
                    break;
                case (fishRow % 5 == 3):
                    this.frameY = 3;
                    break;
                case (fishRow % 5 == 4):
                    this.frameY = 4;
                    break;
                default:
                    this.frameY = 0;
            }
        }
    }

    // frameX is main frame rate

    draw() {
        ctx.fillStyle = "purple"; // Collision box
        ctx.fillRect(this.x, this.y, this.originalWidth, this.originalHeight);
        ctx.drawImage(
            fishImage,
            this.frameX * this.originalWidth,
            this.frameY * this.originalHeight,
            this.width,
            this.height,
            canvas.width - this.x - 100, // position width
            canvas.height - this.y - 250, // position height
            75, // 75px width (x)
            75 // 75px height (y)
        );
    }
}

const fish = new Fish();