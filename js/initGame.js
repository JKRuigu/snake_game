// CREATE THE SNAKE;
createSnake =()=>{
	displayScore(points);
	data= [{"x":createRandom(),"y":createRandom()}];
	displaySnake(data[0].x,data[0].y,sizeX,sizeY,data);
	return data;
}

//INTIALIZE THE GAME;
intializeGame = (m,maxX,maxY,sizeX,sizeY,data,treasure)=>{
	// ctx.fillRect(m,m,(maxX-m),(maxY-m));

	// var img = new Image();
	// img.src = './imgs/grass_15.png';
	// img.onload = function(){
	// }
	  let temX =(maxX-m);
	  let temY = (maxY-m);
	  
	// for (var i = m; i < temY; i+m) {
	// 	console.log(i);
	//   	for (var i = m; i < temX; i+m) {
	//   		// ctx.drawImage(img,10,10,temX,temY);	  		
	//   		console.log(temX,temY);
	//   	}
	// }

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

console.log("DISPLAY");
dispayMessage = msg =>{
	// ctx.clearRect(30,5,400,55);
	ctx.font= 'Bold 30px Sans-Serif';
	console.log(msg);
	ctx.clearRect(100,100,200,70);
	ctx.strokeText(msg, 100, 150);//displays the game title;	
}

// dispayMessage("GAME OVER!")