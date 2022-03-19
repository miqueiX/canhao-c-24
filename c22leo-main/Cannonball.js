class Cannonball{
constructor(x,y){
    var options={
        isStatic:true
        }
        this.r =30;
        this.body = Bodies.circle(x,y,this.r, options)
        World.add(world,this.body);
        this.image = loadImage("assets/cannonball.png");
};
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push()
    imageMode(CENTER)
    image(this.image, pos.x, pos.y,this.r,this.r);
    pop()
    }

    shoot(){
    var newangle = cannon.angle;
    newangle = newangle*(3.14/180);
    var velocity = p5.Vector.fromAngle(newangle);
    velocity.mult(0.5);
    Body.setStatic(this.body, false);
    Body.setVelocity(this.body,{
        x:velocity.x*(180/3.14),
        y:velocity.y*(180/3.14)
    })
    }
}