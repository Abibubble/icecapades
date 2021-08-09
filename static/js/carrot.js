let carrotArray = [];

class Carrot {
  constructor() {
    this.originalHeight = 60;
    this.originalWidth = 169;
    this.width = this.originalWidth * .8;
    this.height = this.originalHeight * .8;
    this.frameX = 0;
    this.x = snowman.x + 40;
    this.y = snowman.y + snowman.height / 1.9;
    this.hit = false;
    this.image = new Image();
    this.image.src = "static/animations/projectiles/carrot_sprite.png";
    this.impact = false;
    this.boom = false;
    // ! DO NOT CHANGE HIT BOX
    this.hitBoxWidth = this.width * .83;
    this.hitBoxHeight = this.height * .82;
    this.hitBoxX = this.x;
    this.hitBoxY = this.y + this.height * .14;
  }

  /**
   * removes image
   * set hit to false (may not be needed)
   * - there is probably a better way!?
   */
  destroyCarrot() {
    carrotArray.splice(carrotArray.indexOf(i));
  }

  draw() {
    // * remove - for testing only
    ctx.fillStyle = "red";
    ctx.fillRect(this.hitBoxX, this.hitBoxY, this.hitBoxWidth, this.hitBoxHeight);
    // *
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
    this.hitBoxWidth = this.width * .83;
    this.hitBoxHeight = this.height * .82;
    this.hitBoxX = this.x;
    this.hitBoxY = this.y + this.height * .14;
    if (gameFrame % staggerFrames == 0) {
      if (frameX < 3) this.frameX++;
      else this.frameX = 0;
    }

    if (!this.hit) {
      this.x = this.x - flakeSpeed; //fires left
    }

    if (this.impact) {
      // change image to fire ball
      this.originalHeight = 196;
      this.originalWidth = 512;
      this.image.src = "static/animations/projectiles/flames.png"
      this.frameX = 2;
      this.boom = true;
    }

    if (this.boom === true) {
      if (this.x <= tux.x + tux.width / 2) {
        this.hit = true;
      }
    }


    // why cant i destroy just one carrot!!??!!?
    if (this.hit === true) {
      setTimeout(function(){
        carrotArray.splice(carrotArray.indexOf(this),1),
        500
      })
    }

    {
      let collideWith = tux;
      if ((collideWith.hitBoxX > this.hitBoxX &&
          collideWith.hitBoxX < this.hitBoxX + this.hitBoxWidth) ||
        (collideWith.hitBoxX + collideWith.hitBoxWidth > this.hitBoxX &&
          collideWith.hitBoxX + collideWith.hitBoxWidth < this.hitBoxX + this.hitBoxWidth)) {
        if ((collideWith.hitBoxY > this.hitBoxY &&
            collideWith.hitBoxY < this.hitBoxY + this.hitBoxHeight) ||
          (collideWith.hitBoxY + collideWith.hitBoxHeight > this.hitBoxY &&
            collideWith.hitBoxY + collideWith.hitBoxHeight < this.hitBoxY + this.hitBoxHeight)) {
          this.impact = true;
        }
      }
    }
    this.draw();
  }
}

const handleCarrot = () => {
  // every x frames, add obstacle to array
  if (gameFrame % 100 === 0) { //testing speed
    // if (gameFrame % (randomNumber + 50) === 0) {
    carrotArray.push(new Carrot());
  }

  for (let i = 0; i < carrotArray.length; i++) {
    carrotArray[i].update();
  }

  if (carrotArray.length > 10) {
    carrotArray.pop(carrotArray[0]);
  }
}

const carrot = new Carrot();