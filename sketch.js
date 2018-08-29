var angle = 0.0;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background('#87ceeb');
	noStroke();
}

function mouseDragged(){
  translate(mouseX, mouseY);
	scale(mouseX / 250.0);
	rotate(angle);
	rect(-15,-15,30,30);
	var r = random(255);
	var g = random(255);
	var b = random(255);
	var t = 230;
	fill(r,g,b,t);
	ellipse(0,0,20,20);
	var r = random(255);
	var g = random(255);
	var b = random(255);
	var t = 230;
	fill(r,g,b,t);
	angle += 0.1;
}
