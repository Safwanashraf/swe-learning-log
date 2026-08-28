const array = [10, 50, 20, 80, 30];

// Finding the sum
const sum = array.reduce((acc, curr) => {
  return (acc += curr);
}, 0);
console.log(sum);

// Finding the Maximum
const max = array.reduce((acc, curr) => {
  if (acc < curr) {
    return curr;
  } else {
    return acc;
  }
}, 0);
console.log(max);

// Use reduce() to find the lowest value in the array. (Do not use Math.min).
const min = array.reduce((acc, curr) => {
  if (acc > curr) {
    return curr;
  } else {
    return acc;
  }
});
console.log(min);
