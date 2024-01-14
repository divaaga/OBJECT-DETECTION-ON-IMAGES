var img = "";

function preload(){
    img = loadImage("AC_curtain.png");
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
