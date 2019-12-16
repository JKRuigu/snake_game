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

// console.log(window);

var img3 = new Image();
img3.src = "./imgs/tiles.png";



displayBackGround = ()=>{
	img2.onload=function() {
	if( localStorage.level ){
            currentLevel = Number(localStorage.level);
            var l = currentLevel+1
            document.getElementById("Level").innerHTML = `LEVEL ${l}`;
    }else{
        localStorage.level = Number(currentLevel);
    }		
	if (gameLevels[currentLevel].background == 1) {
		let len = treasure.length;            
		for (var i = m; i <=maxY; i+=sizeY) {
			for (var j = m; j <=maxX; j+=sizeX) {
				ctx.drawImage(img2, img2X,img2Y,m,m,i,j,sizeX,sizeY);//display dark green green;
			}
		}
	}else{
		ctx.fillRect(m,m,maxX2,maxY2);
		for (var i = m-sizeY; i <=maxY+(sizeY*2); i+=sizeY) {
			for (var j = m-sizeX; j <=maxX+(sizeX*2); j+=sizeX) {
				if (i== 40 || i==440 || j == 40 || j == 440) {
					ctx.drawImage(img3, 0,0,10,10,i,j,sizeX,sizeY);
				}
			}
		}
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

img3.onload=function () {
	
	displayBackGround();
}

//INTIALIZE THE GAME;
intializeGame = (m,maxX,maxY,sizeX,sizeY,data,treasure)=>{
	
	document.getElementById('ai').innerHTML =isAI?"AI":"MANUAL";
	document.getElementById("typeAi").innerHTML = aiType == 0? "AI 0": aiType == 1?"AI 1": aiType == 2?"AI 2": "AI 3";

	console.log("Intialized the game!");
	displayBlocks();
	state = timer;	
	//clears unwanted walls;
	ctx.clearRect(40,450,sizeX,sizeY);
	ctx.clearRect(450,40,sizeX,sizeY);
	ctx.clearRect(440,450,sizeX,sizeY);
	ctx.clearRect(450,440,sizeX,sizeY);
	return createSnake();
}
