// Start game;
start = ()=>{
	// CHECKS IF THE GAME HAS STARTED; 
	// IF YOU CALL THE startGame() Functions multiple time it increases the speed of the game;
	if (!isPlay) {
		if (!restart) {
			timer = userTime>speed?userTime:timer;
			state = timer;
			startGame();
		}else{
			timer = state;
			interval =0;
			points = 0;
			size = 1;
			isPlay = false;
			startGame();			
		}
	}else{
		timer = state;
		interval =0;
		points = 0;
		size = 1;
		restart =true;
		isPlay = false;
		startGame();		
	}
	isPlay = true;
}
// STARTS THE GAME; 
startGame = ()=>{
	var myTimer = setInterval(()=>{
	if (data) {
		isTreaseureFound();
	}
	var l = data.length-1;
	if (isAI) {
		let myOpt = generateXY(data[0],treasure[0]);
		currentMove = (myOpt == undefined ? currentMove:myOpt);
	}
	interval++;
	displayScore(points);//Update time;
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
}
setTimeOut = (myTimer)=>{
	setTimeout(()=>{clearInterval(myTimer),document.getElementById('start').innerHTML ="RESTART"},timer);	
}