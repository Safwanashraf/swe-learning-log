let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

// multiply by two
let multiplyByTwo = multiply(2);
multiplyByTwo(10);

// multiply by three
let multiplyByThree = multiply(3);
multiplyByThree(3);

/* Function currying is turning a function that takes multiple arguments into a chain of functions that each takes one argument.*/

// Normal function
function add(a, b) {
    return a + b;
}
add(2, 3); //5

//Curried version
function curryAdd(a) {
    return function(b) {
        return a + b;
    };
}
curryAdd(2)(3); //5

// It’s useful when you want to reuse a partially configured function: