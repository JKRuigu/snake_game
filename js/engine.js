start =()=>{
	if (!isPlaying) {
		state = timer;
		isPlay =true;
		tLeft =timer;
		isLost = false;
		document.getElementById('start').innerHTML ="PAUSE";	
		!isDivided?divideBlocks():"";
		myTimer = setInterval(()=>{
			getZone();
		console.log(zone);
			let path = col2(x,y,getNext(),data,getBlocks(zone));
		
			if (data) {
				isTreaseureFound();
			}

			var l = data.length-1;
			if (isAI) {
				let myOpt = aiType == 0? generateXY(data[0],treasure[0]): aiType ==1?generateXY2(data[0],treasure[0]):generateXY3(data[0],treasure[0],path);
				currentMove = (myOpt == undefined ? currentMove:myOpt);
			}

			isOver = col(myTimer,currentMove,blocks,data)
			if(isOver){
				clearInterval(myTimer);
				displayMessage("LOST");
				document.getElementById('start').innerHTML ="RESTART";
			}

			if (size ==target) {
				isPaused = false;
				isPlaying =false;
				points =0;
				isLost = true;
				clearInterval(myTimer);
				displayMessage("WON");
				document.getElementById('start').innerHTML ="RESTART";	
			}
			interval++;
			interval2=interval+1;
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

		isPaused?setTimeOut(myTimer,tLeft):setTimeOut(myTimer,timer);
		timer == isPaused?tLeft:timer;
		isPlaying = true;
	}else{
		// isPaused = isPlay?true:false;
		if (isPlay && !isPaused){
			document.getElementById('start').innerHTML ="PLAY"
			isPlaying = true;
			isPaused = true;
			isLost = false;	
			start2();
		}

		clearInterval(myTimer);
		isPaused = false;
		isPlaying =false;
		isLost = false;
		points =0;
	}	
}

start2 =()=>{
	start();
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
				timer = state;
				points =0;
				document.getElementById('start').innerHTML ="RESTART";
			}	
	},timer);	
}