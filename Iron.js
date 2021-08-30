class Iron{
	constructor(x,y,weight,height)
	{
	// assign options to the rubber ball
        var options= {
            'restitution':0.8,
            'friction':3,
            'density':10    
        }
		
		this.body=Bodies.rectangle(x,y, 50,50, options);
		this.weight=80;
        this.height=50;
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;
            var angle= this.body.angle;
			push()
			translate(ironpos.x, ironpos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("green");
			//draw the ellipse here to display the rubber ball
            rect(0,0,this.weight,this.height);
			pop();
	}

}