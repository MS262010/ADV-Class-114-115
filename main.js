R_eyeX=0;
R_eyeY=0;

function preload(){
    glasses=loadImage("Glasses.png");
}
function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
video=createCapture(VIDEO);
video.size(350,350);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log("PoseNet is Initialized");
}
function draw(){
image(video,0,0,350,350);

image(glasses,R_eyeX,R_eyeY,150,100);
}
function take_picture(){
save ("myFilterImage.png");
}

function gotPoses(results){
if(results.length>0){
console.log(results);
R_eyeX=results[0].pose.rightEye.x-40;
R_eyeY=results[0].pose.rightEye.y-40;
}
}