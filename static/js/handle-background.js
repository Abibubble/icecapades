// -------------------------------------------------------------------- Background scrolling

const background = new Image();
background.src = "static/background/background-with-blocks.png";
const tree1 = new Image();
tree1.src = "static/background/object_tree_long.png"
const tree2 = new Image();
tree2.src = "static/background/ci_logo.png"
const igloo = new Image();
igloo.src = "static/background/object_iglo_long.png"

class Layer {
    constructor(image, speedModifier) {
        this.x =0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }

    update(){
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= - this.width){
            this.x = this.width + this.x2 - this.speed;
        }
        if (this.x2 <= - this.width){
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }

    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}

const layer1 = new Layer(background, 0.5); //urthest from player
const layer2 = new Layer(tree1, 0.6);
const layer3 = new Layer(tree2, 0.8);
const layer4 = new Layer(igloo, 1);  // Closest to player

const backgroundObjects = [layer1, layer2, layer3, layer4];

function handleBackground() {
    backgroundObjects.forEach(object => {
        object.update();
        object.draw();
    });
}
