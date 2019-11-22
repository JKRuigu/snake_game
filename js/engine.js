// Start game;
start = ()=>{
	// CHECKS IF THE GAME HAS STARTED; 
	// IF YOU CALL THE startGame() Functions multiple time it increases the speed of the game;
	if (!isPlay) {
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

	// console.log("HELLO")
	let dx =new Date()*1;
	setTimeout(()=>{clearInterval(myTimer),console.log("STOP",(new Date()*1)-dx)},timer);	
	// setTimeOut(myTimer);
}
setTimeOut = (myTimer)=>{
	console.log(timer);
}