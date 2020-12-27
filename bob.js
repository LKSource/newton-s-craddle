class Bob{
    constructor (x,y,radius) {
     
     var options={
     isStatic:true,
     restitution:0.3,
     friction:1,
     density:0.6,
     }
     this.body = Bodies.circle(x,y,radius,options);
     this.radius=radius;
     World.add(world,this.body);
    }
      display(){
       fill("pink");
       noStroke();
       ellipseMode(CENTER);
       ellipse(this.body.position.x,this.body.position.y,this.radius)
       
   
   
      }
   }