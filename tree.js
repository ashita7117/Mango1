class Tree {
    constructor(x,y,){
        var options = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x,y,width,height)
        this.image = loadImage("images/tree.png");
        World.add(world,this.body);
    }
    show(){
        push();
        this.imageMode(CENTER);
        this.image(this.image,0,0,this.width,this.height);
        pop();
    }
}