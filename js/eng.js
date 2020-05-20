// Start game;
start = () =>{
	// CHECKS IF THE GAME HAS STARTED; 
	// IF YOU CALL THE startGame() Functions multiple time it increases the speed of the game;
	if (isPlaying == false) {
		interval =0;
		points = 0;
		size = 1;
		if (isOver) {
			displayBlocks();
			createSnake();
			startGame();
		}else{
			if (!isPlaying && isPlay && !restart) {
				timer = userTime>speed?userTime:timer;
				state = timer;
				isPlaying = true;
				isPlay = true;				
				displayBlocks();
				startGame();
			}
			if (!isPlaying && isPlay && restart) {				
				isPlay = true;
				isPlaying = true;
				displayBlocks();
				startGame();	
			}
			if (!isOver && !restart && !isPlay) {
				timer =userTime>speed?userTime:timer;				
				isPlaying = true;
				isPlay = true;
				displayBlocks();
				startGame();		
			}
		}
	}else{
		interval =0;		
		points = 0;
		size = 1;
		timer = state;
		isPlaying =false;
		startGame();
	}	
}


// STARTS THE GAME; 
startGame = ()=>{
	if (isPlaying) {
		myTimer = setInterval(()=>{
		if (col(myTimer,currentMove)) {
		console.log(blocks,data[0]);
			// ctx.font= 'Bold 30px Sans-Serif';
			console.log("msg");
			ctx.clearRect(200,200,200,200);
			ctx.clearRect(50,50,50,50);
			// ctx.strokeText("msg", 200, 200);//displays the game title;
			clearInterval(myTimer);
			isOver =true;
			ctx.fillRect(100,100,200,70);
			dispayMessage("GAME OVER!")
		}
		if (data) {
			isTreaseureFound();
		}
		var l = data.length-1;
		if (isAI) {
			let myOpt = generateXY(data[0],treasure[0]);
			let myCol = getNext(currentMove,toX,toY);
			// isOver = col(myTimer,currentMove);
			currentMove = (myOpt == undefined ? currentMove:myOpt);
		}
		if (isOver) {
			document.getElementById('start').innerHTML ="RESTART";
			dispayMessage("GAME OVER!");
			timer = state;
			restart = true;
			isPlaying = false;
			isPlay =true;
			clearInterval(myTimer);
		}
		if(!isPlaying){
			clearInterval(myTimer);
		}
		interval++;
		displayScore(points,moves);//Update time;

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
		},speed);

		setTimeOut(myTimer);
	}else{
		clearInterval(myTimer);
	}
}
setTimeOut = (myTimer)=>{
	setTimeout(()=>{
		if (!isOver) {
			clearInterval(myTimer);
			isPlaying = false;
			document.getElementById('start').innerHTML ="RESTART"	
		}
	},timer);	
}