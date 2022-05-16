leftWristx=0;
rightWristx=0;
difference=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(560, 125);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded!")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)

        leftWristx = results[0].pose.leftWrist.x;
        rightWristx =  results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);
    }
}

function draw(){
    background('grey');
    textSize(difference);
    fill("green");
    text(Vyshampayan, 50 , 400);
}
