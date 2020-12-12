class Mango {
   constructor(x,y){
var options= {
    isStatic:true,
    restitution: 1,
    friction:0.3,
    denstity:0.8
}
    this.body= Bodies.circle(x,y,50,options);
    this.image= loadImage("Plucking+mangoes/sprites/mango.png")
    World.add(world,this.body);

   }
   
   display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    ellipseMode(RADIUS)
    image(this.image, 0, 0,50,50);
    pop();
   }
}