/**
 * Find linear Interpolation - the function will give us the point between A and B depends on t
 * t -  actually is a percentage of how the return number is far from A
 * 
 * Example: 
 *  - if t == 0 then the return value is A ==> A + (B - A)*0 = A
 *  - if t == 1 then the return value is B ==> A + (B - A)*1 = A + B - A = B
 * 
 * A - left point
 * B - right point
 * t - the ration between left and right point
 * returns the linear interpolation between A and B
 */
function lerp(A, B, t){
    return A + (B - A) * t;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}