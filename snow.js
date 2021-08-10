class Snow {
    constructor(x,y){
    var options = {
       'restitution' : .8,
       'friction':1,
       'density':1
    }
        this.body = Bodies.rectangle(x, y, 70,70, options);
        this.width = Math.round(random(40,80))
        this.height = Math.round(random(40,80))
        this.image = loadImage("images/snow4.webp");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
      }
}
