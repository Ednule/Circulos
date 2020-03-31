let ball;
let actualBall;
let ballWidth = 40;
let ballHeight = 40;
let ballNumber=0;
var balls=[];
let dx;
let dy;
let distance;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
		background('white');
		balls.forEach(function(ball){
	    	actualBall = ball;
	    	actualBall.draw();
	    	actualBall.move();
	    	balls.forEach(function(ball){
				otherBall = ball;
				/*dx = actualBall.x - otherBall.x;
				dy = actualBall.x - otherBall.x;
				distance = Math.sqrt(dx * dx + dy * dy);
				if (actualBall.getballNumber != otherBall.getballNumber) {
					if (distance < actualBall.radius + otherBall.radius) {
					    		actualBall.cambiarDireccion();
		    					otherBall.cambiarDireccion();
					}
				}*/
				if (actualBall.getballNumber != otherBall.getballNumber) {
					if ((actualBall.posX >= otherBall.posX && actualBall.posX <= otherBall.posX + (actualBall.width)) && 
					   (actualBall.posY >= otherBall.posY && actualBall.posY <= otherBall.posY + (actualBall.height))) {
	    					
	    					actualBall.cambiarDireccion();
	    					otherBall.cambiarDireccion();
	    			}
				}
			});
		});
}


function mousePressed() {
	ball = new Ball(mouseX,mouseY,getRandomColor(),50,floor(windowWidth),floor(windowHeight),ballWidth,ballHeight,ballNumber);
	balls.push(ball);
	ballNumber+=1;
}

function getRandomColor() {
  randomColor = color(random(255),random(255),random(255));
  return randomColor;
}