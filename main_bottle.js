var img = "";

function preload(){
    img = loadImage("bottle.png");
}

function setup() {
    canvas = createCanvas(660, 400);
    canvas.center();    
}

function draw() {
    image(img, 0, 0, canvas.width, canvas.height);
    fill("red");
    textSize(20);
    text("Bottle", 200, 20);
    noFill();
    stroke("red");
    rect(200, 20, canvas.width-400, canvas.height-40);
}

function back() {
    window.location = "index_home.html";
}