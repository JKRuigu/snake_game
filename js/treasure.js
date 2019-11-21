// CREATE TREASURE;
createTreasure = (treasure=[])=>{
		treasure = [{"x":createRandom(),"y":createRandom(),isFound:false}]; //create treasure;
		// ctx2.fillStyle = 'rgb(255,0,13)';
		// treasure = [{"x":150,"y":70,isFound:false}]; //create treasure;
		ctx.clearRect(treasure.x,treasure.y,sizeX,sizeY); //display treasure;
		console.log("created treasure");
		return treasure;
}

treasure = createTreasure(treasure);

// CHECK IF TREASURE IS FOUND;
isTreaseureFound = ()=>{
	if (data[0].x == treasure[0].x && data[0].y == treasure[0].y && treasure[0].isFound == false ) {
		// console.log("Heck! Yeah");
		treasure[0].isFound = true;
		used = false;
		setPending();
	}
}

// set pending to true;
setPending = ()=>{
		// console.log("PENDING.......")
		pending= true;
		getReward();
}

//creates a new treasure when the current treasure is found;
getReward =()=>{
		// console.log("Mmmmmh");
		let myData2 = [{"x":treasure[0].x,"y":treasure[0].y}];
		let jk2 = [...myData2];
		data.forEach(x=>jk2.push(x))
		data =jk2;
		size++;
		displaySnake(x,y,sizeX,sizeY,jk2);

		pending=false;
		used = true;
		points +=10;
		displayScore(points);
		treasure = [{"x":createRandom(),"y":createRandom(),isFound:false}]; //create treasure;
		ctx.clearRect(treasure.x,treasure.y,sizeX,sizeY); //display treasure;

}
