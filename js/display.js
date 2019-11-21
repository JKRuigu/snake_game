//DISPLAY SNAKE IN THE SCREEN;
displaySnake = (x,y,sizeX,sizeY,data)=>{
	let len = treasure.length;
	ctx.fillRect(m,m,(maxX-m),(maxY-m));
	if(len !=0 && treasure[0].isFound == false) {
		ctx.clearRect(treasure[0].x,treasure[0].y,sizeX,sizeY);
	}
	for(i=0; i<size; i++){
		ctx.clearRect(data[i].x,data[i].y,sizeX,sizeY);
	}
}

displayScore =(points)=>{
	ctx.clearRect(30,5,350,55);
	ctx.font= 'Bold 18px Sans-Serif';
	var avg =0;
	if (points !=0 ) {
		pointsArr.push(Math.floor((points/interval)*100));
		let l = pointsArr.length;
		let sum=0;
		for (i = 0; i < l; i++) {
				sum+=pointsArr[i];
			}	
			avg = Math.floor(sum/(l+1));
	}else{
		avg = 0;
	}
	let rate  = Math.floor((points/interval)*100);
	let txt = `size:${size} pts: ${points} rate:${rate} avg:${avg}`
	ctx.strokeText(txt, 50, 45);//displays the game title;
}
