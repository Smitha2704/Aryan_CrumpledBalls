class Ground{
    constructor(x, y, width, height){
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':0,
            'density':1
        }
        this.body = Bodies.rectangle(x,680,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);

    }
    display() {
        rectMode(CENTER);
        fill(255);

        rect(this.body.position.x, 680, this.width, this.height);
    }
};