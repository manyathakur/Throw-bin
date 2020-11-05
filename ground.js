class Ground{
    constructor(){
        this.GG = Bodies.rectangle(400,365,800,30,{isStatic: true,friction:1});
        World.add(world,this.GG);
    }
    earth(){
        rectMode(CENTER);
        
        fill("black");

        rect(400,365,800,30);
    }
}
