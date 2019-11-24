// CREATE TREASURE;
createTreasure = (treasure=[])=>{
		treasure = [{"x":createRandom(),"y":createRandom(),isFound:false}]; //create treasure;
		// console.log(treasure);
		ctx.clearRect(treasure[0].x,treasure[0].y,sizeX,sizeY);
		// ctx.drawImage(img, 100,580,100,400,treasure[0].x,treasure[0].y,sizeX,sizeY);
		// console.log("created treasure!");
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
		ctx.clearRect(treasure.x,treasure.y,sizeX,sizeY); //display treasure;

}