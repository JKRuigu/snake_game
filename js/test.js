var canvas = document.getElementById('mycanvas');

var ctx = canvas.getContext('2d');

   	var x = 150;
   	var y = 250;
   	const m = 50; 
   	var sizeX =10;   	 
   	var sizeY = 10;
   	var currentMove =0; //0-Right 1-Left 2-Up 3- Down  
   	var data = [];
   	data.push({x,y});
   	var size = 5; 

   	// console.log(data); 

ctx.fillRect(m,m,350,350);
ctx.clearRect(x,y,sizeX,sizeY);

draw = (x,y,sizeX,sizeY,data)=>{
	let len = data.length;

	for(i=0; i<len; i++){
		ctx.clearRect(data[i].x,data[i].y,sizeX,sizeY);
	}
}

moveRight = (x,y,sizeX,sizeY,data)=>{
	if (x == 390) {
		x= 50;
		draw(x,y,sizeX,sizeY,data);
   		data.push({x,y});
		return x;
	}else{
		x+=10;
		draw(x,y,sizeX,sizeY,data);
   		data.push({x,y});
		return x;
	}	
}

moveDown = (x,y,sizeX,sizeY)=>{
	if (y == 390) {
		y= 50;
		draw(x,y,sizeX,sizeY,data);
   		data.push({x,y});
		return y;
	}else{
		y+=10;
		draw(x,y,sizeX,sizeY,data);
   		data.push({x,y});
		return y;
	}
}

moveLeft = (x,y,sizeX,sizeY)=>{
	if (x == 390) {
		x= 50;
		draw(x,y,sizeX,sizeY,data);
   		data.push({x,y});
		return x;
	}else if(x == 50){
		x= 380;
		draw(x,y,sizeX,sizeY,data);
   		data.push({x,y});
		return x;
	}else{
		x-=10;
		draw(x,y,sizeX,sizeY,data);
   		data.push({x,y});
		return x;
	}
}


moveUp = (x,y,sizeX,sizeY)=>{
	if (y == 390) {
		y= 50;
		draw(x,y,sizeX,sizeY,data);
   		data.push({x,y});
		return y;
	}else if(y == 50){
		y= 380;
		draw(x,y,sizeX,sizeY,data);
   		data.push({x,y});
		return y;
	}else{
		y-=10;
		draw(x,y,sizeX,sizeY,data);
   		data.push({x,y});
		return y;
	}
}


moveRight2 = ()=>{
	var X = moveRight(x,y,sizeX,sizeY,data);
	x=X;
}

moveLeft2 = ()=>{
	// alert('Heck! Yeah');
	var X = moveLeft(x,y,sizeX,sizeY,data);
	x=X;	
}

moveUp2 = ()=>{
	var Y = moveUp(x,y,sizeX,sizeY,data);
	y=Y;
}

moveDown2 = ()=>{
	var Y = moveDown(x,y,sizeX,sizeY,data);
	y=Y;
}

move = index =>{
	currentMove = index;
}


var myTimer = setInterval(()=>{
	let last = data[0];
	let len = data.length;
	console.log(`current movement:${currentMove} x: ${x},y: ${y},Size: ${size}, Length: ${len}`);	

	if (len == size) {
		// data.forEach(item=>console.log(item.x));
		let myData = [];

		data.forEach((item,i)=>{
			ctx.fillRect(data[0].x,data[0].y,sizeX,sizeY);
			if (i!=0) {
				myData.push(item);
			}
		});
		data= [...myData];
	}
	// console.log(data);
	
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
},1000);

// setInterval(()=>{clearInterval(myTimer)},30000);