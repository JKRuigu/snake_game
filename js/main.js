var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
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
var currentMove =1; // 0-Right 1-Left 2-Up 3- Down  
var data = []; //location of each segment of the snake;
var treasure= []; //reward loacation;
var isTreaseure = false; //if false a new treasure is created;
var hasStarted = false; //if true the game begins;
var interval =0; //many of time the game refreshes;
var points = 0; //score;
var pointsArr =[]; //store points to help in calculating average performance of the game;
var isPlay = false;
var timer = 5000; //duration of the game;
var isAI = true; //TRUE for manual FALSE for AI;
var userTime = 0; //user input time used only if its greater than speed;
var easy = 300;
var medium = 200; 
var hard = 50;
var level = 0; // 0 -easy 1-medium 2 -hard;
var speed =  easy; //speed of the game; 50 is the recommended speed for pc with low memory;

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
	console.log(t);
	if (!isPlay) {
		if (t>speed) {
			userTime = t;
			displayScore(points);
		}else{
			userTime = t;
			displayScore(points);
		}
	}
}

selectLevel = value =>{
	if (value == 0) {
		speed= 300;		
	}else if(value == 1){
		speed= 200;		
	}else{
		speed= 50;				
	}
}

document.addEventListener('keydown', function(e) {
    setKey(e, true);
});

document.addEventListener('keyup', function(e) {
    setKey(e, false);
});
