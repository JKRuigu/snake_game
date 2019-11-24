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
			return [{"x":tempXF,y},{x,"y":tempYU},{ x,tempYD}];
		}
	}else{
		if (toY == true) {
			let tempYF = (y-sizeY)>maxY? maxY:(y-sizeY); //UP;	
			let tempXR = (x+sizeX)>maxX?maxX:(x+sizeX);//RIGHT;
			let tempXL = (x-sizeX)<m?m:(x-sizeX);//LEFT;
			return[{x,"y":tempYF},{"x":tempXR,y},{"x":tempXL,y}]; 
		}else{
			let tempYF = (y+sizeY)>maxY? maxY:(y+sizeY); //UP;	
			let tempXR = (x+sizeX)>maxX?maxX:(x+sizeX);//RIGHT;
			let tempXL = (x-sizeX)<m?m:(x-sizeX);//LEFT;
			return [{x,"y":tempYF},{"x":tempXR,y},{"x":tempXL,y}];
		}
	}
}

detectCollitionX = (index,bool)=>{
	let len =blocks.length;

	for(i=0;i<len;i++){
		if (blocks[i].x == x && blocks[i].y == y)
			return true;
	}
	return false;
}

detectCollitionY = (index,bool)=>{
	let len =blocks.length;

	for(i=0;i<len;i++){
		if (blocks[i].y == y && blocks[i].x == x)
			return true;
	}
	return false;
}

col = (myTimer,currentMove)=>{
	if (currentMove == 0) {
		if (detectCollitionX(currentMove,toX)) {
				return true;
		}
		return false;
	}else{
		if(detectCollitionY(currentMove,toY)){
			return true;
		}
		return false;
	}
}
