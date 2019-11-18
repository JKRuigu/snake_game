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



moveRight = (x,y,sizeX,sizeY,data)=>{
	if (x == 390) {
		x= 50;
		ctx.clearRect(x,y,sizeX,sizeY);
   		data.push({x,y});
		return x;
	}else{
		x+=10;
		ctx.clearRect(x,y,sizeX,sizeY);
   		data.push({x,y});
		return x;
	}	
}

moveDown = (x,y,sizeX,sizeY)=>{
	if (y == 390) {
		y= 50;
		ctx.clearRect(x,y,sizeX,sizeY);
   		data.push({x,y});
		return y;
	}else{
		y+=10;
		ctx.clearRect(x,y,sizeX,sizeY);
   		data.push({x,y});
		return y;
	}
}

moveLeft = (x,y,sizeX,sizeY)=>{
	if (x == 390) {
		x= 50;
		ctx.clearRect(x,y,sizeX,sizeY);
   		data.push({x,y});
		return x;
	}else{
		x-=10;
		ctx.clearRect(x,y,sizeX,sizeY);
   		data.push({x,y});
		return x;
	}
}


moveUp = (x,y,sizeX,sizeY)=>{
	if (y == 390) {
		y= 50;
		ctx.clearRect(x,y,sizeX,sizeY);
   		data.push({x,y});
		return y;
	}else{
		y-=10;
		ctx.clearRect(x,y,sizeX,sizeY);
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

// function popdata() {
// 	data.pop();
// }

fill = (data,size,x,y,sizeX,sizeY)=>{
	let len = data.length;
	let last = data[0].x;
	console.log("FILL function",size,len,last);
	// if(size == len){
	// 	popdata();
	// }
	console.log(data[0].x,data[0].y,sizeX,sizeY);
	
	data.forEach((item,i)=>{
		if(i >= (size-1)){
			console.log(data[0].x,data[0].y,sizeX,sizeY);
			ctx.fillRect(data[0].x,data[0].y,sizeX,sizeY);
			// data.pop(0);		
		}
	});

}

function callfill() {
	fill(data,size,x,y,sizeX,sizeY);	
}

setInterval(()=>{
	console.log(`current movement:${currentMove} x: ${x},y: ${y}`);	
	// console.log(data);
	callfill();

	// data.slice(0,size);
	console.log(data);	
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