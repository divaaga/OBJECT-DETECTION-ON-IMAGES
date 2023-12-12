var img = "";

function preload(){
    img = loadImage("AC_curtain.png");
}

function setup() {
    canvas = createCanvas(660, 400);
    canvas.center();    
}

function draw() {
    image(img, 0, 0, canvas.width, canvas.height);
    fill("red");
    textSize(20);
    text("AC", 300, 23);
    text("Curtain", 100, 200);
    noFill();
    stroke("red");
    rect(100, 200, canvas.width-500, canvas.height-200);
    rect(300, 23, canvas.width-300, canvas.height-200);
}

function back() {
    window.location = "index_home.html";
}