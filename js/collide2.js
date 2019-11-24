col2 = (x,y,colData,data,blocks)=>{
	// console.log(blocks,colData);
	let choices =[true,true,true];
	for (var i = 0; i<colData.length;i++) {
		if(i==0){
			for (var j = 0; j < blocks.length; j++) {
				if (blocks[j].x == colData[0].x && blocks[j].y == colData[0].y){
					choices[0] =false;
				}
			}
		}
		if (i==1){
			for (var l = 0; l < blocks.length; l++) {
				if (blocks[l].x == colData[1].x && blocks[l].y == colData[1].y){
					choices[1]=false;
					console.log("COL 2");
				}
			}
		}
		if (i==2) {
			for (var k = 0; k < blocks.length; k++) {
				if (blocks[k].x == colData[2].x && blocks[k].y == colData[2].y){
					choices[1]=false;
					console.log("COL 3");
				}
			}

		}
	}
	return choices;
}
