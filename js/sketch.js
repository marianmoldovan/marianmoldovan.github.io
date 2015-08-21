var fontRegular, fontMedium, fontLight, fontBold;
var normalColor = -1;

function preload() {
   fontRegular = loadFont("assets/Roboto-Regular.ttf");
   fontMedium = loadFont("assets/Roboto-Medium.ttf");
   fontLight = loadFont("assets/Roboto-Light.ttf");
   fontBold = loadFont("assets/Roboto-Bold.ttf");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(0);
	textSize(16);
}

function draw() {
	if(normalColor == -1) setColorValue(mouseY/windowHeight * 255);
	else setColorValue(normalColor);

	textFont(fontMedium);
	text('Hello World. my name is Marian C. Moldovan.', 25, 25, windowWidth - 50, windowHeight);
}

function setColorValue(colorValue){
	background(colorValue);
	fill(255 - colorValue);
	stroke(200 - colorValue);
}


function deviceMoved() {   
	console.log(accelerationY);
	var a = map(accelerationX, 0, 90, 0, 255);
    normalColor = a ;

}