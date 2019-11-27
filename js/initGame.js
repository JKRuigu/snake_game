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

	if (selectBackground == 1) {
		let len = treasure.length;            
		for (var i = m; i <=(maxX+10); i+=10) {
			for (var j = m; j <=(maxX+10); j+=20) {
				ctx.drawImage(img2, 200,200,50,50,i,j,10,20);
			}
		}
	}else{
			ctx.fillRect(m,m,(maxX-m)+20,(maxY-m)+20);
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

restoreBlackGround =(x,y,sizeX,sizeY)=>{
	if (selectBackground ==1) {
		ctx.drawImage(img, 10,10,50,50,x,y,sizeX,sizeY);
	}else{
		ctx.fillRect(m,m,(maxX-m),(maxY-m));
	}
}            

//INTIALIZE THE GAME;
intializeGame = (m,maxX,maxY,sizeX,sizeY,data,treasure)=>{
	// ctx.fillRect(m,m,(maxX-m),(maxY-m));
	if (isAI) {
		document.getElementById('ai').innerHTML ="AI";
	}else{
		document.getElementById('ai').innerHTML ="MANUAL";		
	}
	console.log("Intialized the game!");
	return createSnake();
	state = timer;	
}
