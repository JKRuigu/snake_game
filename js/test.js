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
   	var maxX = 390;
   	var maxY =390;
   	var toX = false; //True when direction to X axis is positive
   	var toY = true;  //True when direction to Y axis is positive

   	// console.log(data); 

ctx.fillRect(m,m,350,350);
ctx.clearRect(x,y,sizeX,sizeY);

ctx.clearRect(60,70,sizeX,sizeY);

draw = (x,y,sizeX,sizeY,data)=>{
	let len = data.length;

	for(i=0; i<len; i++){
		ctx.clearRect(data[i].x,data[i].y,sizeX,sizeY);
	}
}

moveHorizontal = (x,y,sizeX,sizeY,data,toX)=>{

		if (x == maxX && toX == true) {
			x= m;
			draw(x,y,sizeX,sizeY,data);
	   		data.push({x,y});
			return x;
		}else if(x == m && toX == false){
			x= maxX;
			draw(x,y,sizeX,sizeY,data);
	   		data.push({x,y});
			return x;
		}else{
			toX ? x+=sizeX:x-=sizeX;
			draw(x,y,sizeX,sizeY,data);
	   		data.push({x,y});
			return x;
		}
}


moveVertical = (x,y,sizeX,sizeY,data,toY)=>{
	
	if (y == maxY && toY == false) {
		y= m;
		draw(x,y,sizeX,sizeY,data);
   		data.push({x,y});
		return y;
	}else if(y == m && toY == true){
		y= maxY;
		draw(x,y,sizeX,sizeY,data);
   		data.push({x,y});
		return y;
	}else{
		y = toY ?y-=sizeX: y+=sizeY;
		draw(x,y,sizeX,sizeY,data);
   		data.push({x,y});
		return y;
	}
}


moveHorizontal2 = (bool)=>{
	toX = bool;
	var X = moveHorizontal(x,y,sizeX,sizeY,data,toX);
	x=X;
}

moveVertical2 = (bool)=>{
	toY = bool;
	var Y = moveVertical(x,y,sizeX,sizeY,data,toY);
	y=Y;
}

move = (index,bool) =>{
	currentMove = index;
	index == 0? toX =bool: toY =bool;
}


var myTimer = setInterval(()=>{
	let last = data[0];
	let len = data.length;
	console.log(`current movement:${currentMove} x: ${x},y: ${y},Size: ${size}, Length: ${len} toX: ${toX} toY: ${toY}`);	

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
			moveHorizontal2(toX);
			break;
		case 1:
			moveVertical2(toY);
			break;			
		default:
			console.log("default");
	}
},500);

// setInterval(()=>{clearInterval(myTimer)},30000);