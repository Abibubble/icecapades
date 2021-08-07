class Fish {
    constructor() {
        this.x = 500; // x position on canvas
        this.y = floorHeight; // y position on canvas
        this.vy = 0; // y velocity
        this.originalWidth = 498; //individual sprite width from sprite sheet
        this.originalHeight = 327; //individual sprite height from sprite sheet
        this.width = this.originalWidth / 5; // sensible width for game
        this.height = this.originalHeight / 5; // sensible height for game
        this.weight = 1; // gravity effect
        this.frameX = 0; //sprite sheet x position (column)
        this.frameY = 0; //sprite sheet y position (row)
        this.row = 0; // row counter for sprite sheet
        // this.color; // ??assign a value from a random array to select fish color??
    }

    update() {
        let fishColCalc = frameX % 4; // to cycle through 4 columns
        switch (fishColCalc) {
            case 0:
                this.frameX = 0;
                if (this.row <= 4) {  // for no.of rows
                    this.row++; // increase row no. at end of row
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
        let fishRowCalc = this.row % 5; //cycle through 5 columns
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

        // TODO update this.x and this.y
    }

    // frameX is main frame rate

    draw() {
        // ctx.fillStyle = "purple"; // Collision box
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(
            fishImage, //sprite sheet
            this.frameX * this.originalWidth, //x position of sprite sheet
            this.frameY * this.originalHeight, //y position of sprite sheet
            this.originalWidth, //individual sprite width
            this.originalHeight, //individual sprite height
            this.x, //!add back in when position update done
            this.y + 200, //!remove  lines below when re-introduced
            this.width, //intended width
            this.height,//intended height
        );
    }
}

const fish = new Fish();