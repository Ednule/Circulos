let ww = window.screen.width;
let wh = window.screen.height-113;

const p1= {x:0, y:0};
const p2= {x:ww, y:wh};
	
const p3= {x:0, y:wh};
const p4= {x:ww, y:0};
 
const p5= {x:0, y:wh/2};
const p6= {x:ww, y:wh/2};

const p7= {x:ww/2, y:0};
const p8= {x:ww/2, y:wh};


function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background('white');
	ecuapp(p1,p2);
	ecuapp(p3,p4);
	ecuapp(p5,p6);
	cruceVertical(p7,p8);
	console.log(wh/2);
}

function ecuapp(p1,p2) {
	const dx = p2.x - p1.x;
 	const dy = p2.y - p1.y;

	const m = dy / dx;
	const b = p1.y - m * p1.x;

	point(p1.x, p1.y);

	let x = p1.x + 1;
	let y;
	while(x != p2.x) {
		y = m * x + b;
		point(x, y);
		x++;
	}
}

function cruceVertical(p1,p2) {
	const dx=p1.x;
	const dy=p1.y;

	let y= dy;

	while(y != p2.y){
		point(dx,y);
		y++;
	}

}
