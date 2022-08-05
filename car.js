class Car{
    /**
     * constructor for the primitive "car" 
     * to make the car move like a real car 
     * you need the attributes of a real car 
     * such as acceleration and top speed. 
     * I have also implemented the friction 
     * to ensure that the car does not 
     * continue to go by inertia
     */
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.accelleration = 0.2;

        this.maxSpeed = 3;
        this.friction = 0.05;

        this.angle = 0;

        this.controls = new Controls();
    }
    /**
     * method to move the car
     */
    update(){
        this.#drive();
    }

    #drive(){
        /** 
         * car controls
         */
        if(this.controls.forward){
            this.speed += this.accelleration;
        }
        if(this.controls.reverse){
            this.speed -= this.accelleration;
        }
        /**
         * (this.speed != 0) 
         * it is used to determine if the car is moving 
         * and therefore we can rotate. 
         * Otherwise we cannot rotate
         */
        if(this.speed != 0){
            /**
             * flip the controls to realistically 
             * drive in reverse
             */
           const flip = this.speed > 0 ? 1 : -1;
            /** 
             * this works thanks to the unit circle
             * rotate by 90° counterclockwise
             * 
             * it is used for movement 
             * to the right or left
             */
            if(this.controls.right){
                this.angle -= 0.03 * flip;
            }
            if(this.controls.left){
                this.angle += 0.03 * flip;
            }
        }
        /**
         * simple implementation for physics
         */
        if(this.speed > this.maxSpeed){
            this.speed = this.maxSpeed;
        }
        if(this.speed < -this.maxSpeed/2){
            this.speed = -this.maxSpeed/2;
        }

        if(this.speed > 0){
            this.speed -= this.friction;
        }
        if(this.speed < 0){
            this.speed += this.friction;
        }
        if(Math.abs(this.speed) < this.friction){
            this.speed = 0;
        }
        /**
         * this works thanks to the unit circle
         * rotate by 90° counterclockwise
         * 
         * represents our steering angle
         */
        this.x -= Math.sin(this.angle)*this.speed;
        this.y -= Math.cos(this.angle)*this.speed;
    }

    draw(ctx){
        ctx.save();

        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath();
        ctx.rect(
            - this.width/2,
            - this.height/2,
            this.width,
            this.height
        );
        ctx.fill();

        ctx.restore();
    }
}