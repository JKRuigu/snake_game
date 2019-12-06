// CREATE THE SNAKE;
createSnake =()=>{
	displayScore(points);
	data= [{"x":createRandom(),"y":createRandom()}];
	displaySnake(data[0].x,data[0].y,sizeX,sizeY,data);
	return data;
}

var img = new Image();
img.src = "./imgs/mario.png";

var img2 = new Image();
img2.src = "./imgs/grass_15.png";

displayBackGround = ()=>{
	img2.onload=function() {

	if (background == 1) {
		let len = treasure.length;            
		for (var i = m; i <=maxY; i+=sizeY) {
			for (var j = m; j <=maxX; j+=sizeX) {
				ctx.drawImage(img2, 150,250,m,m,i,j,sizeX,sizeY);//display dark green green;
			}
		}
	}else{
		ctx.fillRect(m,m,maxX2,maxY2);
	}


						//pos//size			
	    	// ctx.drawImage(img, 1,2,3, 4,5,6, 7,8);
	// BLOCK;
	// ctx.drawImage(img, 100,580,100,400,50,50,10,20);
	console.log("IMG LOADED!");
	if (data.length ==0) {
		data = intializeGame(m,maxX,maxY,sizeX,sizeY,data,treasure);
		x = data[0].x;
		y = data[0].y;
		treasure = createTreasure(treasure);
	}
	}
}


displayBackGround();

//INTIALIZE THE GAME;
intializeGame = (m,maxX,maxY,sizeX,sizeY,data,treasure)=>{
	
	document.getElementById('ai').innerHTML =isAI?"AI":"MANUAL";
	document.getElementById("typeAi").innerHTML = aiType == 0? "Stupid": aiType == 1?"Clever":"Wise";

	console.log("Intialized the game!");
	displayBlocks();
	state = timer;	
	return createSnake();
}
