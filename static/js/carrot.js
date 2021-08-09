let carrotArray = [];

const carrotHeights = [1.2, 1.4, 1.7, 2, 2.4, 3, 3.4];
let carrotMod = carrotHeights[Math.floor(Math.random() * carrotHeights.length)];

class Carrot {
  constructor() {
    this.originalHeight = 60;
    this.originalWidth = 169;
    this.width = this.originalWidth * .8;
    this.height = this.originalHeight * .8;
    this.frameX = 0;
    this.x = snowman.x + 40;
    this.y = snowman.y + snowman.height / carrotMod;
    this.hit = false;
    this.stopped = false;
    this.image = new Image();
    this.image.src = "static/animations/projectiles/carrot_sprite_with_fire.png";
    // DO NOT CHANGE HIT BOX
    this.hitBoxWidth = this.width * .83;
    this.hitBoxHeight = this.height * .82;
    this.hitBoxX = this.x;
    this.hitBoxY = this.y + this.height * .14;
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
      this.height,
    );
  }

  update() {
    // Each carrot will have varied height modifier
    carrotMod = carrotHeights[Math.floor(Math.random() * carrotHeights.length)];
    this.hitBoxWidth = this.width * .83;
    this.hitBoxHeight = this.height * .82;
    this.hitBoxX = this.x;
    this.hitBoxY = this.y + this.height * .14;
    if (gameFrame % staggerFrames == 0) {
      if (frameX < 3) this.frameX++;
      else this.frameX = 0;
    }

    if (!this.stopped && !endGame) {
      // Fires left
      this.x = this.x - flakeSpeed;
    }
    
    if (this.x <= tux.x + tux.width && this.hit) {
      // Change image to fire ball
      this.frameX = 4;
    }

    if (this.x <= tux.x + tux.width / 2 &&
      this.hit === true) {
      this.stopped = true;
    }

    this.draw();
  }
}

const handleCarrot = () => {
  if (gameFrame % 120 === 0) {
    carrotArray.push(new Carrot());
  }

  for (let i = 0; i < carrotArray.length; i++) {
    carrotArray[i].update();
  }

  if (carrotArray.length > 15) {
    carrotArray.shift(carrotArray[0]);
  }
}

const carrot = new Carrot();