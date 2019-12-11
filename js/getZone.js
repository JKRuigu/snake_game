function getZone() {
	zone = getZones(x)+""+getZones(y);
}
function getZones(axis) {
	// console.log(axis);
	if (axis<80) {
		return "A";
	}else if(axis<160){
		return "B";
	}else if(axis<200){
		return "C";
	}else if(axis<240){
		return "D";
	}else if(axis<280){
		return "F";
	}else if(axis<320){
		return "E";
	}else if(axis<360){
		return "G";
	}else if(axis<400){
		return "H";
	}else if(axis<=430){
		return "I";
	}
}

function divideBlocks() {
	console.log("divideBlocks");
	for (var i = 0; i < blocks.length; i++) {
		getvaluesX(blocks[i].x,blocks[i].y);		
	}

	// console.log("blocksAA",blocksAA,"blocksAB",blocksAB,"blocksAC",blocksAC,"blocksAD",blocksAD,"blocksAE",blocksAE,"blocksAF",blocksAF,"blocksAG",blocksAG,"blocksAH",blocksAH,"blocksAI",blocksAI,"blocksBA",blocksBA,"blocksBB",blocksBB,"blocksBC",blocksBC,"blocksBD",blocksBD,"blocksBE",blocksBE,"blocksBF",blocksBF,"blocksBG",blocksBG,"blocksBH",blocksBH,"blocksBI",blocksBI,"blocksCA",blocksCA,"blocksCB",blocksCB,"blocksCC",blocksCC,"blocksCD",blocksCD,"blocksCE",blocksCE,"blocksCF",blocksCF,"blocksCG",blocksCG,"blocksCH",blocksCH,"blocksCI",blocksCI,"blocksDA",blocksDA,"blocksDB",blocksDB,"blocksDC",blocksDC,"blocksDD",blocksDD,"blocksDE",blocksDE,"blocksDF",blocksDF,"blocksDG",blocksDG,"blocksDH",blocksDH,"blocksDI",blocksDI,"blocksEA",blocksEA,"blocksEB",blocksEB,"blocksEC",blocksEC,"blocksED",blocksED,"blocksEE",blocksEE,"blocksEF",blocksEF,"blocksEG",blocksEG,"blocksEH",blocksEH,"blocksEI",blocksEI,"blocksFA",blocksFA,"blocksFB",blocksFB,"blocksFC",blocksFC,"blocksFD",blocksFD,"blocksFE",blocksFE,"blocksFF",blocksFF,"blocksFG",blocksFG,"blocksFH",blocksFH,"blocksFI",blocksFI,"blocksEA",blocksEA,"blocksEB",blocksEB,"blocksEC",blocksEC,"blocksED",blocksED,"blocksEE",blocksEE,"blocksEF",blocksEF,"blocksEG",blocksEG,"blocksEH",blocksEH,"blocksEI",blocksEI,"blocksFA",blocksFA,"blocksFB",blocksFB,"blocksFC",blocksFC,"blocksFD",blocksFD,"blocksFE",blocksFE,"blocksFF",blocksFF,"blocksFG",blocksFG,"blocksFH",blocksFH,"blocksFI",blocksFI,"blocksGA",blocksGA,"blocksGB",blocksGB,"blocksGC",blocksGC,"blocksGD",blocksGD,"blocksGE",blocksGE,"blocksGF",blocksGF,"blocksGG",blocksGG,"blocksGH",blocksGH,"blocksGI",blocksGI,"blocksHA",blocksHA,"blocksHB",blocksHB,"blocksHC",blocksHC,"blocksHD",blocksHD,"blocksHE",blocksHE,"blocksHF",blocksHF,"blocksHG",blocksHG,"blocksHH",blocksHH,"blocksHI",blocksHI,"blocksIA",blocksIA,"blocksIB",blocksIB,"blocksIC",blocksIC,"blocksID",blocksID,"blocksIE",blocksIE,"blocksIF",blocksIF,"blocksIG",blocksIG,"blocksIH",blocksIH,"blocksII",blocksII);
	Divided =true;
}

function getvaluesX(x,y) {
	if (x<80) {
		getvaluesY("A",x,y);	
	}else if(x<160){
		getvaluesY("B",x,y);
	}else if(x<200){
		getvaluesY("C",x,y);	
	}else if(x<240){
		getvaluesY("D",x,y);	
	}else if(x<280){
		getvaluesY("E",x,y);	
	}else if(x<320){
		getvaluesY("F",x,y);	
	}else if(x<360){
		getvaluesY("G",x,y);	
	}else if(x<400){
		getvaluesY("H",x,y);	
	}else if(x<=430){
		getvaluesY("I",x,y);	
	}
}

