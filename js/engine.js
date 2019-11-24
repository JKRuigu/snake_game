start =()=>{
	if (!isPlaying) {
		state = timer;
		isPlay =true;
		tLeft =timer;
		document.getElementById('start').innerHTML ="STOP";	

		myTimer = setInterval(()=>{
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

			if(!isPlaying){
				clearInterval(myTimer);
			}
			// console.log("HEY!")
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
		console.log(tLeft);
		isPaused?setTimeOut(myTimer,tLeft):setTimeOut(myTimer,timer);
		timer == isPaused?tLeft:timer;
		isPlaying = true;
	}else{
		if (isPlay && isPaused){
			document.getElementById('start').innerHTML ="PLAY"
			isPlaying = true;
			isPaused = false;	
			start2();
		}
		console.log("GAME IS PLAYING!",isPaused);
		clearInterval(myTimer);
		isPaused = false;
		isPlaying =false;
	}	
}

start2 =()=>{
	start();
}

setTimeOut = (myTimer,timer)=>{
	setTimeout(()=>{
			if (!isPlay && !isPaused) {
				clearInterval(myTimer);
				isPlaying = false;
				interval =0;
				isPlay =false;
				document.getElementById('start').innerHTML ="RESTART";
			}	
	},timer);	
}