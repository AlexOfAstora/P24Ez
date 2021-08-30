class Stone{
	constructor(x,y, weight, height)
	{
	// assign options to the rubber ball
        var options ={
            'restitution':0.8,
            'friction':3,
            'density':12
        }
		this.x=x;
		this.y=y;
        this.weight=weight;
        this.height=height;
		this.body=Bodies.rectangle(this.x, this.y, this.weight, this.height, options);
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("gray");
			//draw the ellipse here to display the rubber ball
            rect(0,0, this.weight, this.height);
			pop();
	}

}