function getvaluesY(letter,x,y) {
	if (y<80) {
		letter == "A"?blocksAA.push({x,y}):letter == "B"?blocksAB.push({x,y}):letter == "C"?blocksAC.push({x,y}):letter == "D"?blocksAD.push({x,y}):letter == "E"?blocksAE.push({x,y}):letter == "F"?blocksAF.push({x,y}):letter == "G"?blocksAG.push({x,y}):letter == "H"?blocksAH.push({x,y}):blocksAI.push({x,y});	
	}else if(y<160){
		letter == "A"?blocksBA.push({x,y}):letter == "B"?blocksBB.push({x,y}):letter == "C"?blocksBC.push({x,y}):letter == "D"?blocksBD.push({x,y}):letter == "E"?blocksBE.push({x,y}):letter == "F"?blocksBF.push({x,y}):letter == "G"?blocksBG.push({x,y}):letter == "H"?blocksBH.push({x,y}):blocksBI.push({x,y});	
	}else if(y<200){
		letter == "A"?blocksCA.push({x,y}):letter == "B"?blocksCB.push({x,y}):letter == "C"?blocksCC.push({x,y}):letter == "D"?blocksCD.push({x,y}):letter == "E"?blocksCE.push({x,y}):letter == "F"?blocksCF.push({x,y}):letter == "G"?blocksCG.push({x,y}):letter == "H"?blocksCH.push({x,y}):blocksCI.push({x,y});	
	}else if(y<240){divideBlocksdivideBlocks
		letter == "A"?blocksDA.push({x,y}):letter == "B"?blocksDB.push({x,y}):letter == "C"?blocksDC.push({x,y}):letter == "D"?blocksDD.push({x,y}):letter == "E"?blocksDE.push({x,y}):letter == "F"?blocksDF.push({x,y}):letter == "G"?blocksDG.push({x,y}):letter == "H"?blocksDH.push({x,y}):blocksDI.push({x,y});	
	}else if(y<280){
		letter == "A"?blocksEA.push({x,y}):letter == "B"?blocksEB.push({x,y}):letter == "C"?blocksEC.push({x,y}):letter == "E"?blocksED.push({x,y}):letter == "E"?blocksEE.push({x,y}):letter == "F"?blocksEF.push({x,y}):letter == "G"?blocksEG.push({x,y}):letter == "H"?blocksEH.push({x,y}):blocksEI.push({x,y});		
	}else if(y<320){
		letter == "A"?blocksFA.push({x,y}):letter == "B"?blocksFB.push({x,y}):letter == "C"?blocksFC.push({x,y}):letter == "D"?blocksFD.push({x,y}):letter == "E"?blocksFE.push({x,y}):letter == "F"?blocksFF.push({x,y}):letter == "G"?blocksFG.push({x,y}):letter == "H"?blocksFH.push({x,y}):blocksFI.push({x,y});	
	}else if(y<360){	
		letter == "A"?blocksGA.push({x,y}):letter == "B"?blocksGB.push({x,y}):letter == "C"?blocksGC.push({x,y}):letter == "D"?blocksGD.push({x,y}):letter == "E"?blocksGE.push({x,y}):letter == "F"?blocksGF.push({x,y}):letter == "G"?blocksGG.push({x,y}):letter == "H"?blocksGH.push({x,y}):blocksGI.push({x,y});	
	}else if(y<400){
		letter == "A"?blocksHA.push({x,y}):letter == "B"?blocksHB.push({x,y}):letter == "C"?blocksHC.push({x,y}):letter == "D"?blocksHD.push({x,y}):letter == "E"?blocksHE.push({x,y}):letter == "F"?blocksHF.push({x,y}):letter == "G"?blocksHG.push({x,y}):letter == "H"?blocksHH.push({x,y}):blocksHI.push({x,y});	
	}else if(y<=430){
		letter == "A"?blocksIA.push({x,y}):letter == "B"?blocksIB.push({x,y}):letter == "C"?blocksIC.push({x,y}):letter == "D"?blocksID.push({x,y}):letter == "E"?blocksIE.push({x,y}):letter == "F"?blocksIF.push({x,y}):letter == "G"?blocksIG.push({x,y}):letter == "H"?blocksIH.push({x,y}):blocksII.push({x,y});	
	}
}

