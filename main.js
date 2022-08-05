/**
 * Created by Gioele Iannelli
 * 
 * I built this project as an implementation of the knowledge learned 
 * in an intelligent systems course at my university and also to help 
 * me understand more deeply the topic of neural networks and genetic algorithms.
 */
const canvas=document.getElementById("myCanvas");

const laneCount = 6;
canvas.width = 3000;

const ctx = canvas.getContext("2d");

const road = new Road(canvas.width / 2, canvas.width * 0.5, laneCount);
const car = new Car(road.getLaneCenter(getRandomInt(laneCount)),100,30,50);

animate();
/**
 * function created to animate 
 * the movement of the car
 */
function animate(){
    car.update();
    canvas.height = window.innerHeight;
    /**
     * method to simulate a camera 
     * following the car from above
     */
    ctx.save();
    ctx.translate(0, - car.y + canvas.height * 0.5);

    road.draw(ctx);
    car.draw(ctx);
    
    ctx.restore();
    requestAnimationFrame(animate);
}

