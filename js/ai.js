// ALGORTHM TO GET THE SHORTEST PATH; 46% accuracy;
generateXY = (from,to)=>{
	// console.log("STUPID");
	let xRoute =[];
	let fromX = from.x;
	let toXA = to.x;
	let diffX = fromX-toXA;
	let isdiffX = ((diffX<1)? true:false);
	let sX = isdiffX?sizeX:-sizeX;


	while((fromX+sX) != (toXA+sX)){
		xRoute.push({"x":fromX,"y":from.y});
		fromX +=sX;
	}

	let yRoute =[];
	let fromY = from.y;
	let toYA = to.y;
	let diffY = fromY-toYA;
	let isdiffY = ((diffY<1)?true:false);
	let sY = isdiffY?sizeY:-sizeY;
	// console.log(fromY,toYA,sY,diffY,isdiffY)
	// console.log((fromY+sY),(toYA+sY),sY,diffY,isdiffY)

	while((fromY+sY)!= (to.y+sY)){
	 	yRoute.push({"x":from.x,"y":fromY});
		fromY+=sY;
	}
	// console.log(xRoute,yRoute,to.x,to.y);

	let xLen = xRoute.length;
	let yLen = yRoute.length;

	if (xLen == 0 && yLen != 0) {
		return 1;
	}

	if (yLen == 0 && xLen != 0) {
		return 0;
	}
	if (diffX < diffY && xLen<yLen) {
		diffX = diffX <0 ? (diffX*-1):diffX;
		toX = diffX<(maxX-diffX)? isdiffX:!isdiffX; 
		return 0
	}

	if (diffY < diffX && yLen<xLen) {
		diffY = diffY <0 ? (diffY*-1):diffY;
		toY = diffY<(maxY-diffY)?!isdiffY:isdiffY; 
		return 1	
	}
	if (xLen<yLen) {
		diffX = diffX <0 ? (diffX*-1):diffX;
		toX = diffX<(maxX-diffX)? isdiffX:!isdiffX; 
		return 0
	}
	if (yLen<xLen) {
		diffY = diffY <0 ? (diffY*-1):diffY;
		toY = diffY<(maxY-diffY)?!isdiffY:isdiffY; 
		return 1
	}
	return undefined;
};
