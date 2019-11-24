col2 = (x,y,colData,data,blocks)=>{
	// console.log(colData,data,blocks);
	let lenBloc =blocks.length;

	for (var i = 0; i < 3; i++) {
		if (i ==0) {
			for(i=0;i<lenBloc;i++){
				if (blocks[i].x == colData[0].x && blocks[i].y == y)
					console.log("1 A");
			}
			for (var i = 0; i < data.length; i++) {
				if(i>0)
					if (data[i].y == colData[0].x && data[i].y == colData[0].y)
						console.log("1 B");
			}
		}else if (i ==1) {
			for(i=0;i<lenBloc;i++){
				if (blocks[i].x == colData[1].x && blocks[i].y == colData[1].y)
					console.log("2 A");
			}
			for (var i = 0; i < data.length; i++) {
				if(i>0)
					if (data[i].x == colData[1].x && data[i].y == colData[1].y)
						console.log("2 B");
			}
		}else{
			for (var i = 0; i < lenBloc; i++) {
				if (blocks[i].x == colData[1].x && blocks[i].y == colData[1].y)
					console.log("3 A");
			}
			
		}
	}
}
