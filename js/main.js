var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');
canvas.width = 750;
canvas.height = 750;
ctx.scale(1.5,1);
document.body.appendChild(canvas);
// var canvas = document.getElementById('mycanvas');
// var ctx = canvas.getContext('2d');
// var ctx2 = canvas.getContext('2d');

var x = 150; //width of canvas;
var y = 170; //height of canvas;
const m = 50; //external margin of the canvas;
var sizeX =10; //width of the snake  	 
var sizeY = 10; //heigth of the snake;
var size = 1; // 2(TWO) is the least size; 
var maxX = 390; //max width;
var maxY =390; // max height;
var toX = true; //True when direction to X axis is positive (left to right);
var toY = true;  //True when direction to Y axis is positive (up to down);
var pending =false; //True when snake tail has reached the treasure location;
var currentMove =1; // 0 horizontal,1-varical;
var data = []; //location of each segment of the snake;
var treasure= []; //reward loacation;
var isTreaseure = false; //if false a new treasure is created;
var hasStarted = false; //if true the game begins;
var interval =0; //many of time the game refreshes;
var points = 0; //score;
var pointsArr =[]; //store points to help in calculating average performance of the game;
var isPlay = false;
var timer = 20000; //duration of the game;
var isAI = true; //TRUE for manual FALSE for AI;
var userTime = 0; //user input time used only if its greater than speed;
var easy = 200;
var medium = 100; 
var hard = 50;
var level = 0; // 0 -easy 1-medium 2 -hard;
var speed =  easy; //speed of the game; 50 is the recommended speed for pc with low memory;
var state = timer;
var snakeType = 0;
var restart =false;
var numMove =0; 
var isPlaying = false;
var blocks = [];
// var blocks = [{"x":220,"y":170},{"x":220,"y":160},{"x":220,"y":150},{"x":220,"y":140,"x":220,"y":130},{"x":220,"y":120},{"x":220,"y":110},{"x":220,"y":100}];
var isOver = false;
var myTimer;
var isPaused = false;
var aiType = true;
// [{"x":}]
for (var i = 170; i < 250; i+=10) {
	// console.log(i)
	if (i==120 || i !=120 || i==220 || i !=230) {
		blocks.push({"x":220,"y":i});
	}else{
		console.log("NOT!")
	}
}

for (var i = 270; i < 300; i+=10) {
	if (i !=170 || i!=210) {
		blocks.push({"x":140,"y":i});
	}
}

for (var i = 200; i < 230; i+=10) {
	if (i!=110 || i!=170) {
		blocks.push({"x":300,"y":i});
	}
}
for (var i = 350; i < 390; i+=10) {
	if (i!=110 || i!=170) {
		blocks.push({"x":i,"y":350});
	}
}
// for (var i = 50; i <= 390; i+=10) {
// 	blocks.push({"x":i,"y":50});
// }

// Create random number between the minX and maxY margins;
createRandom = ()=>{
	let ran = Math.floor(Math.random()*maxX); //generate random number from 0 -390;
	let ran2 = ran -(ran%10); //creates a number divisible by 10;
	ran2 = ran2 <m? m:ran2 //checks wheather is below the margin(m);
	return ran2;
}

ai = ()=>{
	isAI = !isAI;
	if (isAI) {
		document.getElementById('ai').innerHTML ="AI";
	}else{
		document.getElementById('ai').innerHTML ="MANUAL";		
	}
}


addTime = ()=>{
	let t = document.getElementById('time').value;
	if (!isPlaying) {
		if (t>(speed/1000)) {
			userTime = t*1000;
			displayScore(points);
		}else{
			userTime = t*1000;
			displayScore(points);
		}
	}
}


selectLevel = value =>{
	speed = value;
}

selectTypeAi = () =>{
	aiType = !aiType;
	document.getElementById("typeAi").innerHTML = aiType == false? "Stupid":"Clever";
}

selectTypeAiKeyBoard= bool =>{
	if (bool && !aiType ) {
		selectTypeAi();
	}
	if (!bool && aiType) {
		selectTypeAi();		
	}
}

selectType = type =>{
		snakeType = type;
		changeType(type,data,sizeX,sizeY);
}

start2 = ()=>{
	start();
}

document.addEventListener('keydown', function(e) {
    setKey(e, true,isPlaying);
});

document.addEventListener('keyup', function(e) {
    setKey(e, false,isPlaying);
});

if (!isPlaying && isOver) {
	clearInterval(myTimer);
}