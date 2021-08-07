const carrotsArray = [];

class Carrot {
  constructor() {
    this.originalHeight = 60;
    this.originalWidth = 169;
    this.width = this.originalWidth;
    this.height = this.originalHeight;
    this.frameX = 0;
    this.x = snowman.x;
    this.y = snowman.y - snowman.height / 2;
    this.hit = false;
    this.image = new Image ();
    this.image.src = "static/animations/projectiles/carrot_sprite.png";
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.frameX,
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
    this.x = this.x - 4 * gameSpeed; //fires left
      if (this.x <= tux.x + tux.width * .9) {
      this.hit = true;
    }
    if (this.hit) {
      this.x = this.x;
      this.image.src = "#balloon pop"
      // this.width = 0;
      // this.height = 0;
    }
    this.draw();
  }
}

const carrot = new Carrot();