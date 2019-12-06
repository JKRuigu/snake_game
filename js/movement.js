// HORIZONTAL MOVEMENT along x-axis;
moveHorizontal = (x,y,sizeX,sizeY,data,toX)=>{
		// var rData = data[data.length-1];
		// // console.log(rData,data)

		if (x == maxX && toX == true) {
			x= m;//intialize x to margin of x;
			var cData = addData({x,y});
			displaySnake2(x,y,sizeX,sizeY,cData[0],cData[1]);
			return x;
		}else if(x == m && toX == false){
			x= maxX;
			var cData = addData({x,y});
			displaySnake2(x,y,sizeX,sizeY,cData[0],cData[1]);
			return x;
		}else{
			toX ? x+=sizeX:x-=sizeX;
			x = (x == 390? 50:x); //checks if x is greater than maxX;
	   		var cData = addData({x,y});
			displaySnake2(x,y,sizeX,sizeY,cData[0],cData[1]);
			return x;
		}
}

//VERTICAL MOVEMENT along y-axis;
moveVertical = (x,y,sizeX,sizeY,data,toY)=>{
	
	if (y == maxY && toY == false) {
		y= m;
		var cData = addData({x,y});
		displaySnake2(x,y,sizeX,sizeY,cData[0],cData[1]);
		return y;
	}else if(y == m && toY == true){
		y= maxY;
		var cData = addData({x,y});
		displaySnake2(x,y,sizeX,sizeY,cData[0],cData[1]);
		return y;
	}else{
		y = toY ?y-=sizeX: y+=sizeY;
		var cData = addData({x,y});
		displaySnake2(x,y,sizeX,sizeY,cData[0],cData[1]);
		return y;
	}
}



addData = (newData)=>{
	var l = data[data.length-1];
	data = [newData,...data].slice(0,size);
	var combData = [data,l];
	console.log(combData);


	// console.log("Add ",tLeft);
	return combData;
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
