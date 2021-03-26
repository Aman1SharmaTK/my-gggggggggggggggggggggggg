
class Block{
  constructor(x, y, width, height) {
      var options = {     
          restitution :0.4,
          friction :1.0,
    }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility = 255;
    }
    display(){
      
      if (this.body.speed<3) {
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
     
      ellipse(0,0,this.radius,this.radius)
      pop();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 30;
        tint(355,this.Visibility)
        ellipse(999,999,this.radius, this.radius);
        pop();
      }
    }
}
