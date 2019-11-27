// var img = new Image();
// img.src = "./imgs/grass_15.png";

// DISPLAY BLOCKS;
displayBlocks =()=>{
	let l = blocks.length;
	for(i=0;i<l;i++){
		ctx.clearRect(blocks[i].x,blocks[i].y,sizeX,sizeY);
	}
}

//DISPLAY SNAKE IN THE SCREEN;
displaySnake = (x,y,sizeX,sizeY,data)=>{
	// console.log(selectBackground)
	// console.log()
		let len = treasure.length;            
	if (background == 1) {
		for (var i = m; i <=(maxX+10); i+=10) {
			for (var j = m; j <=(maxX+10); j+=20) {
				ctx.drawImage(img2, 200,200,50,50,i,j,10,20);
			}
		}
	}else{
		ctx.fillRect(m,m,(maxX-m)+20,(maxY-m)+20);
	}
	
	if(len !=0 && treasure[0].isFound == false) {
		// ctx.drawImage(img, 100,580,100,400,treasure[0].x,(treasure[0].y-10),sizeX,(sizeY+sizeY));
		ctx.clearRect(treasure[0].x,treasure[0].y,sizeX,sizeY);
	}
	for(i=0; i<size; i++){
		ctx.clearRect(data[i].x,data[i].y,sizeX,sizeY);

		if (background == 0) {
			ctx.clearRect(data[i].x,data[i].y,sizeX,sizeY);
		}else if(snakeType == 0 && background == 1){
			ctx.drawImage(img, 100,100,700,500,data[i].x,data[i].y,sizeX,(sizeY));
		}else{			
			ctx.drawImage(img, 100,580,1000,1000,data[i].x,data[i].y,sizeX,(sizeY));
		}
	}
	displayBlocks(blocks);
}
changeType = (type,data,sizeX,sizeY)=>{
	ctx.drawImage(img, 10,10,50,50,data[0].x,data[0].y,10,20);
	for(i=0; i<size; i++){
		if (type == 0) {
			ctx.clearRect(data[i].x,data[i].y,sizeX,sizeY);
		}else{			
			ctx.drawImage(img, 100,580,1000,1000,data[i].x,data[i].y,sizeX,(sizeY));
		}
	}
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