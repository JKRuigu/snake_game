// Keyinput
setKey = (event,status)=>{
	code = event.keyCode;
// 	arrow left 	37
// arrow up 	38
// arrow right 	39
// arrow down 	40
console.log(event.key,code);
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
			case 13:
				start();
			case 9:
				ai();
				break;
			default:
            	console.log("Invalid key");
		}
	}
}
