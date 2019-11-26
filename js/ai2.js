// ALGORTHM TO GET THE SHORTEST PATH; 46% accuracy;
generateXY2 = (from,to,path)=>{
	numMove++;
	// console.log(path,currentMove);

	let diffX = from.x-to.x;
	let isdiffX = ((diffX<1)? true:false);//TRUE - RIGHT FALSE - LEFT;

	let diffY = from.y-to.y;
	let isdiffY = ((diffY<1)?true:false);// TRUE - DOWNWARDS FALSE - UPWARDS; 

	solveX = ()=>{
		diffX = (diffX<1)?(diffX*-1):diffX;
		//FIND SHORTCUT;
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
		//FIND SHORTCUT;
		if (diffY<(390-diffY)) {
			toY = !isdiffY;
			return 1;
		}else{
			toY = isdiffY;
			return 1;
		}
	}


	if (path[0] && path[1] && path[2]) {
		// console.log("YES!",diffX,diffY);
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
	}

	if (path[0] && path[1] && !path[0]) {
		console.log("1");
		if (currentMove == 0) {
			return solveX();
		}
		if (currentMove == 1) {
			return solveX();
		}
	}
	
	if (path[0] && !path[1] && path[0]) {
		console.log("1B");
		if (currentMove == 0 && toX) {
			toY == false;
			return 0;
		}
		if (currentMove == 0 && !toX) {
			toY == false;
			return 0;
		}
		// if (currentMove == 1 && toY) {
		// 	toX = false;			
		// 	return 0;
		// }
		// if (currentMove == 1 && !toY) {
		// 	toX = false;			
		// 	return 0;
		// }
	}

	if (!path[0] && !path[1] && path[0]) {
		console.log("2");
		if (currentMove == 0) {
			toY =false;
			return 1;
		}

		if (currentMove == 1) {
			toX = false;
			return 0;
		}
	}

	if (path[0] && !path[1] && !path[0]) {
		console.log("3");
		if (currentMove == 0) {
			return solveX();
		}
		if (currentMove ==1) {
			return solveY();
		}
	}
	
	if (!path[0] && path[1] && path[0]) {
		console.log("4");
		if (currentMove ==0) {
			return solveY();
		}
		if (currentMove ==1) {
			return solveX();
		}
	}

	if (!path[0] && path[1] && !path[0]) {
		console.log("5");
		if (currentMove == 0) {
			toY = true;
			return 1; 
		}
		if (currentMove ==1) {
			toX == true;
			return 0;
		}
	}

	if (!path[0] && !path[1] && path[0]) {
		console.log("6");
		if (currentMove ==0) {
			toY = false;
			return 1;
		}
		if (currentMove ==1) {
			toX = true;
			return 0;
		}
	}
	if (!path[0] && !path[1] && !path[0]) {
		console.log("NO MOVES!")
	}
	return undefined;
};
