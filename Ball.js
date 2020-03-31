class Ball{
	
	constructor(x,y,c,d,tw,th,width,height,ballNumber) {
		this.x = x;
		this.y = y;
		this.d = d;
		this.c = c;
		this.tw = tw;
		this.th = th;
		this.width = width;
		this.height = height;
		this.ballNumber = ballNumber;
		this.speedX = 2 * this.direction();
		this.speedY = 2 * this.direction();
	}

	draw() {
		push();
		noStroke();
		fill(this.c);
		//circle(this.x, this.y, this.d)
		ellipse(this.x,this.y,this.width,this.height);
		pop();
	}

	move() {
		if (this.x <= 0) {
			this.speedX = this.speedX * -1;
		}else if (this.x >= this.tw) {
			this.speedX = this.speedX * -1;
		}

		if (this.y <= 0) {
			this.speedY = this.speedY * -1;
		}else if (this.y >= this.th) {
			this.speedY = this.speedY * -1;
		}

		this.x+= this.speedX;
		this.y+= this.speedY;
	}

	cambiarDireccion() {
		this.speedX = this.speedX * -1;
		this.speedY = this.speedY * -1;
	}

	
	direction() {
		return floor(random(2))* 2 - 1;
	}

	//getters

	get getspeedX(){
		return this.speedX;
	}

	get getspeedY(){
		return this.speedY;
	}

	get posX() {
    	return this.x;
  	}

  	get posY() {
    	return this.y;
  	}

  	get getballNumber() {
    	return this.ballNumber;
  	}

  	get color() {
    	return this.c;
  	}

  	get radius() {
    	return this.d;
  	}

}