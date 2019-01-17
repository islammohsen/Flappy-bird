class obstacle{
  constructor(x, width, height, pos){
    this.x = x;
    this.y = 0;
    this.w = width;
    this.h = height;
    this.pos = pos; //pos = 0 up pos = 1 down
  }
  draw(worldHeight){
    noStroke();
    fill(255);
    if(this.pos == 0){
      this.y = 0;
      rect(this.x, 0, this.w, this.h);
    }
    else {
      this.y = worldHeight - this.h;
      rect(this.x, worldHeight - this.h, this.w, this.h);
    }
  }

  update(speed){
    this.x -= speed;
  }

  inside(p){
    let collideX =  this.x <= p.x && p.x <= this.x + this.w;
    let collideY = this.y <= p.y && p.y <= this.y + this.h;
    return collideX && collideY;
  }

  collide(bird){
    let ret = 0;
    for(let p of bird.points)
      ret |= this.inside(p);
    return ret;
  }
}
