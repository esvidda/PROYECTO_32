class Particle {
    constructor(x, y,r) {

        var options ={
            //1
            restitution:0.4
            // rebot: 0.4
            // restitutions: 0.4
        }
        this.r=r;
        //2
        // this.body = bodies.circle(x, y, this.r,options);       
        // this.color=colors(random(0), random(255), random(255));

         this.body = Bodies.circle(x, y, this.r,options);       
         this.color=color(random(0, 255), random(0, 255), random(0, 255));

        // this.body = Bodies.circle(x, y, this.width, this. height,options);       
        // this.color=color(random(0, 255), random(0, 255), random(0, 255));

        // this.body = Bodies.ellipse(x, y, this.r,options);       
        // this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        //3
        // fill("this.color")
        // fill(color);
        // fill(this.colors)
         fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};