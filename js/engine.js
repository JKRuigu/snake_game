console.log("HELLO",isPlay);
// Start game;
start = ()=>{
	// CHECKS IF THE GAME HAS STARTED; 
	// IF YOU CALL THE startGame() Functions multiple time it increases the speed of the game;
	if (!isPlay) {
		startGame();
	}else{
		stopGame();
		// isPlay = true;
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

	let myOpt = generateXY(data[0],treasure[0]);
	currentMove = (myOpt == undefined ? currentMove:myOpt);
	interval++;

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
	},100);
	setTimeOut(myTimer,10000);
	// getTimer = 
	function getTimer() {
		return myTimer;
	}
}
setTimeOut = (myTimer,period)=>{
	// if (isPlay) {
		setInterval(()=>{clearInterval(myTimer)},period);	
	// }
}