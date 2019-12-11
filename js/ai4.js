// ALGORTHIM TO AVOID COLLITION;
generateXY4 = (from,to)=>{
	numMove++;
	// console.log(numMove,(points/numMove));
	let diffX = from.x-to.x;
	let isdiffX = ((diffX<1)? true:false);//TRUE - RIGHT FALSE - LEFT;

	let diffY = from.y-to.y;
	let isdiffY = ((diffY<1)?true:false);// TRUE - DOWNWARDS FALSE - UPWARDS; 

	solveX = ()=>{
		diffX = (diffX<1)?(diffX*-1):diffX;
		//FIND SHORTCUT;
		if (diffX<(maxX-diffX)) {
			if (colideBodyX()) {
				return solveY();
			}
			toX = isdiffX;
			return 0;
		}else{
			toX = !isdiffX;
			return 0;
		}
	}
	solveY = ()=>{
		diffY = (diffY<1)?(diffY*-1):diffY;
		//FIND SHORTCUT;
		if (diffY<(maxY-diffY)) {			
			if (colideBodyY()) {
				return solveX();
			}
			toY = !isdiffY;
			return 1;
		}else{
			toY = isdiffY;
			return 1;
		}
	}

	// SOLVE FOR ZERO X;
	if (diffX == 0 && diffY !=0) {
		return solveY();
	}
	// SOLVE FOR ZERO Y;
	if (diffY == 0 && diffX !=0) {
		return solveX();
	}
	// SOLVE FOR X; 
	if (diffX<diffY && diffX !=0 && diffY !=0) {
		return solveX();
	}
	// SOLVE FOR Y;
	if(diffY<diffX && diffX !=0 && diffY !=0){
		return solveY();
	}

	return undefined;
};
