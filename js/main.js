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
var maxX2 = 390; //max width;
var maxX = maxX2+(m-sizeX); //max width to display;
var maxY2 =390; // max height;
var maxY =maxY2+(m-sizeY); // max height to display;
var toX = true; //True when direction to X axis is positive (left to right);
var toY = true;  //True when direction to Y axis is positive (up to down);
var pending =false; //True when snake tail has reached the treasure location;
var currentMove =1; // 0 horizontal,1-varical;
var data = []; //location of each segment of the snake;
var dataRemove = [];//the data to be cleared;
var treasure= []; //reward loacation;
var isTreaseure = false; //if false a new treasure is created;
var hasStarted = false; //if true the game begins;
var interval =0; //many of time the game refreshes;
var interval2 =0;//test;
var points = 0; //score;
var pointsArr =[]; //store points to help in calculating average performance of the game;
var isPlay = false;
var timer = 60000*2; //duration of the game;
var isAI = false; //TRUE for manual FALSE for AI;
var userTime = 0; //user input time used only if its greater than speed;
var easy = 200;
var medium = 100; 
var hard = 50;
var target = 5;
var level = 0; // 0 -easy 1-medium 2 -hard;
var speed =  easy; //speed of the game; 50 is the recommended speed for pc with low memory;
var state = timer;
var snakeType = 0;
var restart =false;
var numMove =0; 
var isPlaying = false;
var isLost = false;
var imgX = 150;
var imgY = 150;
var img2X = 0;
var img2Y = 0;
var intial = false;
var moves = 3;
var blocks = [
// {x: 60, y: 50},{x: 70, y: 50},{x: 80, y: 50},{x: 90, y: 50},{x: 100, y: 50},{x: 110, y: 50},{x: 120, y: 50},{x: 130, y: 50},{x: 140, y: 50},{x: 150, y: 50},{x: 160, y: 50},{x: 170, y: 50},{x: 180, y: 50},{x: 190, y: 50},{x: 200, y: 50},{x: 210, y: 50},{x: 220, y: 50},{x: 230, y: 50},{x: 240, y: 50},{x: 250, y: 50},{x: 260, y: 50},{x: 270, y: 50},{x: 280, y: 50},{x: 290, y: 50},{x: 300, y: 50},{x: 310, y: 50},{x: 320, y: 50},{x: 330, y: 50},{x: 340, y: 50},{x: 350, y: 50},{x: 360, y: 50},{x: 370, y: 50},{x: 380, y: 50},{x: 390, y: 50},{x: 400, y: 50},{x: 410, y: 50},{x: 420, y: 50},{x: 430, y: 50},
// {x: 60, y: 430},{x: 70, y: 430},{x: 80, y: 430},{x: 90, y: 430},{x: 100, y: 430},{x: 110, y: 430},{x: 120, y: 430},{x: 130, y: 430},{x: 140, y: 430},{x: 150, y: 430},{x: 160, y: 430},{x: 170, y: 430},{x: 180, y: 430},{x: 190, y: 430},{x: 200, y: 430},{x: 210, y: 430},{x: 220, y: 430},{x: 230, y: 430},{x: 240, y: 430},{x: 250, y: 430},{x: 260, y: 430},{x: 270, y: 430},{x: 280, y: 430},{x: 290, y: 430},{x: 300, y: 430},{x: 310, y: 430},{x: 320, y: 430},{x: 330, y: 430},{x: 340, y: 430},{x: 350, y: 430},{x: 360, y: 430},{x: 370, y: 430},{x: 380, y: 430},{x: 390, y: 430},{x: 400, y: 430},{x: 410, y: 430},{x: 420, y: 430},{x: 430, y: 430}
];
var isOver = false;
var myTimer;
var isPaused = false;
var aiType = 3;
var background = 1;
var level = 1;
var zone = "";
var isDivided =false;
var count = 0;
var currentLevel =0;
var Time;
var colBody=false;
var tLevels =16;
var gameLevels = [
[{
	"level":1,
	"blocks":[],
	"speed":200,
	"target":5,
	"timer":60000,
	"background":0
}],
[{
	"level":2,
	"blocks":[
		{x: 60, y: 80},{x: 70, y: 80},{x: 80, y: 80},{x: 90, y: 80},
		{x: 390, y: 80},{x: 400, y: 80},{x: 410, y: 80},{x: 420, y: 80}
	],
	"speed":200,
	"target":8,
	"timer":60000,
	"background":0
}],
[{
	"level":3,
	"blocks":[
		{x: 60, y: 80},{x: 70, y: 80},{x: 80, y: 80},{x: 90, y: 80},
		{x: 390, y: 80},{x: 400, y: 80},{x: 410, y: 80},{x: 420, y: 80},
		{x: 60, y: 400},{x: 70, y: 400},{x: 80, y: 400},{x: 90, y: 400},
		{x: 390, y: 400},{x: 400, y: 400},{x: 410, y: 400},{x: 420, y: 400}
	],
	"speed":200,
	"target":13,
	"timer":75000,
	"background":0	
}],
[{
	"level":4,
	"blocks":[
		{x: 60, y: 80},{x: 70, y: 80},{x: 80, y: 80},{x: 90, y: 80},
		{x: 390, y: 80},{x: 400, y: 80},{x: 410, y: 80},{x: 420, y: 80},
		{x:220, y: 230},{x:230, y: 230},{x:240, y: 230},{x:250, y: 230},
		{x: 60, y: 400},{x: 70, y: 400},{x: 80, y: 400},{x: 90, y: 400},
		{x: 390, y: 400},{x: 400, y: 400},{x: 410, y: 400},{x: 420, y: 400}
	],
	"speed":200,
	"target":20,
	"timer":120000,
	"background":0	
}],
[{
	"level":5,
	"blocks":[
		{x: 60, y: 80},{x: 70, y: 80},{x: 80, y: 80},{x: 90, y: 80},
		{x: 390, y: 80},{x: 400, y: 80},{x: 410, y: 80},{x: 420, y: 80},
		{x:220, y: 230},{x:230, y: 230},{x:240, y: 230},{x:250, y: 230},
		{x: 60, y: 400},{x: 70, y: 400},{x: 80, y: 400},{x: 90, y: 400},
		{x: 390, y: 400},{x: 400, y: 400},{x: 410, y: 400},{x: 420, y: 400}
	],
	"speed":200,
	"target":20,
	"timer":120000,
	"background":1	
}],
[{
	"level":6,
	"blocks":[
			{x: 60, y: 80},{x: 70, y: 80},{x: 80, y: 80},{x: 90, y: 80},
			{x: 390, y: 80},{x: 400, y: 80},{x: 410, y: 80},{x: 420, y: 80},
			{x: 60, y: 230},{x: 70, y: 230},{x: 80, y: 230},{x: 90, y: 230},
			{x:220, y: 230},{x:230, y: 230},{x:240, y: 230},{x:250, y: 230},
			{x: 60, y: 400},{x: 70, y: 400},{x: 80, y: 400},{x: 90, y: 400},
			{x: 390, y: 400},{x: 400, y: 400},{x: 410, y: 400},{x: 420, y: 400}
	],
	"speed":200,
	"target":20,
	"timer":150000,
	"background":1	
}],
[{
	"level":7,
	"blocks":[
			{x: 60, y: 80},{x: 70, y: 80},{x: 80, y: 80},{x: 90, y: 80},
			{x: 390, y: 80},{x: 400, y: 80},{x: 410, y: 80},{x: 420, y: 80},
			{x: 60, y: 230},{x: 70, y: 230},{x: 80, y: 230},{x: 90, y: 230},
			{x:220, y: 230},{x:230, y: 230},{x:240, y: 230},{x:250, y: 230},
			{x: 60, y: 400},{x: 70, y: 400},{x: 80, y: 400},{x: 90, y: 400},
			{x: 390, y: 230},{x: 400, y: 230},{x: 410, y: 230},{x: 420, y: 230},
			{x: 390, y: 400},{x: 400, y: 400},{x: 410, y: 400},{x: 420, y: 400}
	],
	"speed":190,
	"target":25,
	"timer":1800000,
	"background":1	
}],
[{
	"level":8,
	"blocks":[
			{x: 60, y: 80},{x: 70, y: 80},{x: 80, y: 80},{x: 90, y: 80},
			{x:220, y: 80},{x:230, y: 80},{x:240, y: 80},{x:250, y: 80},
			{x: 390, y: 80},{x: 400, y: 80},{x: 410, y: 80},{x: 420, y: 80},
			{x: 60, y: 230},{x: 70, y: 230},{x: 80, y: 230},{x: 90, y: 230},
			{x:220, y: 230},{x:230, y: 230},{x:240, y: 230},{x:250, y: 230},
			{x: 60, y: 400},{x: 70, y: 400},{x: 80, y: 400},{x: 90, y: 400},
			{x: 390, y: 230},{x: 400, y: 230},{x: 410, y: 230},{x: 420, y: 230},
			{x: 390, y: 400},{x: 400, y: 400},{x: 410, y: 400},{x: 420, y: 400}
	],
	"speed":190,
	"target":30,
	"timer":1800000,
	"background":1	
}],
[{
	"level":9,
	"blocks":[
			{x: 60, y: 80},{x: 70, y: 80},{x: 80, y: 80},{x: 90, y: 80},
			{x:220, y: 80},{x:230, y: 80},{x:240, y: 80},{x:250, y: 80},
			{x: 390, y: 80},{x: 400, y: 80},{x: 410, y: 80},{x: 420, y: 80},
			{x: 60, y: 230},{x: 70, y: 230},{x: 80, y: 230},{x: 90, y: 230},
			{x:220, y: 230},{x:230, y: 230},{x:240, y: 230},{x:250, y: 230},
			{x: 60, y: 400},{x: 70, y: 400},{x: 80, y: 400},{x: 90, y: 400},
			{x: 390, y: 230},{x: 400, y: 230},{x: 410, y: 230},{x: 420, y: 230},
			{x:220, y: 400},{x:230, y: 400},{x:240, y: 400},{x:250, y: 400},
			{x: 390, y: 400},{x: 400, y: 400},{x: 410, y: 400},{x: 420, y: 400}
	],
	"speed":190,
	"target":35,
	"timer":2100000,
	"background":1	
}],
[{
	"level":10,
	"blocks":[
			{x: 60, y: 80},{x: 70, y: 80},{x: 80, y: 80},{x: 90, y: 80},
			{x:220, y: 80},{x:230, y: 80},{x:240, y: 80},{x:250, y: 80},
			{x: 390, y: 80},{x: 400, y: 80},{x: 410, y: 80},{x: 420, y: 80},
			{x: 230, y: 140},{x: 230, y: 150},{x: 230, y: 160},{x: 230, y: 170},
			{x: 60, y: 230},{x: 70, y: 230},{x: 80, y: 230},{x: 90, y: 230},
			{x:220, y: 230},{x:230, y: 230},{x:240, y: 230},{x:250, y: 230},
			{x: 60, y: 400},{x: 70, y: 400},{x: 80, y: 400},{x: 90, y: 400},
			{x: 390, y: 230},{x: 400, y: 230},{x: 410, y: 230},{x: 420, y: 230},
			{x:220, y: 400},{x:230, y: 400},{x:240, y: 400},{x:250, y: 400},
			{x: 390, y: 400},{x: 400, y: 400},{x: 410, y: 400},{x: 420, y: 400}
	],
	"speed":190,
	"target":40,
	"timer":2100000,
	"background":1	
}],
[{
	"level":11,
	"blocks":[
			{x: 60, y: 80},{x: 70, y: 80},{x: 80, y: 80},{x: 90, y: 80},
			{x:220, y: 80},{x:230, y: 80},{x:240, y: 80},{x:250, y: 80},
			{x: 390, y: 80},{x: 400, y: 80},{x: 410, y: 80},{x: 420, y: 80},
			{x: 230, y: 140},{x: 230, y: 150},{x: 230, y: 160},{x: 230, y: 170},
			{x: 60, y: 230},{x: 70, y: 230},{x: 80, y: 230},{x: 90, y: 230},
			{x:220, y: 230},{x:230, y: 230},{x:240, y: 230},{x:250, y: 230},
			{x: 230, y: 270},{x: 230, y: 280},{x: 230, y: 290},{x: 230, y: 300},
			{x: 60, y: 400},{x: 70, y: 400},{x: 80, y: 400},{x: 90, y: 400},
			{x: 390, y: 230},{x: 400, y: 230},{x: 410, y: 230},{x: 420, y: 230},
			{x:220, y: 400},{x:230, y: 400},{x:240, y: 400},{x:250, y: 400},
			{x: 390, y: 400},{x: 400, y: 400},{x: 410, y: 400},{x: 420, y: 400}
	],
	"speed":190,
	"target":45,
	"timer":2400000,
	"background":1	
}],
[{
	"level":12,
	"blocks":[
			{x: 60, y: 80},{x: 70, y: 80},{x: 80, y: 80},{x: 90, y: 80},
			{x:220, y: 80},{x:230, y: 80},{x:240, y: 80},{x:250, y: 80},
			{x: 390, y: 80},{x: 400, y: 80},{x: 410, y: 80},{x: 420, y: 80},
			{x: 230, y: 140},{x: 230, y: 150},{x: 230, y: 160},{x: 230, y: 170},
			{x: 60, y: 230},{x: 70, y: 230},{x: 80, y: 230},{x: 90, y: 230},
			{x:220, y: 230},{x:230, y: 230},{x:240, y: 230},{x:250, y: 230},
			{x: 230, y: 270},{x: 230, y: 280},{x: 230, y: 290},{x: 230, y: 300},
			{x: 60, y: 400},{x: 70, y: 400},{x: 80, y: 400},{x: 90, y: 400},
			{x: 390, y: 230},{x: 400, y: 230},{x: 410, y: 230},{x: 420, y: 230},
			{x:220, y: 400},{x:230, y: 400},{x:240, y: 400},{x:250, y: 400},
			{x: 390, y: 400},{x: 400, y: 400},{x: 410, y: 400},{x: 420, y: 400}
	],
	"speed":190,
	"target":50,
	"timer":2400000,
	"background":1	
}],
[{
	"level":13,
	"blocks":[
			{x: 60, y: 80},{x: 70, y: 80},{x: 80, y: 80},{x: 90, y: 80},{x: 100, y: 80},{x: 110, y: 80},{x: 130, y: 80},{x: 140, y: 80},{x: 150, y: 80},{x: 160, y: 80},{x: 170, y: 80},{x: 190, y: 80},{x: 200, y: 80},{x: 210, y: 80},{x:220, y: 80},{x:230, y: 80},{x:250, y: 80},{x: 260, y: 80},{x: 270, y: 80},{x: 280, y: 80},{x: 290, y: 80},{x:310, y: 80},{x:320, y: 80},{x:330, y: 80},{x: 340, y: 80},{x: 350, y: 80},{x: 370, y: 80},{x: 380, y: 80},{x: 390, y: 80},{x: 400, y: 80},{x: 410, y: 80},{x: 420, y: 80},
			// {x: 60, y: 230},{x: 70, y: 230},{x: 80, y: 230},{x: 90, y: 230},{x: 100, y: 230},{x: 120, y: 230},{x: 130, y: 230},{x: 140, y: 230},{x: 150, y: 230},{x: 160, y: 230},{x: 180, y: 230},{x: 190, y: 230},{x: 200, y: 230},{x: 210, y: 230},{x:220, y: 230},{x:240, y: 230},{x:250, y: 230},{x: 260, y: 230},{x: 270, y: 230},{x: 280, y: 230},{x: 300, y: 230},{x:310, y: 230},{x:320, y: 230},{x:330, y: 230},{x: 340, y: 230},{x: 360, y: 230},{x: 370, y: 230},{x: 380, y: 230},{x: 390, y: 230},{x: 400, y: 230},{x: 410, y: 230},{x: 420, y: 230},
			// {x: 60, y: 400},{x: 70, y: 400},{x: 80, y: 400},{x: 90, y: 400},{x: 100, y: 400},{x: 110, y: 400},{x: 120, y: 400},{x: 140, y: 400},{x: 150, y: 400},{x: 160, y: 400},{x: 170, y: 400},{x: 180, y: 400},{x: 200, y: 400},{x: 210, y: 400},{x:220, y: 400},{x:230, y: 400},{x:240, y: 400},{x: 260, y: 400},{x: 270, y: 400},{x: 280, y: 400},{x: 290, y: 400},{x:300, y: 400},{x:320, y: 400},{x:330, y: 400},{x: 340, y: 400},{x: 350, y: 400},{x: 360, y: 400},{x: 380, y: 400},{x: 390, y: 400},{x: 400, y: 400},{x: 410, y: 400},{x: 420, y: 400},
	],
	"speed":190,
	"target":55,
	"timer":3000000,
	"background":1	
}],
[{
	"level":14,
	"blocks":[
			{x: 60, y: 80},{x: 70, y: 80},{x: 80, y: 80},{x: 90, y: 80},{x: 100, y: 80},{x: 110, y: 80},{x: 130, y: 80},{x: 140, y: 80},{x: 150, y: 80},{x: 160, y: 80},{x: 170, y: 80},{x: 190, y: 80},{x: 200, y: 80},{x: 210, y: 80},{x:220, y: 80},{x:230, y: 80},{x:250, y: 80},{x: 260, y: 80},{x: 270, y: 80},{x: 280, y: 80},{x: 290, y: 80},{x:310, y: 80},{x:320, y: 80},{x:330, y: 80},{x: 340, y: 80},{x: 350, y: 80},{x: 370, y: 80},{x: 380, y: 80},{x: 390, y: 80},{x: 400, y: 80},{x: 410, y: 80},{x: 420, y: 80},
			{x: 60, y: 230},{x: 70, y: 230},{x: 80, y: 230},{x: 90, y: 230},{x: 100, y: 230},{x: 120, y: 230},{x: 130, y: 230},{x: 140, y: 230},{x: 150, y: 230},{x: 160, y: 230},{x: 180, y: 230},{x: 190, y: 230},{x: 200, y: 230},{x: 210, y: 230},{x:220, y: 230},{x:240, y: 230},{x:250, y: 230},{x: 260, y: 230},{x: 270, y: 230},{x: 280, y: 230},{x: 300, y: 230},{x:310, y: 230},{x:320, y: 230},{x:330, y: 230},{x: 340, y: 230},{x: 360, y: 230},{x: 370, y: 230},{x: 380, y: 230},{x: 390, y: 230},{x: 400, y: 230},{x: 410, y: 230},{x: 420, y: 230},
			// {x: 60, y: 400},{x: 70, y: 400},{x: 80, y: 400},{x: 90, y: 400},{x: 100, y: 400},{x: 110, y: 400},{x: 120, y: 400},{x: 140, y: 400},{x: 150, y: 400},{x: 160, y: 400},{x: 170, y: 400},{x: 180, y: 400},{x: 200, y: 400},{x: 210, y: 400},{x:220, y: 400},{x:230, y: 400},{x:240, y: 400},{x: 260, y: 400},{x: 270, y: 400},{x: 280, y: 400},{x: 290, y: 400},{x:300, y: 400},{x:320, y: 400},{x:330, y: 400},{x: 340, y: 400},{x: 350, y: 400},{x: 360, y: 400},{x: 380, y: 400},{x: 390, y: 400},{x: 400, y: 400},{x: 410, y: 400},{x: 420, y: 400},
	],
	"speed":190,
	"target":60,
	"timer":3300000,
	"background":1	
}],
[{
	"level":15,
	"blocks":[
			{x: 60, y: 80},{x: 70, y: 80},{x: 80, y: 80},{x: 90, y: 80},{x: 100, y: 80},{x: 110, y: 80},{x: 130, y: 80},{x: 140, y: 80},{x: 150, y: 80},{x: 160, y: 80},{x: 170, y: 80},{x: 190, y: 80},{x: 200, y: 80},{x: 210, y: 80},{x:220, y: 80},{x:230, y: 80},{x:250, y: 80},{x: 260, y: 80},{x: 270, y: 80},{x: 280, y: 80},{x: 290, y: 80},{x:310, y: 80},{x:320, y: 80},{x:330, y: 80},{x: 340, y: 80},{x: 350, y: 80},{x: 370, y: 80},{x: 380, y: 80},{x: 390, y: 80},{x: 400, y: 80},{x: 410, y: 80},{x: 420, y: 80},
			{x: 60, y: 230},{x: 70, y: 230},{x: 80, y: 230},{x: 90, y: 230},{x: 100, y: 230},{x: 120, y: 230},{x: 130, y: 230},{x: 140, y: 230},{x: 150, y: 230},{x: 160, y: 230},{x: 180, y: 230},{x: 190, y: 230},{x: 200, y: 230},{x: 210, y: 230},{x:220, y: 230},{x:240, y: 230},{x:250, y: 230},{x: 260, y: 230},{x: 270, y: 230},{x: 280, y: 230},{x: 300, y: 230},{x:310, y: 230},{x:320, y: 230},{x:330, y: 230},{x: 340, y: 230},{x: 360, y: 230},{x: 370, y: 230},{x: 380, y: 230},{x: 390, y: 230},{x: 400, y: 230},{x: 410, y: 230},{x: 420, y: 230},
			{x: 60, y: 400},{x: 70, y: 400},{x: 80, y: 400},{x: 90, y: 400},{x: 100, y: 400},{x: 110, y: 400},{x: 120, y: 400},{x: 140, y: 400},{x: 150, y: 400},{x: 160, y: 400},{x: 170, y: 400},{x: 180, y: 400},{x: 200, y: 400},{x: 210, y: 400},{x:220, y: 400},{x:230, y: 400},{x:240, y: 400},{x: 260, y: 400},{x: 270, y: 400},{x: 280, y: 400},{x: 290, y: 400},{x:300, y: 400},{x:320, y: 400},{x:330, y: 400},{x: 340, y: 400},{x: 350, y: 400},{x: 360, y: 400},{x: 380, y: 400},{x: 390, y: 400},{x: 400, y: 400},{x: 410, y: 400},{x: 420, y: 400},
	],
	"speed":190,
	"target":65,
	"timer":3500000,
	"background":1	
}],
[{
	"level":16,
	"blocks":[
			{x: 60, y: 80},{x: 70, y: 80},{x: 80, y: 80},{x: 90, y: 80},{x: 100, y: 80},{x: 110, y: 80},{x: 130, y: 80},{x: 140, y: 80},{x: 150, y: 80},{x: 160, y: 80},{x: 170, y: 80},{x: 190, y: 80},{x: 200, y: 80},{x: 210, y: 80},{x:220, y: 80},{x:230, y: 80},{x:250, y: 80},{x: 260, y: 80},{x: 270, y: 80},{x: 280, y: 80},{x: 290, y: 80},{x:310, y: 80},{x:320, y: 80},{x:330, y: 80},{x: 340, y: 80},{x: 350, y: 80},{x: 370, y: 80},{x: 380, y: 80},{x: 390, y: 80},{x: 400, y: 80},{x: 410, y: 80},{x: 420, y: 80},
			// {x: 60, y: 230},{x: 70, y: 230},{x: 80, y: 230},{x: 90, y: 230},{x: 100, y: 230},{x: 120, y: 230},{x: 130, y: 230},{x: 140, y: 230},{x: 150, y: 230},{x: 160, y: 230},{x: 180, y: 230},{x: 190, y: 230},{x: 200, y: 230},{x: 210, y: 230},{x:220, y: 230},{x:240, y: 230},{x:250, y: 230},{x: 260, y: 230},{x: 270, y: 230},{x: 280, y: 230},{x: 300, y: 230},{x:310, y: 230},{x:320, y: 230},{x:330, y: 230},{x: 340, y: 230},{x: 360, y: 230},{x: 370, y: 230},{x: 380, y: 230},{x: 390, y: 230},{x: 400, y: 230},{x: 410, y: 230},{x: 420, y: 230},
			{x: 60, y: 400},{x: 70, y: 400},{x: 80, y: 400},{x: 90, y: 400},{x: 100, y: 400},{x: 110, y: 400},{x: 120, y: 400},{x: 140, y: 400},{x: 150, y: 400},{x: 160, y: 400},{x: 170, y: 400},{x: 180, y: 400},{x: 200, y: 400},{x: 210, y: 400},{x:220, y: 400},{x:230, y: 400},{x:240, y: 400},{x: 260, y: 400},{x: 270, y: 400},{x: 280, y: 400},{x: 290, y: 400},{x:300, y: 400},{x:320, y: 400},{x:330, y: 400},{x: 340, y: 400},{x: 350, y: 400},{x: 360, y: 400},{x: 380, y: 400},{x: 390, y: 400},{x: 400, y: 400},{x: 410, y: 400},{x: 420, y: 400},
	],
	"speed":190,
	"target":65,
	"timer":3500000,
	"background":1	
}]
];


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
		// document.getElementById('ai').innerHTML ="AI";
	}else{
		// document.getElementById('ai').innerHTML ="MANUAL";		
	}
}


