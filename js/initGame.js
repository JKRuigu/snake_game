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
