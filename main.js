class Character{
   constructor(health, power) { 
		this.health = health;
		this.power = power;
	}

	intialize(){
		this.health = 100;
		this.power = 10;
		this.showState();
	}

	manageHealth(h,type){
		type ? this.health +=h :this.health -=h;
	}

	managePower(p,type){
		type ? this.power +=p : this.power -=p;
	}

	showState(){
		console.log(`Health: ${this.health} Power: ${this.power}`);
	}
}

var mario = new Character();
mario.intialize();

function manage(value,bool){
	if (value != 0) {
		mario.manageHealth(value,bool);
	}
}

addHealth = ()=>{
	var num = Math.ceil(Math.random()*4);
	var isTrue = Math.ceil(Math.random()*4) > 2.5? true:false;

	if (num != 0) {
		switch(num){
			case 3:
				manage(isTrue? 30:-30,isTrue);
			break;
			case 2:
				manage(isTrue? 20:-20,isTrue);
			break;
			case 1:
				manage(isTrue? 10:-10,isTrue);
			break;
			default:
				manage(isTrue? 0:0,isTrue);
		}
	}	
}

addHealth();

mario.showState();