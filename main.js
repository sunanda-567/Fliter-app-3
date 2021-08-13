noseY=0;
noseX=0;
function preload() {
lips=loadImage("https://i.postimg.cc/FRdZbFGH/52256603-beautiful-girl-s-lips-simple-style-vector-illustration-removebg-preview.png")
}

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();

    video= createCapture(VIDEO);
    video.size(300,300); 
    video.hide();

    posenet=ml5.poseNet(video, modelLoaded)
    posenet.on('pose', gotPoses);
 }
 
 function modelLoaded()
 {
     console.log("posenet.initialized")
 }
 
 function gotPoses(results)
 {
     if(results.length > 0)
     {
        console.log(results);
        noseX=results[0].pose.nose.x-50;
        console.log("nose x ="+noseX);
        noseY=results[0].pose.nose.y+20; 
        console.log("nose y ="+noseY);
     }
 }
 

function draw() {
    image(video, 0, 0, 300, 300);
    image(lips, noseX, noseY, 110, 90)
}
function takesnapshot() {
    save('my_pic.png')
}