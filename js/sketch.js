var fontMedium, fontLight, fontBold;
var normalColor = -1;

var imgs = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg'];
var loadedImgs = [];
var profileImg;

var texts = [
	'Hi!, I\'m Marian C. Moldovan.',
	'Madrid. Research Engineer @ BEEVA. I develop apps & apis, try to make smart things and play with 3D printing.',
	'Made with P5.js reach me at marian@moldovan.es'
];

function preload() {
   fontMedium = loadFont("assets/Roboto-Medium.ttf");
   fontLight = loadFont("assets/Roboto-Light.ttf");
   fontBold = loadFont("assets/Roboto-Bold.ttf");
   imgs.forEach(function(item){
   		loadedImgs.push(loadImage(item));
   });
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(0);
	textSize(16);

	profileImg = loadImage("img/me.jpg");
}

function draw() {
	// Colors
	if(normalColor == -1) setColorValue(mouseY/windowHeight * 255);
	else setColorValue(normalColor);

	var widthOffset = windowWidth > 640 ? (windowWidth - 640)/2:0;
	var maxWidth = windowWidth > 640 ? 490 : windowWidth - 150;

	var lastHeight = paintHeader(maxWidth, widthOffset);
	
	//Footer
	text(texts[2], 25 + widthOffset, windowHeight - 50, maxWidth, windowHeight);

	//paintContent(lastHeight, windowHeight - 50);

}

function paintContent(start, finish){
	var startX = (windowWidth - 640)/2;

	var xOffset = 0;
	var yOffset = 0;
	loadedImgs.forEach(function(img){
		image(img, startX + xOffset, start + yOffset);
		xOffset += 160;
		if(xOffset > 160 * 3){
			yOffset += 160;
			xOffset = 0;
		}
	});
}


function paintHeader(maxWidth, widthOffset){
	//Header
    image(profileImg, 25 + widthOffset, 25);
	textFont(fontMedium);

	text(texts[0], 135 + widthOffset, 25, maxWidth, windowHeight);
	text(texts[1], 135 + widthOffset, 50, maxWidth, windowHeight);


	var lines = 0;
	for(var i = 0; i < 2;i++)
		lines += ceil(textWidth(texts[i])/maxWidth);
	lines = lines * 25 + 25;
	return lines > 135 ? lines:135;
	

}

function setColorValue(colorValue){
	background(colorValue);
	fill(255 - colorValue);
	stroke(200 - colorValue);
    tint(map(colorValue, 255, 0, 150, 255));
}


function deviceMoved() {   
	var a = map(accelerationX, 0, 90, 0, 255);
    normalColor = a ;
}

function deviceTurned() {
	createCanvas(windowWidth, windowHeight);
}