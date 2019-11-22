// CREATE THE SNAKE;
createSnake =()=>{
	displayScore(points);
	data= [{"x":createRandom(),"y":createRandom()}];
	displaySnake(data[0].x,data[0].y,sizeX,sizeY,data);
	return data;
}

//INTIALIZE THE GAME;
intializeGame = (m,maxX,maxY,sizeX,sizeY,data,treasure)=>{
	ctx.fillRect(m,m,(maxX-m),(maxY-m));
	hasStarted = true;
	if (isAI) {
		document.getElementById('ai').innerHTML ="AI";
	}else{
		document.getElementById('ai').innerHTML ="MANUAL";		
	}
	console.log("Intialized the game");
	return createSnake();
	state = timer;	
}

data = intializeGame(m,maxX,maxY,sizeX,sizeY,data,treasure);
