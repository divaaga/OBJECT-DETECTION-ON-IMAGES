var img = "";

function preload(){
    img = loadImage("bedroom.png");
}

function setup() {
    canvas = createCanvas(660, 400);
    canvas.center();  
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";  
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function draw() {
    image(img, 0, 0, canvas.width, canvas.height);
    fill("red");
    textSize(20);
    text("Bed", 50, 150);
    noFill();
    stroke("red");
    rect(50, 150, canvas.width-200, canvas.height-150);
}

function back() {
    window.location = "index_home.html";
}
