class Boy {
    constructor(x,y){
        var options = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x,y,width,height)
        this.image = loadImage("images/boy.png");
        World.add(world,this.body);
    }
    show(){
        push();
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}