getNext =()=>{
	let s= [];
	if (currentMove == 0) {
		if (toX == true) {
			let tempXF = (x+sizeX)>maxX? maxX:(x+sizeX); //RIGHT;
			let tempYU = (y-sizeY)<m?m:(y-sizeY); //UP;
			let tempYD = (y+sizeY)<m?m:(y+sizeY); //DOWN;
			return [{"x":tempXF,y},{x,"y":tempYU},{x,"y":tempYD}];
		}else{
			let tempXF = (x-sizeX)>maxX? maxX:(x-sizeX); //LEFT;
			let tempYU = (y-sizeY)<m?m:(y-sizeY); //UP;
			let tempYD = (y+sizeY)<m?m:(y+sizeY);//DOWN;
			return [{"x":tempXF,y},{x,"y":tempYU},{ x,"y":tempYD}];
		}
	}else{
		if (toY == true) {
			let tempYF = (y-sizeY)>maxY? maxY:(y-sizeY); //UP;	
			let tempXR = (x+sizeX)>maxX?maxX:(x+sizeX);//RIGHT;
			let tempXL = (x-sizeX)<m?m:(x-sizeX);//LEFT;
			return[{x,"y":tempYF},{"x":tempXR,y},{"x":tempXL,y}]; 
		}else{
			let tempYF = (y+sizeY)>maxY? maxY:(y+sizeY); //DOWN;	
			let tempXR = (x+sizeX)>maxX?maxX:(x+sizeX);//RIGHT;
			let tempXL = (x-sizeX)<m?m:(x-sizeX);//LEFT;
			return [{x,"y":tempYF},{"x":tempXR,y},{"x":tempXL,y}];
		}
	}
}

detectCollitionX = (index,bool,blocks,data)=>{
	let len =blocks.length;

	for(i=0;i<len;i++){
		if (blocks[i].x == x && blocks[i].y == y){
			console.log("BLOCK!",currentMove,toX,toY);
			return true;
		}
	}
	if (colBody) {
		if (colideBodyX()) {
			return true;
		}			
	}
	return false;
}

colideBodyX  =()=>{
	for(i=0;i<size;i++){
		if (i>0){
			if (i !=1) {
				if (data[i].x == x && data[i].y == y){
					// console.log("BODY!",currentMove,toX,toY,pending,treasure[0].isFound);
					return true;
				}
			}
		}			
	}
}

detectCollitionY = (index,bool,blocks,data)=>{
	let len =blocks.length;

	for(i=0;i<len;i++){
		if (blocks[i].x == x && blocks[i].y == y){
			console.log("Blocks",currentMove,toX,toY);
			return true;
		}
	}
	if (colBody) {
		if (colideBodyY()) {
			return true;
		}		
	}
	
	return false;
}

colideBodyY =()=>{
	for(i=0;i<size;i++){
		if (i>0){
			if (i !=1) {
				if (data[i].x == x && data[i].y == y){
					console.log("BODY!",currentMove,toX,toY,pending,treasure[0].isFound);
					return true;
				}
			}
		}			
	}
}


col = (myTimer,currentMove,blocks,data)=>{
	if (currentMove == 0) {
		if (detectCollitionX(currentMove,toX,blocks,data)) {
				console.log("detectCollitionX");
				return true;
		}
		return false;
	}else{
		if(detectCollitionY(currentMove,toY,blocks,data)){
			console.log("detectCollitionY");
			return true;
		}
		return false;
	}
}
