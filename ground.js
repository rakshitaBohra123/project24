class Ground{

    constructor(x,y,width,height){
    var options={
    isStatic=true,
     restitution: 0,
    friction:0.5,
    density:1.2
    
    
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    
    World.add(world,this.body);
    
    
    }
    display(){
    
    RectMode(CENTER)
    fill("brown")
    }
}