addTime = ()=>{
	let t = document.getElementById('time').value;
	if (!isPlaying) {
		if (t>(speed/1000)) {
			userTime = t*1000;
			displayScore(points,moves);
		}else{
			userTime = t*1000;
			displayScore(points,moves);
		}
	}
}

selectBackground = value =>{
	if (value != background) {
		background = value;
		changeBackground(value,data,sizeX,sizeY);
		reset(x,y,treasure,data,sizeX,sizeY);
	}
}

selectLevel = value =>{
	speed = value;
	// console.log(speed);
}

gameLevel= (num)=>{
	if (!isPlaying && !isPlay) {
		let cLevel = currentLevel+num;
			let tempL = cLevel < 0 ?0:cLevel== tLevels?tLevels:cLevel
		 // = currentLevel==tLevels?0:cLevel;
		 if (cLevel >= 0 && cLevel < tLevels && cLevel < Number(localStorage.maxLevel)+1) {
			let l=tempL+1;
			currentLevel = tempL;

			document.getElementById("Level").innerHTML = `LEVEL ${l}`;	
			changeBackground(gameLevels[currentLevel][0].background,data,sizeX,sizeY);
			displayBlocks();
			treasure = createTreasure([]);
			data = createSnake();			 	
		 }
	}
}
useMove = ()=>{
	if (moves != 0 && isPlaying && !isAI) {
		moves =moves-1;
		displayScore(points,moves);
		ai();
		if (moves == 0) {
			document.getElementById("move").innerHTML = `No Move`;
		}
	}
}

selectTypeAi = () =>{
	if (aiType == 0) {
		aiType = 1;
	}else if(aiType == 1){
		aiType = 2
	}else if(aiType == 2){
		aiType = 3
	}else{
		aiType = 0;
	}
	document.getElementById("typeAi").innerHTML = `AI ${aiType}`
}

selectTypeAiKeyBoard= bool =>{
	// if (bool && !aiType ) {
	// 	selectTypeAi();
	// }
	// if (!bool && aiType) {
	// 	selectTypeAi();		
	// }
}

// selectType = type =>{
// 		snakeType = type;
// 		changeType(type,data,sizeX,sizeY);
// }

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