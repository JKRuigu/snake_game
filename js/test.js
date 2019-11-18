var canvas = document.getElementById('mycanvas');

var ctx = canvas.getContext('2d');

   	var x = 150;
   	var y = 250;
   	const m = 50; 
   	var sizeX =10;   	 
   	var sizeY = 10;
   	var currentMove =0; //0-Right 1-Left 2-Up 3- Down  

ctx.fillRect(m,m,350,350);
ctx.clearRect(x,y,sizeX,sizeY);



moveRight = (x,y,sizeX,sizeY)=>{
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
	var X = moveRight(x,y,sizeX,sizeY);
	x=X;
}

moveLeft2 = ()=>{
	// alert('Heck! Yeah');
	var X = moveLeft(x,y,sizeX,sizeY);
	x=X;	
}

moveUp2 = ()=>{
	var Y = moveUp(x,y,sizeX,sizeY);
	y=Y;
}

moveDown2 = ()=>{
	var Y = moveDown(x,y,sizeX,sizeY);
	y=Y;
}

move = index =>{
	currentMove = index;
}


setInterval(()=>{
	console.log(`current movement:${currentMove} x: ${x},y: ${y}`);	
	switch(currentMove){
		case 0:
			moveRight2();
			break;
		case 1:
			moveLeft2();
			break;
		case 2:
			moveUp2();
			break;
		case 3:
			moveDown2();
			break;
		default:
			console.log("default");
	}
},2000);