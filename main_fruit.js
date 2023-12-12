var img = "";

function preload(){
    img = loadImage("fruit.png");
}

function setup() {
    canvas = createCanvas(660, 400);
    canvas.center();    
}

function draw() {
    image(img, 0, 0, canvas.width, canvas.height);
    fill("red");
    textSize(20);
    text("Banana", 70, 15);
    text("Peach", 300, 220);
    noFill();
    stroke("red");
    rect(70, 15, canvas.width-300, canvas.height-200);
    rect(300, 220, canvas.width-400, canvas.height-280);
}

function back() {
    window.location = "index_home.html";
}