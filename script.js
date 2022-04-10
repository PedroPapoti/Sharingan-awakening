let angle = 10;
let offset  = 40;
let scale = 9;
let velocityAngle = 1.8;
let velocityScale = 0.09;
let width = 15, height = 15;
let p5canvas;

function setup() {
    p5canvas = createCanvas(displayWidth,displayHeight);
    background(0);
    frameRate(150);
}

function draw() {
    if(frameCount === (480)) {
        velocityScale = 0.7;
    }
    if(frameCount === (680)) {
        velocityScale = 0.05;
        width = 20;
        height = 20;
    }
    
    let x = offset  + cos(angle) * scale;
    let y = offset  + sin(angle) * scale;

    fill(random(40,255),0,0);
    ellipse(((displayWidth/2)-width)+x,(( displayHeight/2)-height)+y, width,height);

    angle += velocityAngle;
    scale += velocityScale;   
}




