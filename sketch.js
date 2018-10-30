var myData;

function preload(){
  // put preload code here
    myData = loadJSON('assets/country_NB.json');
}

var balls = [];


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

  for(var i = 0; i < 20; i++){
  console.log(i);
    var names = myData.countries[i];

    var x = random(width);
    var y = random(height);
    var l = names.name;
    var size = i + 20;
    var tsize = i + 2;

    var newBall = new Ball(x, y, l, size, tsize);

    balls.push(newBall);

    console.log(names);

  }



}

function draw() {
  // put drawing code here
  background(200)
	for(var j = 0; j < balls.length; j++) {
		balls[j].move();
		balls[j].display();
	}
var k = 'Nobel Prize winners';
fill(76);
text(k, 50, 50);

}





function Ball(_x, _y, _label, _size, _tsize) {
	// Properties defined by constructor
	this.x = _x;
	this.y = _y;
  this.label = _label;
  this.size = _size;
  this.tsize = _tsize;
	// Hardcoded properties
	this.color = color(random(80, 165), random(0, 100), random(190, 240));
	this.speed = 2;

	this.yDir = 1;
	this.xDir = 1;
	// Methods
	this.move = function() {
		this.x += this.speed * this.xDir;
		this.y += this.speed * this.yDir;

		if (this.y >= height || this.y <= 0) {
			// if 1, set to -1, if -1, set to 1
			this.yDir *= -1;
		}

		if (this.x >= width || this.x <= 0) {
			this.xDir *= -1;
		}
	}

	this.display = function() {

    noFill();
    stroke(255);
		ellipse(this.x, this.y, this.size);

    var col1 = color('blue');
    var col2 = color('green');
    var col = lerpColor(col1, col2, frameCount/700);

    fill(col);
    textSize(this.tsize);
    text(this.label, this.x, this.y);
	}
}
