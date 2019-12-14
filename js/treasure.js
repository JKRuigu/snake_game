// CREATE TREASURE;
createTreasure = (treasure=[])=>{
		let isTrue =true;
		let dataLen = data.length;
		// console.log(data);
		let blocks =gameLevels[currentLevel][0].blocks;
		let blocksLen = gameLevels[currentLevel][0].blocks.length;
		while(isTrue){
			treasure = [{"x":createRandom(),"y":createRandom(),isFound:false}]; //create treasure;
			let num =0;
			for (var i = 0; i < dataLen; i++) {
				if (data[i].x == treasure[0].x || data[i].y == treasure[0].y) {
					num++;
				}
			}
			for (var i = 0; i < blocksLen; i++) {
				if (blocks[i].x == treasure[0].x || blocks[i].y == treasure[0].y) {
					num++;
				}
			}
			if (num == 0) {
				isTrue = false;				
			}else{
				isTrue == true;
			}
		}
		
		displayTreasure(treasure);
		
		return treasure;
}

// CHECK IF TREASURE IS FOUND;
isTreaseureFound = ()=>{
	if (data[0].x == treasure[0].x && data[0].y == treasure[0].y && treasure[0].isFound == false ) {
		treasure[0].isFound = true;
		used = false;
		setPending();
	}
}

// set pending to true;
setPending = ()=>{
		pending= true;
		getReward();
}

//creates a new treasure when the current treasure is found;
getReward =()=>{
		let myData2 = [{"x":treasure[0].x,"y":treasure[0].y}];
		let jk2 = [...myData2];
		data.forEach(x=>jk2.push(x))
		// console.log(data,treasure,size);
		data =jk2;
		size++;
		// console.log(data,size);
		displaySnake(x,y,sizeX,sizeY,jk2);

		pending=false;
		points +=10;
		displayScore(points);

		treasure = createTreasure([]); //create treasure;
		if (background ==0) {
			ctx.drawImage(img, 200,200,50,50,treasure.x,treasure.y,sizeX,sizeY);
		}else{
			ctx.clearRect(treasure.x,treasure.y,sizeX,sizeY);
		}
}