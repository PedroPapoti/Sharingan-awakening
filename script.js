let angle = 10;
let displacement = 40;
let scale = 9;
let velocityAngle = 1.8;
let velocityScale = 0.09;
let width = 15, height = 15;
let p5canvas;

function setup() {
    p5canvas = createCanvas(displayWidth,displayHeight);
    background(0);
    ellipseMode(CENTER);
}

function draw() {
    if(frameCount === (12*60)){
        velocityScale = 0.7;
    }
    if(frameCount === (17*60)) {
        velocityScale = 0.05;
        width = 20;
        height = 20;
    }

    let x = displacement + cos(angle) * scale;
    let y = displacement + sin(angle) * scale;

    fill(random(40,255),0,0);
    ellipse((displayWidth/2)+x,(displayHeight/2)+y, width,height);

    angle += velocityAngle;
    scale += velocityScale;
}




