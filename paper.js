class Paper{

    constructor(x, y, r){

    var options={
        isStatic:false,
        restitution:0.3,
        friction:0,
        desity:1.2
    }

    this.image=loadImage("paper.png");
    this.body=Bodies.ellipse(this.x, this.y, this.r=10,options);

 		World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;		

        push()
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER)
        ellipse(0,0,this.width, this.height);
        pop()
    }
}