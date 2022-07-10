img="";
noseX=0;
noseY=0;
marioX=325;
marioY=325;
function preload() {
	img="mario24.png";
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	createCanvas(650, 400);
	video = createCapture(VIDEO);
	video.size(600, 300);

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw() {
game();
}

function modelLoaded() {
	console.log('Model Loaded :)');
}

