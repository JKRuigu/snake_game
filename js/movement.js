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
	// console.log(newData,data,[newData,...data]);
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
