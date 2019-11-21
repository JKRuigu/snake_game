var myTimer = setInterval(()=>{
	if (data) {
		isTreaseureFound();
	}
	var l = data.length-1;

	let myOpt = generateXY(data[0],treasure[0]);
	currentMove = (myOpt == undefined ? currentMove:myOpt);
	interval++;

	// KEY INPUT
	
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

setInterval(()=>{clearInterval(myTimer)},100000);
