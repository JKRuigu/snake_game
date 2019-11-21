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
var currentMove =1; // 0-Right 1-Left 2-Up 3- Down  
var data = []; //location of each segment of the snake;
var treasure= []; //reward loacation;
var isTreaseure = false; //if false a new treasure is created;
var hasStarted = false; //if true the game begins;
var interval =0;
var isMaxX =false;
var points = 0;

//DISPLAY SNAKE IN THE SCREEN;
displaySnake = (x,y,sizeX,sizeY,data)=>{
	let len = treasure.length;
	ctx.fillRect(m,m,(maxX-m),(maxY-m));
	if(len !=0 && treasure[0].isFound == false) {
		ctx.clearRect(treasure[0].x,treasure[0].y,sizeX,sizeY);
	}
	for(i=0; i<size; i++){
		ctx.clearRect(data[i].x,data[i].y,sizeX,sizeY);
	}
}

displayScore =(points)=>{
	ctx.clearRect(30,5,350,55);
	ctx.font= 'Bold 40px Sans-Serif';
	let txt = `Snakes pts: ${points}`
	ctx.strokeText(txt, 70, 45);//displays the game title;
}

createRandom = ()=>{
	let ran = Math.floor(Math.random()*maxX); //generate random number from 0 -390;
	let ran2 = ran -(ran%10); //creates a number divisible by 10;
	ran2 = ran2 <m? m:ran2 //checks wheather is below the margin(m);
	return ran2;
}

// CREATE THE SNAKE;
createSnake =(x,y,sizeX,sizeY,data)=>{
	displayScore(points);
	data= [{x,y}];
	displaySnake(x,y,sizeX,sizeY,data);
	return data;
}

//INTIALIZE THE GAME;
intializeGame = (m,maxX,maxY,sizeX,sizeY,data,treasure)=>{
	ctx.fillRect(m,m,(maxX-m),(maxY-m));
	hasStarted = true;
	console.log("Intialized the game");
	return createSnake(x,y,sizeX,sizeY,data);	
}

data = intializeGame(m,maxX,maxY,sizeX,sizeY,data,treasure);


// CREATE TREASURE;
createTreasure = (treasure=[])=>{
		// treasure = [{"x":createRandom(),"y":createRandom(),isFound:false}]; //create treasure;
		treasure = [{"x":150,"y":70,isFound:false}]; //create treasure;
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
			x = (x == 390? 50:x); //checks if x is greater than maxX;
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
	if (y != 390) {	//Solves not displaying on the screen;		
		toX = bool;
		var X = moveHorizontal(x,y,sizeX,sizeY,data,toX);
		x=X; //Increment x;	
	}else{
		moveVertical2(toY);
	}
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

// CHECK IF TREASURE IS FOUND;
isTreaseureFound = ()=>{
	if (data[0].x == treasure[0].x && data[0].y == treasure[0].y && treasure[0].isFound == false ) {
		console.log("Heck! Yeah");
		treasure[0].isFound = true;
		used = false;
		setPending();
	}
}

// set pending to true;
setPending = ()=>{
		console.log("PENDING.......")
		pending= true;
		getReward();
}

getReward =()=>{
		console.log("Mmmmmh");
		let myData2 = [{"x":treasure[0].x,"y":treasure[0].y}];
		let jk2 = [...myData2];
		data.forEach(x=>jk2.push(x))
		data =jk2;
		size++;
		displaySnake(x,y,sizeX,sizeY,jk2);

		pending=false;
		used = true;
		points +=10;
		displayScore(points);
		treasure = [{"x":createRandom(),"y":createRandom(),isFound:false}]; //create treasure;
		ctx.clearRect(treasure.x,treasure.y,sizeX,sizeY); //display treasure;

}


// XY FUNCTION
generateXY = (from,to)=>{
	let xRoute =[];
	let fromX = from.x;
	let toXA = to.x;
	let diffX = fromX-toXA;
	let isdiffX = ((diffX<1)? true:false);
	let sX = isdiffX?10:-10;


	while((fromX+sX) != (toXA+sX)){
		xRoute.push({"x":fromX,"y":from.y});
		fromX +=sX;
	}

	let yRoute =[];
	let fromY = from.y;
	let toYA = to.y;
	let diffY = fromY-toYA;
	let isdiffY = ((diffY<1)?true:false);
	let sY = isdiffY?10:-10;
	// console.log(fromY,toYA,sY,diffY,isdiffY)
	// console.log((fromY+sY),(toYA+sY),sY,diffY,isdiffY)

	while((fromY+sY)!= (to.y+sY)){
	 	yRoute.push({"x":from.x,"y":fromY});
		fromY+=sY;
	}
	// console.log(xRoute,yRoute,to.x,to.y);

	let xLen = xRoute.length;
	let yLen = yRoute.length;

	if (xLen == 0 && yLen != 0) {
		return 1;
	}

	if (yLen == 0 && xLen != 0) {
		return 0;
	}
	if (xLen<yLen) {
		diffX = diffX <0 ? (diffX*-1):diffX;
		toX = diffX<(390-diffX)? isdiffX:!isdiffX; 
		return 0
	}
	if (yLen<xLen) {
		diffY = diffY <0 ? (diffY*-1):diffY;
		toY = diffY<(390-diffY)?!isdiffY:isdiffY; 
		return 1
	}
	return undefined;
};

var myTimer = setInterval(()=>{
	if (data) {
		isTreaseureFound();
	}
	var l = data.length-1;

	let myOpt = generateXY(data[0],treasure[0]);
	currentMove = (myOpt == undefined ? currentMove:myOpt);
	console.log(points);

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
},100);

setInterval(()=>{clearInterval(myTimer)},50000);
