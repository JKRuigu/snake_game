reset = bool =>{
	console.log("RESET");
	// if (true) {}
	isPaused = false;
	isPlaying = false;
	isPlay = false;
	interval =0;
	size =1;			
	points =0;
	isOver =false;
	isLost = false;
	if (!bool) {
		let temp =  currentLevel +1;
		currentLevel =  currentLevel==tLevels?currentLevel =0:temp;
		let l =currentLevel+1;

		document.getElementById("Level").innerHTML = `LEVEL ${l}`;			
	}

    localStorage.level = Number(currentLevel);
	changeBackground(gameLevels[currentLevel][0].background,data,sizeX,sizeY);
	displayBlocks();
	displayTreasure(treasure);
	document.getElementById('start').innerHTML = `PLAY`;
	tLeft = gameLevels[currentLevel][0].timer;
	console.log(data);
	data= [{"x":createRandom(),"y":createRandom()}];
	console.log(data);
	displaySnake(data[0].x,data[0].y,sizeX,sizeY,data);
}

start =()=>{
	if (isOver) {
		reset(isLost);
	}
	if (!isPlay) {
		document.getElementById('start').innerHTML ="PAUSE";
		console.log("START");
		tLeft= (tLeft<=0)?gameLevels[currentLevel][0].timer:tLeft;
		isPlay = true;
		isPlaying = true;

		Time = setInterval(()=>{
			getZone();
			let path = col2(x,y,getNext(),data,gameLevels[currentLevel][0].blocks);
		
			data?isTreaseureFound():"";


			var l = data.length-1;
			if (isAI) {
				let myOpt = aiType == 0? generateXY(data[0],treasure[0]): aiType ==1?generateXY2(data[0],treasure[0]): aiType ==3?generateXY3(data[0],treasure[0],path):generateXY4(data[0],treasure[0],path);
				currentMove = (myOpt == undefined ? currentMove:myOpt);
			}

			isOver = col(myTimer,currentMove,gameLevels[currentLevel][0].blocks,data);

			if(isOver || isLost){
				clearInterval(Time);
				displayMessage("LOST");
				isLost = true;
				document.getElementById('start').innerHTML ="RESTART";
				tLeft = gameLevels[currentLevel][0].timer;
			}

			if (size-1 == gameLevels[currentLevel][0].target) {
				clearInterval(Time);
				document.getElementById('start').innerHTML ="NEXT";
				displayMessage("WON");
				localStorage.level = Number(currentLevel)+1;
				localStorage.maxLevel = Number(localStorage.level) > Number(localStorage.maxLevel)?Number(localStorage.level):Number(localStorage.maxLevel)
				isOver = true;
			}
			if (!isOver || !isLost) {
				interval++;			
				displayScore(points,moves);//Update time;				
			}

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

		},gameLevels[currentLevel][0].speed);
	}else{
		if (isPaused) {
			console.log("UNPAUSE");
			isPaused = false;
			isPlay =false;
			start();
			isPlaying = true;
		}else{
			console.log("PAUSE",tLeft);
			clearInterval(Time);
			isPaused = true;
			isPlaying = false;
			document.getElementById('start').innerHTML ="RESUME";
		}
	}	
}

start2 =()=>{
	start();
	count++;
}

setTimeOut = (myTimer,timer)=>{
	setTimeout(()=>{
			if (!isPaused && !isLost) {
				displayMessage("LOST");
				clearInterval(myTimer);
				isPlaying = false;
				interval =0;
				isPlay =false;
				size =1;
				timer = gameLevels[currentLevel][0].timer;
				points =0;
				document.getElementById('start').innerHTML ="RESTART";
			}	
	},timer);	
}