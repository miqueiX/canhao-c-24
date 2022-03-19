class Cannon{
    constructor(x,y,w,h,angle){
        this.x = x,
        this.y = y,
        this.w = w,
        this.h = h,
        this.angle = angle;
this.cannonimg = loadImage("assets/canon.png");
this.cannonbase = loadImage("assets/cannonBase.png");

    }
    display(){
        //topodocanhao

        if(keyIsDown(RIGHT_ARROW)&&this.angle<70){
            this.angle += 1;
        }
        if(keyIsDown(LEFT_ARROW)&&this.angle>-35){
            this.angle -=1;
        }
        

        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);

        image(this.cannonimg, 0, 0, this.w, this.h)
        pop();
        //basedocanhao

       image( this.cannonbase,70,20,200,200);
        noFill();
    }
}

