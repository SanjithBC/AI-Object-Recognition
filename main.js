status = "";

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    canvas.hide();
}

function draw() {
    image(canvas, 0, 0, 480, 380);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}