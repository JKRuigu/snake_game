// ALGORTHM TO GET THE SHORTEST PATH; 46% accuracy;
generateXY = (from,to)=>{
	let diffX = from.x-to.x;
	let isdiffX = ((diffX<1)? true:false);//TRUE - RIGHT FALSE - LEFT;

	let diffY = from.y-to.y;
	let isdiffY = ((diffY<1)?true:false);// TRUE - DOWNWARDS FALSE - UPWARDS; 

	solveX = ()=>{
		diffX = (diffX<1)?(diffX*-1):diffX;
		console.log(from.x,to.x,diffX,(390-diffX),isdiffX);
		if (diffX<(390-diffX)) {
			toX = isdiffX;
			return 0;
		}else{
			toX = !isdiffX;
			return 0;
		}
	}
	solveY = ()=>{
		diffY = (diffY<1)?(diffY*-1):diffY;
		console.log(from.y,to.y,diffY,(390-diffY),isdiffY);
		// console.log(diffY,(340-diffY),isdiffX,toY);
		if (diffY<(390-diffY)) {
			toY = !isdiffY;
			return 1;
		}else{
			toY = isdiffY;
			return 1;
		}
	}


	// console.log(diffX,isdiffX,diffY,isdiffY,toX,toY,currentMove);
	// SOLVE FOR ZERO X;
	if (diffX == 0 && diffY !=0) {
		console.log("A")
		return solveY();
	}
	// SOLVE FOR ZERO Y;
	if (diffY == 0 && diffX !=0) {
		console.log("B")
		return solveX();
	}
	// SOLVE FOR X; 
	if (diffX<diffY && diffX !=0 && diffY !=0) {
		console.log("C")
		return solveX();
	}
	// SOLVE FOR Y;
	if(diffY<diffX && diffX !=0 && diffY !=0){
		console.log("D")
		return solveY();
	}

	return undefined;
};
