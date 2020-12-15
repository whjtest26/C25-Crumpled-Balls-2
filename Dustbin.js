class Dustbin{

    constructor(x,y){

        var options = {

            isStatic : true
        }
        
        this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallThickness=20;

		this.image=loadImage("sprites/dustbin.png")

        this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, options)
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, options)
        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})

		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

    }

    display(){

        	var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			
			fill("white")
			stroke(255)
			
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			
			fill("white")
			
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			
			fill("white")
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
    }





}