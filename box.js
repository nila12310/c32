class Box{
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.3,
        'friction':1.0,
        'density':0.5
    }
    this.Visibility = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display(){
    var pos =this.body.position;
    stroke("black")
    strokeWeight(1)

    if(this.body.speed < 3){
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255, this.Visibility);
      pop();
    }
  }  
  score(){
    if(this.Visibility<0 &&this.Visibility>-105){
        score++;
    }
  } 
}