
moveRight = (x,y,sizeX,sizeY)=>{
	console.log(`x: ${x},y: ${y}`)
	if (x == 390) {
		x= 50;
		ctx.clearRect(x,y,sizeX,sizeY);
		return x;
	}else{
		x+=10;
		ctx.clearRect(x,y,sizeX,sizeY);
		return x;
	}	
}

moveDown = (x,y,sizeX,sizeY)=>{
	if (y == 390) {
		y= 50;
		ctx.clearRect(x,y,sizeX,sizeY);
		return y;
	}else{
		y+=10;
		ctx.clearRect(x,y,sizeX,sizeY);
		return y;
	}
}

moveleft = (x,y,sizeX,sizeY)=>{
	if (x == 390) {
		x= 50;
		ctx.clearRect(x,y,sizeX,sizeY);
		return x;
	}else{
		x-=10;
		ctx.clearRect(x,y,sizeX,sizeY);
		return x;
	}
}


moveUp = (x,y,sizeX,sizeY)=>{
	if (y == 390) {
		y= 50;
		ctx.clearRect(x,y,sizeX,sizeY);
		return y;
	}else{
		y-=10;
		ctx.clearRect(x,y,sizeX,sizeY);
		return y;
	}
}