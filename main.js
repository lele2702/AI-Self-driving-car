/*
* Created by Gioele Iannelli
* method to center the canvas 
* and create the road
*/
const canvas=document.getElementById("myCanvas");

canvas.width=200;

const ctx = canvas.getContext("2d");
const car = new Car(100,100,30,50);

animate();

/*
* function created to animate 
* the movement of the car
*/
function animate(){
    car.update();
    canvas.height=window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate);
}