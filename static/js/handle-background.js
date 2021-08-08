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
        this.width = 2560;
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
    // drawAssets(){
    //     ctx.drawImage(this.image, this.x, this.y, this.width, this.height, this.x, this.height-floorHeight-400, this.width, canvas.height);
    //     ctx.drawImage(this.image, this.x2, this.y, this.width, this.height, this.x, this.height-floorHeight-400, this.width, canvas.height);
    // }
}

const layer1 = new Layer(background, 0.5); //furthest from player
const layer2 = new Layer(tree1, 0.6);
const layer3 = new Layer(tree2, 0.8);
const layer4 = new Layer(igloo, 1);  //closes to player

const backgroundObjects = [layer1, layer2, layer3, layer4];

function handleBackground() {
    backgroundObjects.forEach(object => {
        object.update();
        object.draw();
    });
    // layer1.update()
    // layer1.draw()
    // layer2.update()
    // layer2.draw()
    // layer3.update()
    // layer3.draw()
    // layer4.update()
    // layer4.draw()
}





//---------------------------------------
//
// const BG = {
//     x1: 0,
//     x2: canvas.width,
//     y: 0,
//     width: canvas.width,
//     height: canvas.height,
// };
//
// function handleBackground() {
//     if (BG.x1 <= -BG.width + gameSpeed) {
//         BG.x1 = BG.width;
//     } else {
//         BG.x1 -= gameSpeed;
//     }
//     if (BG.x2 <= -BG.width + gameSpeed) {
//         BG.x2 = BG.width;
//     } else {
//         BG.x2 -= gameSpeed;
//     }
//     ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
//     ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height);
// }
