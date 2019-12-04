// var img = new Image();
// img.src = "./imgs/grass_15.png";

// DISPLAY BLOCKS;
displayBlocks =()=>{
	let l = blocks.length;
	if (background == 0) {
		for(i=0;i<l;i++){
			// ctx.clearRect(blocks[i].x,blocks[i].y,sizeX,sizeY);
			ctx.drawImage(img2, 200,200,50,50,blocks[i].x,blocks[i].y,sizeX,sizeY);
		}
	}else{
		for(i=0;i<l;i++){
			ctx.clearRect(blocks[i].x,blocks[i].y,sizeX,sizeY);
		}
	}

}

clearSnake= (rData,background) =>{
	if (rData.length != 0) {
		if (background == 0) {
				ctx.fillRect(rData[0].x,rData[0].y,sizeX,sizeY);
		}else if(snakeType == 0 && background == 1){
			ctx.drawImage(img2, 200,200,50,50,rData[0].x,rData[0].y,sizeX,(sizeY));
			// console.log("1");		
		}else{	
			// console.log("2");		
			ctx.drawImage(img2, 200,200,50,50,rData[0].x,rData[0].y,sizeX,(sizeY));
		}
	}
}

//DISPLAY SNAKE IN THE SCREEN;
displaySnake = (x,y,sizeX,sizeY,data)=>{
	if (!isOver) {
		// console.log(data);
		for(i=0; i<size; i++){
			if (background == 0) {
				ctx.clearRect(data[i].x,data[i].y,sizeX,sizeY);
			}else if(snakeType == 0 && background == 1){
				ctx.drawImage(img, 100,100,700,500,data[i].x,data[i].y,sizeX,(sizeY));
			}else{			
				ctx.drawImage(img, 100,580,1000,1000,data[i].x,data[i].y,sizeX,(sizeY));
			}
		}
		clearSnake(dataRemove,background);
	}
}

displayTreasure =treasure=>{
	if (background ==0) {
		ctx.drawImage(img, 200,200,50,50,treasure[0].x,treasure[0].y,sizeX,sizeY);
	}else{
		ctx.clearRect(treasure[0].x,treasure[0].y,sizeX,sizeY);
	}
}
changeBackground = (type,data,sizeX,sizeY)=>{
	
	if (type == 1) {
		for (var i = m; i <=(maxX+10); i+=10) {
			for (var j = m; j <=(maxX+10); j+=10) {
				ctx.drawImage(img2, 200,200,50,50,i,j,10,10);
			}
		}
	}else{
			ctx.fillRect(m,m,(maxX-m)+20,(maxY-m)+20);
	}

	displaySnake(x,y,sizeX,sizeY,data);
	displayBlocks();
	displayTreasure(treasure);
}

//Displays score;
displayScore =(points)=>{
	ctx.clearRect(30,5,400,55);
	ctx.font= 'Bold 18px Sans-Serif';
	if (isPlay) {
		tLeft = timer -(interval*speed);
	}else{
		if (userTime>(speed/1000)) {
			tLeft = userTime -(interval*speed);
		}else{
			tLeft = timer -(interval*speed);
		}
	}

	let txt = `Points: ${points} Time left: ${tLeft}`
	ctx.strokeText(txt, 50, 30);//displays the game title;
}



displayGameOver = ()=>{
	console.log("GAME OVER!")
	ctx.clearRect(120,130,250,100);
	ctx.font= 'Bold 35px Sans-Serif';
	let txt = `Game Over !!!`;
	ctx.strokeText(txt, 130, 190);//displays the game title;
}