class Bird{
	constructor(x, y, r, birdForce){
  	this.x = x;
    this.y = y;
    this.r = r;
    this.force = 1;
    this.birdForce = birdForce;
    this.points = [];
    this.getPoints();
  }

  getPoints(){
    let p = {x: this.x + this.r, y: this.y};
    let center = {x: this.x, y:this.y};
    for(var angle = 0; angle < 360; angle++){
      this.points.push(this.MyRotate(p, center, angle));
    }
  }

  MyRotate(p, c, angle){
    let ret = {x: p.x, y: p.y};
    let ang = radians(angle);
    ret.x = (p.x - c.x) * cos(ang) - (p.y - c.y) * sin(ang) + c.x;
    ret.y = (p.x - c.x) * sin(ang) + (p.y - c.y) * cos(ang) + c.y;
    return ret;
  }

  draw(img){
  	noStroke();
    fill(255, 255, 0);
    ellipseMode(RADIUS);
    //ellipse(this.x, this.y, this.r);
		image(img, this.x, this.y, this.r, this.r);
  }

  update(worldHeight){
    if(this.y + this.force + this.r > worldHeight)
      return;
    for(let P of this.points)
      P.y += this.force;
    this.y += this.force;
    this.force += 0.1;
  }

  fly(){
    this.force = -abs(this.birdForce);
  }
}
