class Worm {
  constructor() {
    this.x = 500;
    this.y = 300;
    this.originalWidth = 500;
    this.originalHeight = 256;
    this.width = this.originalWidth;
    this.height = this.originalHeight;
    this.weight = 1;
    this.frameX = 0;
  }

  update() {

  }

  draw() {
    ctx.fillStyle = "yellow"; //collision box
    ctx.fillRect(this.x, this.y, this.width / 3, this.height / 3);
    ctx.drawImage(
      wormImage,
      frameX * this.originalWidth,
      0,
      this.originalWidth,
      this.originalHeight,
      this.x,
      this.y,
      this.originalWidth / 3,
      this.originalHeight / 3,
    )
  }

  die() {
    //flip horizontal and fall off screen?
  }
}

const worm = new Worm();