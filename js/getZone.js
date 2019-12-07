function getZone() {
	if (y<80) {
		zone ="A";
	}else if(y<160){
		zone ="B";
	}else if(y<200){
		zone ="C";
	}else if(y<240){
		zone ="D";
	}else if(y<280){
		zone ="F";
	}else if(y<320){
		zone ="E";
	}else if(y<360){
		zone ="G";
	}else if(y<400){
		zone ="H";
	}else if(y<=430){
		zone ="I";
	}
}
function divideBlocks() {
	console.log("divideBlocks");
	for (var i = 0; i < blocks.length; i++) {
		if (blocks[i].y<80) {
			blocksA.push(blocks[i]);	
		}else if(blocks[i].y<160){
			blocksB.push(blocks[i]);	
		}else if(blocks[i].y<200){
			blocksC.push(blocks[i]);	
		}else if(blocks[i].y<240){divideBlocksdivideBlocks
			blocksD.push(blocks[i]);	
		}else if(blocks[i].y<280){
			blocksE.push(blocks[i]);	
		}else if(blocks[i].y<320){
			blocksF.push(blocks[i]);	
		}else if(blocks[i].y<360){
			blocksG.push(blocks[i]);	
		}else if(blocks[i].y<400){
			blocksH.push(blocks[i]);	
		}else if(blocks[i].y<=430){
			blocksI.push(blocks[i]);	
		}	
	}
	// console.log(blocksA);
	isDivided =true;
}

function getBlocks(zone) {
	var blks;

	if (zone == "A") {
		blks = blocksA;
	}else if(zone == "B"){
		blks = blocksB;
	}else if(zone == "C"){
		blks = blocksC;
	}else if(zone == "D"){
		blks = blocksD;
	}else if(zone == "E"){
		blks = blocksF;
	}else if(zone == "F"){
		blks = blocksE;
	}else if(zone == "G"){
		blks = blocksG;
	}else if(zone == "H"){
		blks = blocksH;
	}else if(zone == "I"){
		blks = blocksI;
	}
	return blks;
}