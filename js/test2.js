var canvas = document.getElementById('mycanvas');

var ctx = canvas.getContext('2d');

   	var x = 150;
   	var y = 250;
   	const m = 50; 
   	var sizeX =10;   	 
   	var sizeY = 10;
   	var currentMove =0; //0-Right 1-Left 2-Up 3-Down  

ctx.fillRect(m,m,350,350);
ctx.clearRect(x,y,sizeX,sizeY);



moveRight = (x,y,sizeX,sizeY)=>{
	console.log(`x: ${x},y: ${y}`);
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
	console.log(`Down --> x: ${x},y: ${y}`)
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

moveLeft = (x,y,sizeX,sizeY)=>{
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


moveRight2 = ()=>{
	currentMove = 0;
}

moveLeft2 = ()=>{
	currentMove =1;
}

moveUp2 = ()=>{
	currentMove = 2;
}

moveDown2 = ()=>{
	currentMove = 3;
}


moveRight3 = ()=>{
	var X = moveRight(x,y,sizeX,sizeY);
	console.log(x,X);
	x =X;	
	console.log(x,X);
}

moveLeft3 = ()=>{
	currentMove =1;
}

moveUp3 = ()=>{
	currentMove = 3;
}

moveDown3 = ()=>{
	currentMove = 3;
}

setInterval(()=>{
	console.log(currentMove);
	switch(currentMove){
		case 0:
			moveRight3();
		case 1:
			var X = moveLeft(x,y,sizeX,sizeY);
			x=X;
		break;
		case 3:
			var Y = moveUp(x,y,sizeX,sizeY);
			y=Y;
		break;
		case 4:
			var Y = moveDown(x,y,sizeX,sizeY);	
			y=Y;
		break;
		default:
			var X = moveRight(x,y,sizeX,sizeY);
			x=X;
	}
},2000);