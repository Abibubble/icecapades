const carrotArray = [];

class Carrot {
  constructor() {
    this.originalHeight = 60;
    this.originalWidth = 169;
    this.width = this.originalWidth;
    this.height = this.originalHeight;
    this.frameX = 0;
    this.x = snowman.x + 40;
    this.y = snowman.y + snowman.height / 1.9;
    this.hit = false;
    this.image = new Image();
    this.image.src = "static/animations/projectiles/carrot_sprite.png";
    carrotArray.push(this);
  }

  /**
   * removes image
   * set hit to false (may not be needed)
   * - there is probably a better way!?
   */
  hideImage() {
    this.width = 0;
    this.height = 0;
    this.hit = false;
  }

  draw() {
    ctx.drawImage(
      this.image,
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
    if (gameFrame % staggerFrames == 0) {
      if (frameX < 3) this.frameX++;
      else this.frameX = 0;
    }
    
    if (!this.hit) {
      this.x = this.x - flakeSpeed; //fires left
      if (carrotImpact) {
        // change image to fire ball
        this.originalHeight = 196;
        this.originalWidth = 512;
        this.image.src = "static/animations/projectiles/flames.png"
        this.frameX = 2;
      }
    }

    if (carrotImpact) {
      this.x = this.x; //freeze image
      setTimeout(this.hideImage.bind(this), 200); //delay and destroy
      carrotImpact = false;
    }

    this.draw();
  }
}

const handleCarrot = () => {
  // every x frames, add obstacle to array
  if (gameFrame % (randomNumber + 50) === 0) {
    carrotArray.unshift(new Carrot());
  }

  for (let i = 0; i < carrotArray.length; i++) {
    carrotArray[i].update();
  }

  if (carrotArray.length > 10) {
    carrotArray.pop(carrotArray[0]);
  }
}

const carrot = new Carrot();
