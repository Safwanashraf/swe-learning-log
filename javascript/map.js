const array = [5, 3, 2, 4, 1, 6];

// Doubling the array
const doubling = array.map((d) => d * 2);

// Converting the numbers to binary string
const binary = array.map((b) => b.toString(2));

// Console log to see what happens
console.log(doubling);
console.log(binary);

// You have an array of product prices [100, 200, 300, 400].  
// Use map() to return a new array where a 10% tax is added to each price.

const prices = [100, 200, 300, 400];

const tax = prices.map((price) => price / 10);
console.log(tax);

const taxAndPrice = prices.map((price) => {
  const taxAndPrice = { price: price, tax: price / 10 };
  return taxAndPrice;
});
console.log(taxAndPrice);

const taxedPrice = prices.map((price) => Math.round(price * 1.10));
console.log(taxedPrice);
