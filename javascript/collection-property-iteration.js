var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

// Task 1
// WRITE YOUR CODE HERE - Create the logDairy function and use a for...of loop to log each item in the dairy array
function logDairy() {
    for (prop of Object.keys(dairy)) {
        console.log(dairy[prop]);
    }
}
logDairy();

const animal = {
    canJump: true
};
const bird = Object.create(animal);
bird.canfly = true;
bird.hasFeathers = true;

// Task 2
// WRITE YOUR CODE HERE - Create the birdCan function and use a for...of loop to log bird object's own properties
function birdCan() {
    for (prop of Object.keys(bird)) {
        console.log(`${prop}: ${bird[prop]}`);
    }
}
birdCan();

// Task 3
// WRITE YOUR CODE HERE - Create the animalCan function and use a for...in loop to log all bird properties, including inherited ones
function animalCan() {
    for (prop in bird) {
        console.log(`${prop}: ${bird[prop]}`);
    }
}
animalCan();