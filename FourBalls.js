//copy paste the code to run online : https://openprocessing.org/sketch/create

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}
 var x=1;
function draw() {
	ellipse(x,windowHeight/5, 20, 20);
	ellipse(x*2,2*windowHeight/5, 20, 20);
	ellipse(x*3,3*windowHeight/5, 20, 20);
	ellipse(x*4,4*windowHeight/5, 20, 20);
	x++;
}

