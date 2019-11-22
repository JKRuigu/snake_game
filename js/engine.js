// Start game;
start = ()=>{
	// CHECKS IF THE GAME HAS STARTED; 
	// IF YOU CALL THE startGame() Functions multiple time it increases the speed of the game;
	if (!isPlay) {
		timer = userTime>speed?userTime:timer;
		startGame();
		if (isAI) {
			document.getElementById('start').innerHTML ="START";
		}else{
			document.getElementById('start').innerHTML ="STOP";		
		}
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
	console.log(userTime);
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