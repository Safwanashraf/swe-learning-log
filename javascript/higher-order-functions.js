const radius = [3, 1, 2, 4];

// 1. Calculate the area of each circle
const calculateArea = (radius) => {
    const output = [];
    for( let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));

// 2. Calculate the circumference of each circle
const calculateCircumference = (radius) => {
    const output = [];
    for( let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}
console.log(calculateCircumference(radius));

// 3. Calculate the diameter of each circle
const calculateDiameter = (radius) => {
    const output = [];
    for( let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output;
}
console.log(calculateDiameter(radius));

// 4. Using higher order function to calculate area, circumference and diameter

const area = (radius) => Math.PI * radius * radius;
const circumference = (radius) => 2 * Math.PI * radius;
const diameter = (radius) => 2 * radius;

const calculate = (radius, logic) => {
    const output = [];
    for( let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));