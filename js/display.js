// var img = new Image();
// img.src = "./imgs/grass_15.png";

// DISPLAY BLOCKS;
displayBlocks =()=>{
	if (!isOver || !isLost) {
		let blocks = gameLevels[currentLevel][0].blocks;
		let l = blocks.length;
		// console.log(blocks);
		if (gameLevels[currentLevel][0].background == 0) {
			for(i=0;i<l;i++){
				// ctx.clearRect(blocks[i].x,blocks[i].y,sizeX,sizeY);
				ctx.drawImage(img2, img2X,img2Y,m,m,blocks[i].x,blocks[i].y,sizeX,sizeY);
			}
		}else{
			for(i=0;i<l;i++){
				ctx.drawImage(img3, 0,0,10,10,blocks[i].x,blocks[i].y,sizeX,sizeY);
				// ctx.clearRect(blocks[i].x,blocks[i].y,sizeX,sizeY);
			}
		}		
	}

}

clearSnake= (rData,background) =>{
	if (!isOver || !isLost) {
		if (gameLevels[currentLevel][0].background == 0) {
				ctx.fillRect(rData.x,rData.y,sizeX,sizeY);
		}else if(snakeType == 0 && background == 1){
			ctx.drawImage(img2, img2X,img2Y,m,m,rData.x,rData.y,sizeX,(sizeY));
		}else{	
			ctx.drawImage(img2, img2X,img2Y,m,m,rData.x,rData.y,sizeX,(sizeY));
		}		
	}
}

//DISPLAY SNAKE IN THE SCREEN;
displaySnake = (x,y,sizeX,sizeY,data)=>{
	// console.log("display");
	if (!isOver || !isLost) {
		for(i=0; i<size; i++){
			if (gameLevels[currentLevel][0].background == 0) {
				ctx.clearRect(data[i].x,data[i].y,sizeX,sizeY);
			}else if(snakeType == 0 && gameLevels[currentLevel][0].background == 1){
				ctx.drawImage(img,imgX,imgY,700,500,data[i].x,data[i].y,sizeX,(sizeY));
			}else{			
				ctx.drawImage(img,imgX,580,1000,1000,data[i].x,data[i].y,sizeX,(sizeY));
			}
		}
	}
}

displaySnake2 = (x,y,sizeX,sizeY,data,clearData)=>{
	// console.log(data,clearData);
	displaySnake(x,y,sizeX,sizeY,data);
	clearSnake(clearData,background);
}

displayTreasure =treasure=>{
	if (!isOver || !isLost) {
		if (gameLevels[currentLevel][0].background ==0) {
			ctx.drawImage(img, (imgX*2),(imgY*2),m,m,treasure[0].x,treasure[0].y,sizeX,sizeY);
		}else{
			ctx.clearRect(treasure[0].x,treasure[0].y,sizeX,sizeY);
		}		
	}
}
changeBackground = (type,data,sizeX,sizeY)=>{
	if (type == 1) {
		for (var i = m; i <=maxY; i+=sizeY) {
			for (var j = m; j <=maxX; j+=sizeX) {
				ctx.drawImage(img2, img2X,img2Y,m,m,i,j,sizeX,sizeY);//display dark green green;
			}
		}
	}else{
		ctx.fillRect(m,m,maxX2,maxY2);
	}
}

reset = (x,y,treasure,data,sizeX,sizeY)=>{
	// ctx.clearRect((m+0),(m+0),sizeX,sizeY);
	displaySnake(x,y,sizeX,sizeY,data);
	displayBlocks();
	displayTreasure(treasure);
}

//Displays score;
displayScore =(points)=>{
	ctx.clearRect(30,0,450,40);
	ctx.font= 'Bold 18px Sans-Serif';
	// console.log(gameLevels[currentLevel][0].timer)
		tLeft = gameLevels[currentLevel][0].timer -(interval*gameLevels[currentLevel][0].speed);
		if (tLeft <=0) {
			// console.log("JJKS")
			isOver =true;
			isLost =true;
			tLeft = 0;
		}
		var myLevel = currentLevel+1;
		let txt = `Points: ${points} Target:${gameLevels[currentLevel][0].target*10}  Time left: ${tLeft} Level ${myLevel}`
		ctx.strokeText(txt, 40, 30);//displays the game title;
	// if (isPlay) {
	// }else{
	// 	if (userTime>(speed/1000)) {
	// 		tLeft = userTime -(interval*speed);
	// 	}else{
	// 		tLeft = timer -(interval*speed);
	// 	}
	// }
	
}



displayMessage = msg =>{
	if(msg){
		isLost = false;
	}
	ctx.clearRect(120,130,250,100);
	ctx.font= `Bold 20px Sans-Serif`;
	ctx.strokeText("GAME OVER !!!", 150, 160);//displays the game title;
	ctx.font= `Bold 30px Sans-Serif`;
	ctx.strokeText(`You ${msg}`, 150, 190);//displays the game title;
}