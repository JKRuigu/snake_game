// Keyinput
setKey = (event,status,isPlaying)=>{
	code = event.keyCode;
// 	arrow left 	37
// arrow up 	38
// arrow right 	39
// arrow down 	40
	if (status) {
		switch(code){
			case 37:
				move(0,false);
				break;
			case 38:
				move(1,true);
				break;
			case 39:
				move(0,true);
				break;
			case 40:
				move(1,false);
				break;
			case 32:
				start2();
				break;
			case 27:
				start2();
				break;
			case 67:
				selectTypeAiKeyBoard(true);
				break;
			case 83:
				selectTypeAiKeyBoard(false);
				break;
			case 13:
				start2();
				break;
			case 9:
				ai();
				break;
			case 76:
				gameLevel();
				break;				
			default:
            	console.log("Invalid key");
		}
	}
}
