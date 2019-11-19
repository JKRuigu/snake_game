var canvas = document.getElementById('mycanvas');

var ctx = canvas.getContext('2d');

   	var x = 150;
   	var y = 250;
   	const m = 50; 
   	var sizeX =10;   	 
   	var sizeY = 10;
   	var currentMove =0; // 0-Right 1-Left 2-Up 3- Down  
   	var data = [];
   	data.push({x,y});
   	var size = 2; // 2(TWO) is the least size; 
   	var maxX = 390;
   	var maxY =390;
   	var toX = true; //True when direction to X axis is positive;
   	var toY = true;  //True when direction to Y axis is positive;
   	var treasure= [{x:190,y:250,isFound:false}];
   	var pending =false;
   	var interval = 0;
   	var isMoveY = false;

   	// console.log(data); 

ctx.fillRect(m,m,350,350);
ctx.font= 'Bold 40px Sans-Serif';
ctx.strokeText('Snakes', 150, 45);

ctx.clearRect(x,y,sizeX,sizeY);
ctx.clearRect(treasure[0].x,treasure[0].y,sizeX,sizeY);
changeY =()=>{
	// console.log(isMoveY);
	isMoveY = !isMoveY;
	// console.log(isMoveY);
}

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

createReward = ()=>{
		let ranX = Math.floor(Math.random()*390);
		let ran2X = ranX -(ranX%10); //random number for X
		ran2X = ran2X <50? 50:ran2X //checks wheather is below 50;

		let ranY = Math.floor(Math.random()*390);
		let ran2Y = ranY - (ranY%10); //random number for Y
		ran2Y = ran2Y <50? 50:ran2Y //checks wheather is below 50;
		// treasure = [{"x":ran2X,"y":ran2Y,isFound:false}];
		treasure = [{"x":ran2X,"y":ran2Y,isFound:false}];
		// console.log(treasure);
		console.log("Display")
		ctx.clearRect(ran2X,ran2Y,sizeX,sizeY);
		// setInterval(()=>{clearInterval(myTimer)},40000);
}

var myTimer = setInterval(()=>{
	let last = data[0];
	let len = data.length;
	// console.log(`current movement:${currentMove} x: ${x},y: ${y},Size: ${size}, Length: ${len} toX: ${toX} toY: ${toY} interval: ${interval}`);	

	if (len == size) {
		let myData = [];

		data.forEach((item,i)=>{
			ctx.fillRect(data[0].x,data[0].y,sizeX,sizeY);
			if (i!=0) {
				myData.push(item);
			}
		});
		data= [...myData];
	}
	
	var isFound = treasure[0].isFound;
	// console.log(isFound,treasure[0].isFound);
	if (data[0].x == treasure[0].x && data[0].y == treasure[0].y && isFound == false ) {
		console.log("Heck! Yeah");
		treasure[0].isFound = true;
		used = false;
	}

	if (pending === true) {
		console.log("Mmmmmh");
		let myData2 = [{"x":treasure[0].x,"y":treasure[0].y}];
		
		let jk2 = [...myData2];
		data.forEach(x=>jk2.push(x))
		// console.log(jk2);

		data =jk2;
		size++;

		pending=false;
		used = true;
		treasure[0].isFound == true;
		// changeY();
		createReward();
	}

	var l = data.length-1;
	// console.log(data[l].x,'---->',treasure[0].x,data[l].y,'---->',treasure[0].y,)
	if (data[l].x == treasure[0].x && data[l].y == treasure[0].y ) {
		console.log("PENDING.......")
		pending= true;
	}
	ai(treasure,data,isMoveY,pending);

	interval++;
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

setInterval(()=>{clearInterval(myTimer)},20000);

ai = (treasure,data,isMoveY,pending)=>{
	// console.log(data,treasure);
	let target = {"x":treasure[0].x,"y":treasure[0].y};
	let location = {"x":data[0].x,"y":data[0].y};
	let diffX = location.x - target.x;
	let diffY =  location.y - target.y;
	let xBool = location.x >target.x ? false:true;
	let yBool = location.y>target.y?true:false;
	let cX = xBool?target.x +10:target.x-10;
	if (location.x == target.x && isMoveY == false) {

	console.log(yBool);
		move(1,yBool);
		changeY();
	}
	if(location.y == target.y && isMoveY == true){
		move(0,xBool);
		changeY();
	}
	
}

distanceCalcutor =(location,target)=>{
}

goToY = (diffY,location,target,isMoveY)=>{
}


// setInterval(()=>{clearInterval(myTimer)},30000);