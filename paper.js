class Paper{

    constructor(x, y, r){

    var options={
        isStatic:false,
        restitution:0.3,
        friction:0,
        desity:1.2
    }

    this.image=loadImage("paper.png");
    this.body=Bodies.circle(x, y, this.r,options);

 		World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;		

        push()
        translate(groundPos.x, groundPos.y);
        ellipseMode(RADIUS)
        ellipse(0,0,this.r, this.r);
        pop()
    }
}
