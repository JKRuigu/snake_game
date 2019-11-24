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
	console.log()
	let len = treasure.length;            
	for (var i = m; i <=(maxX+10); i+=10) {
		for (var j = m; j <=(maxX+10); j+=20) {
			ctx.drawImage(img, 10,10,50,50,i,j,10,20);
		}
	}
	
	if(len !=0 && treasure[0].isFound == false) {
		ctx.drawImage(img, 100,580,100,400,treasure[0].x,(treasure[0].y-10),sizeX,(sizeY+sizeY));
	}
	for(i=0; i<size; i++){
		if (snakeType == 0) {
			ctx.clearRect(data[i].x,data[i].y,sizeX,sizeY);
		}else{			
			ctx.drawImage(img, 100,580,1000,1000,data[i].x,data[i].y,sizeX,(sizeY));
		}
	}
	// displayBlocks(blocks);
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