function getBlocks(zone) {
	var blks;
	switch(zone){
		case "AA":
			blks = blocksAA;
			break;
		case "AB":
			blks = blocksAB;
			break;
		case "AC":
			blks = blocksAC;
			break;
		case "AD":
			blks = blocksAD;
			break;
		case "AE":
			blks = blocksAE;
			break;
		case "AF":
			blks = blocksAF;
			break;
		case "AG":
			blks = blocksAG;
			break;
		case "AH":
			blks = blocksAH;
			break;
		case "AI":
			blks = blocksAI;
			break;
		case "BA":
			blks = blocksBA;
			break;
		case "BB":
			blks = blocksBB;
			break;
		case "BC":
			blks = blocksBC;
			break;
		case "BD":
			blks = blocksBD;
			break;
		case "BE":
			blks = blocksBE;
			break;
		case "BF":
			blks = blocksBF;
			break;
		case "BG":
			blks = blocksBG;
			break;
		case "BH":
			blks = blocksBH;
			break;
		case "BI":
			blks = blocksBI;
			break;
		case "CA":
			blks = blocksCA;
			break;
		case "CB":
			blks = blocksCB;
			break;
		case "CC":
			blks = blocksCC;
			break;
		case "CD":
			blks = blocksCD;
			break;
		case "CE":
			blks = blocksCE;
			break;
		case "CF":
			blks = blocksCF;
			break;
		case "CG":
			blks = blocksCG;
			break;
		case "CH":
			blks = blocksCH;
			break;
		case "CI":
			blks = blocksCI;
			break;
		case "DA":
			blks = blocksDA;
			break;
		case "DB":
			blks = blocksDB;
			break;
		case "DC":
			blks = blocksDC;
			break;
		case "DD":
			blks = blocksDD;
			break;
		case "DE":
			blks = blocksDE;
			break;
		case "DF":
			blks = blocksDF;
			break;
		case "DG":
			blks = blocksDG;
			break;
		case "DH":
			blks = blocksDH;
			break;
		case "DI":
			blks = blocksDI;
			break;
		case "EA":
			blks = blocksEA;
			break;
		case "EB":
			blks = blocksEB;
			break;
		case "EC":
			blks = blocksEC;
			break;
		case "ED":
			blks = blocksED;
			break;
		case "EE":
			blks = blocksEE;
			break;
		case "EF":
			blks = blocksEF;
			break;
		case "EG":
			blks = blocksEG;
			break;
		case "EH":
			blks = blocksEH;
			break;
		case "EI":
			blks = blocksEI;
			break;
		case "FA":
			blks = blocksFA;
			break;
		case "FB":
			blks = blocksFB;
			break;
		case "FC":
			blks = blocksFC;
			break;
		case "FD":
			blks = blocksFD;
			break;
		case "FE":
			blks = blocksFE;
			break;
		case "FF":
			blks = blocksFF;
			break;
		case "FG":
			blks = blocksFG;
			break;
		case "FH":
			blks = blocksFH;
			break;
		case "FI":
			blks = blocksFI;
			break;
		case "GA":
			blks = blocksGA;
			break;
		case "GB":
			blks = blocksGB;
			break;
		case "GC":
			blks = blocksGC;
			break;
		case "GD":
			blks = blocksGD;
			break;
		case "GE":
			blks = blocksGE;
			break;
		case "GF":
			blks = blocksGF;
			break;
		case "GG":
			blks = blocksGG;
			break;
		case "GH":
			blks = blocksGH;
			break;
		case "GI":
			blks = blocksGI;
			break;
		case "HA":
			blks = blocksHA;
			break;
		case "HB":
			blks = blocksHB;
			break;
		case "HC":
			blks = blocksHC;
			break;
		case "HD":
			blks = blocksHD;
			break;
		case "HE":
			blks = blocksHE;
			break;
		case "HF":
			blks = blocksHF;
			break;
		case "HG":
			blks = blocksHG;
			break;
		case "HH":
			blks = blocksHH;
			break;
		case "HI":
			blks = blocksHI;
			break;
		case "IA":
			blks = blocksIA;
			break;
		case "IB":
			blks = blocksIB;
			break;
		case "IC":
			blks = blocksIC;
			break;
		case "ID":
			blks = blocksID;
			break;
		case "IE":
			blks = blocksIE;
			break;
		case "IF":
			blks = blocksIF;
			break;
		case "IG":
			blks = blocksIG;
			break;
		case "IH":
			blks = blocksIH;
			break;
		case "II":
			blks = blocksII;
			break;
	}
	console.log(blks,zone);
	// if (zone == "AA") {
	// 	blks = blocksAA;
	// }else if(zone == "B"){
	// 	blks = blocksB;
	// }else if(zone == "C"){
	// 	blks = blocksC;
	// }else if(zone == "D"){
	// 	blks = blocksD;
	// }else if(zone == "E"){
	// 	blks = blocksF;
	// }else if(zone == "F"){
	// 	blks = blocksE;
	// }else if(zone == "G"){
	// 	blks = blocksG;
	// }else if(zone == "H"){
	// 	blks = blocksH;
	// }else if(zone == "I"){
	// 	blks = blocksI;
	// }
	return blks;
}