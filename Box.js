class Box {
    constructor(x,y,width,height){
        var options = {
            restitution: 0.5,
            friction:0.3,
            density:1.0
        }
        this.width = width;
        this.height = height; 
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        
    }
   display(){
       var angle = this.body.angle;
       var pos   = this.body.position;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       
        rectMode(CENTER);
        fill ("white");
        rect(0,0,this.width,this.height);
        pop();
  }   
}