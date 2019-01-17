let hero;
let obstacles = [];
let heroImg;

function preload(){
	heroImg = loadImage('assets/bird.png');
}

function setup() {
	createCanvas(1000, 600);
  hero = new Bird(100, 200, 20, 4);
	obstacles.push(addObstacle());
	testObstcale = new obstacle(100, 20,  height, 0);
}

function draw() {
	background(0);

	hero.update(height);
	hero.draw(heroImg);

	for(let currentObstacle of obstacles){
		currentObstacle.update(4);
		currentObstacle.draw(height);
	}
	if(frameCount % 120 == 0)
		obstacles.push(addObstacle());

	for(let currentObstacle of obstacles){
		if(currentObstacle.collide(hero)){
			print("a55555 lbs");
			noLoop();
		}
	}

	removeObstacles();
}

function keyPressed()
{
	if(keyCode == UP_ARROW)
		hero.fly();
}

function addObstacle(){
	let newObstacle = new obstacle(width + 50, 25, random(200, height - 100), floor(random(2)));
	return newObstacle;
}

function 	removeObstacles(){
	while (obstacles.length > 0 && obstacles[0].x + obstacles[0].w < 0) {
		obstacles.shift();
	}
}
