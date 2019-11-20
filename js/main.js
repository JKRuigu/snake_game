var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

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
var currentMove =0; // 0-Right 1-Left 2-Up 3- Down  
var data = []; //location of each segment of the snake;
var treasure= []; //reward loacation;
var isTreaseure = false; //if false a new treasure is created;
var hasStarted = false; //if true the game begins;
var interval =0;

//DISPLAY SNAKE IN THE SCREEN;
displaySnake = (x,y,sizeX,sizeY,data)=>{
	let len = treasure.length;

	ctx.fillRect(m,m,(maxX-m),(maxY-m));
	if(len !=0) {
		ctx.clearRect(treasure[0].x,treasure[0].y,sizeX,sizeY);
	}
	for(i=0; i<len; i++){
		ctx.clearRect(data[i].x,data[i].y,sizeX,sizeY);
	}
}

createRandom = ()=>{
	let ran = Math.floor(Math.random()*390); //generate random number from 0 -390;
	let ran2 = ran -(ran%10); //creates a number divisible by 10;
	ran2 = ran2 <50? 50:ran2 //checks wheather is below the margin(m);
	return ran2;
}

// CREATE THE SNAKE;
createSnake =(x,y,sizeX,sizeY,data)=>{
	data= [{x,y}];
	displaySnake(x,y,sizeX,sizeY,data);
	return data;
}

//INTIALIZE THE GAME;
intializeGame = (m,maxX,maxY,sizeX,sizeY,data,treasure)=>{
	ctx.font= 'Bold 40px Sans-Serif';
	ctx.strokeText('Snakes', 150, 45);//displays the game title;
	ctx.fillRect(m,m,(maxX-m),(maxY-m));
	hasStarted = true;
	console.log("Intialized the game");
	return createSnake(x,y,sizeX,sizeY,data);	
}

data = intializeGame(m,maxX,maxY,sizeX,sizeY,data,treasure);


// CREATE TREASURE;
createTreasure = (treasure=[])=>{
		treasure = [{"x":createRandom(),"y":createRandom(),isFound:false}]; //create treasure;
		ctx.clearRect(treasure.x,treasure.y,sizeX,sizeY); //display treasure;
		console.log("created treasure");
		return treasure;
}

treasure = createTreasure(treasure);

// HORIZONTAL MOVEMENT along x-axis;
moveHorizontal = (x,y,sizeX,sizeY,data,toX)=>{
		if (x == maxX && toX == true) {
			x= m;//intialize x to margin of x;
			addData({x,y});
			displaySnake(x,y,sizeX,sizeY,data);
			return x;
		}else if(x == m && toX == false){
			x= maxX;
			addData({x,y});
			displaySnake(x,y,sizeX,sizeY,data);
			return x;
		}else{
			toX ? x+=sizeX:x-=sizeX;
	   		addData({x,y});
			displaySnake(x,y,sizeX,sizeY,data);
			return x;
		}
}

//VERTICAL MOVEMENT along y-axis;
moveVertical = (x,y,sizeX,sizeY,data,toY)=>{
	
	if (y == maxY && toY == false) {
		y= m;
		addData({x,y});
		displaySnake(x,y,sizeX,sizeY,data);
		return y;
	}else if(y == m && toY == true){
		y= maxY;
		addData({x,y});
		displaySnake(x,y,sizeX,sizeY,data);
		return y;
	}else{
		y = toY ?y-=sizeX: y+=sizeY;
		addData({x,y});
		displaySnake(x,y,sizeX,sizeY,data);
		return y;
	}
}

addData = (newData)=>{
	data = [newData,...data].slice(0,size);
}

// Communicates with moveHorizontal() function;
moveHorizontal2 = (bool)=>{
	toX = bool;
	var X = moveHorizontal(x,y,sizeX,sizeY,data,toX);
	x=X; //Increment x;
}

// Communicates with moveVertical() function;
moveVertical2 = (bool)=>{
	toY = bool;
	var Y = moveVertical(x,y,sizeX,sizeY,data,toY);
	y=Y; //Increment y;
}

//Intial movement api;
move = (index,bool) =>{
	currentMove = index;
	index == 0? toX =bool: toY =bool;
}


// AI function;
ai = (treasure,data,isMoveY,pending)=>{
	let target = {"x":treasure[0].x,"y":treasure[0].y};
	let location = {"x":data[0].x,"y":data[0].y};
	let diffX = location.x - target.x;
	let diffY =  location.y - target.y;
	let xBool = location.x >target.x ? false:true;
	let yBool = location.y>target.y?true:false;
	let cX = xBool?target.x +10:target.x-10;
	if (location.x == target.x && isMoveY == false) {

		move(1,yBool);
		changeY();
	}
	if(location.y == target.y && isMoveY == true){
		move(0,xBool);
		changeY();
	}
	
}

var myTimer = setInterval(()=>{
//SET GAME; 
switch(currentMove){
	case 0:
		moveHorizontal2(toX);
		break;
	case 1:
		moveVertical2(toY);
		break;			
	default:
		console.log("default");
}
},1000);

setInterval(()=>{clearInterval(myTimer)},5000);
