start =()=>{
	if (!isPlaying) {
		state = timer;
		isPlay =true;
		tLeft =timer;
		document.getElementById('start').innerHTML ="PAUSE";	

		myTimer = setInterval(()=>{
			if (data) {
				isTreaseureFound();
			}

			var l = data.length-1;
			if (isAI) {
				let myOpt = aiType ==0? generateXY(data[0],treasure[0]):generateXY2(data[0],treasure[0]);
				// let myCol = getNext(currentMove,toX,toY);
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
		// console.log(tLeft);
		isPaused?setTimeOut(myTimer,tLeft):setTimeOut(myTimer,timer);
		timer == isPaused?tLeft:timer;
		console.log("GAME IS PLAYING!",aiType);
		isPlaying = true;
	}else{
		// isPaused = isPlay?true:false;
		if (isPlay && !isPaused){
			document.getElementById('start').innerHTML ="PLAY"
			isPlaying = true;
			isPaused = true;	
			start2();
		}
		if (isPaused) {
			
		}
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
			if (!isPaused) {
				clearInterval(myTimer);
				isPlaying = false;
				interval =0;
				isPlay =false;
				size =1;
				timer = state;
				document.getElementById('start').innerHTML ="RESTART";
			}	
	},timer);	
}