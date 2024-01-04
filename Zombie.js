class Zombie {
  
  constructor(speed) {
    this.x = random(width);
    this.y = random(height);
    
    if (random(1) > 0.5) {
      this.x += width;
    } else {
      this.x -= width;
    }
    
    if (random(1) > 0.5) {
      this.y += height;
    } else {
      this.y -= height;
    }
    this.pos = createVector(this.x, this.y);
    this.speed = speed;
    this.angle = 0;
  }
  
  
  draw() {
    angleMode(degrees);
    rectMode(CENTER);
    push();
    translate(this.pos.x, this.pos.y);
    this.angle = atan2(player.pos.y - this.pos.y, player.pos.x - this.pos.x);
    rotate(this.angle);
    fill(100, 255, 100);
    image(zombieImg, 0, 0, 30, 30);
    //rect(0, 0, 20, 20);
    pop();
  }
  
  update() {
    let difference = p5.Vector.sub(player.pos, this.pos);
    difference.limit(this.speed);
    this.pos.add(difference);
  }
  
}