status = "";
objects = [];

function setup() {
    video = createCapture(VIDEO);
    video.hide();
    canvas = createCanvas(480, 380);
    canvas.center();
    canvas.hide();
}

function draw() {
    image(canvas, 0, 0, 480, 380);
        if(status !="") {
            objectDetector.detect(video, gotResults)
            for (i = 0; i < objects.length; i++) {
                fill("#ff0000");
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
                noFill();
                stroke("#ff0000");
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
        }
        if(objects[i].label == object_name) {
            video.stop();
            objectDetector.detect(gotResults);
            document.getElementById("status").innerHTML = object_name + "Found!";
            synth = window.speechSynthesis;
            SpeechSynthesisUtterance(object_name + "Found!");
            synth.speak(utterThis);
        }
        else {
            document.getElementById("status").innerHTML = object_name + "not found";
        }
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
}