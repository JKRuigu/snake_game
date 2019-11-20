var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

var x = 150; //width of canvas;
var y = 250; //height of canvas;
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
	let len = data.length;

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

// CREATE TREASURE;
createTreasure = (treasure=[])=>{
		treasure = [{"x":createRandom(),"y":createRandom(),isFound:false}]; //create treasure;
		console.log("Treasure",treasure);
		ctx.clearRect(treasure.x,treasure.y,sizeX,sizeY); //display treasure;
}

treasure = createTreasure(treasure);


// CREATE THE SNAKE;
createSnake =(m,sizeX,sizeY,data,treasure)=>{
	data= [{"x":createRandom(),"y":createRandom()}];
	// console.log(data);
	displaySnake(m,m,sizeX,sizeY,data);
	return data;
}

//INTIALIZE THE GAME;
intializeGame = (m,maxX,maxY,sizeX,sizeY,data,treasure)=>{
	ctx.font= 'Bold 40px Sans-Serif';
	ctx.strokeText('Snakes', 150, 45);//displays the game title;
	ctx.fillRect(m,m,(maxX-m),(maxY-m));
	hasStarted = true;
	return createSnake(m,sizeX,sizeY,data,treasure);	
}

data =intializeGame(m,maxX,maxY,sizeX,sizeY,data,treasure);

// HORIZONTAL MOVEMENT along x-axis;
moveHorizontal = (x,y,sizeX,sizeY,data,toX)=>{
		if (x == maxX && toX == true) {
			x= m;//intialize x to margin of x;
			displaySnake(x,y,sizeX,sizeY,data);
	   		data.push({x,y});
			return x;
		}else if(x == m && toX == false){
			x= maxX;
			displaySnake(x,y,sizeX,sizeY,data);
	   		data.push({x,y});
			return x;
		}else{
			toX ? x+=sizeX:x-=sizeX;
			displaySnake(x,y,sizeX,sizeY,data);
	   		addData(data,{x,y});
	   		// data.push({x,y});
	   		// console.log({x,y});
			return x;
		}
}

addData = (data,newData)=>{
	myData = [];
	console.log(data);
	// myData.push(newData);
	// console.log([newData,...data]);
	data = [newData,...data];
	// console
	// data.forEach((item,i)=>{
	// 	if ((i+1)<=size){
	// 		myData.push(item);
	// 	}
	// });

	console.log(data);
}

//VERTICAL MOVEMENT along y-axis;
moveVertical = (x,y,sizeX,sizeY,data,toY)=>{
	
	if (y == maxY && toY == false) {
		y= m;
		displaySnake(x,y,sizeX,sizeY,data);
   		data.push({x,y});
		return y;
	}else if(y == m && toY == true){
		y= maxY;
		displaySnake(x,y,sizeX,sizeY,data);
   		data.push({x,y});
		return y;
	}else{
		y = toY ?y-=sizeX: y+=sizeY;
		displaySnake(x,y,sizeX,sizeY,data);
   		data.push({x,y});
		return y;
	}
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

//Checks if the treasure is found;
isTreasureFound = (data,treasure,size)=>{
	if (data[0].x == treasure[0].x && data[0].y == treasure[0].y && isFound == false ) {
		treasure[0].isFound = true;
		isTreasurePicked(data,treasure,size);
	}
}

//Initialize reward;
isTreasurePicked = (data,treasure,size)=>{
	var l = data.length-1;
	if (data[l].x == treasure[0].x && data[l].y == treasure[0].y ) {
		pending= true;
		reward(pending,data,treasure,size);
	}
}

// Reward
reward =(pending,data,treasure,size)=>{
	if (pending === true) {
		let myData2 = [{"x":treasure[0].x,"y":treasure[0].y}];
		let jk2 = [...myData2];
		data.forEach(x=>jk2.push(x))

		data =jk2;
		size++;

		pending=false;
		used = true;
		treasure[0].isFound == true;
		treasure=[];
		treasure =createTreasure(treasure);
	}
}

//Maintain original size;
retainSize = (data,size)=>{
	let len = data.length;
	let myData = [];
	
	data.forEach((item,i)=>{
		if ((i+1)<=size){
			myData.push(item);
		}
	});
	data= [...myData];
	return data;	
}

var myTimer = setInterval(()=>{	
	// console.log(`current movement:${currentMove} x: ${x},y: ${y},Size: ${size}, Length: ${len} toX: ${toX} toY: ${toY} interval: ${interval}`);	

	interval++;;
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