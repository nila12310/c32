class polygon{
    constructor(x,y,r){
        var options =  {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }

        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.r=r;
        this.image=loadImage("polygon.png")
    }

    display()
    {
        var pos=this.body.position;		
        push()
        translate(pos.x,pos.y);
        fill(255,0,255)
        imageMode(CENTER);
        ellipseMode(RADIUS)
        image(this.image, 0, 0, 40, 40)
        pop()
    }

}