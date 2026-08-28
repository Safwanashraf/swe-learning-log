const array = [5, 3, 4, 2, 1, 6];

// Filter out numbers less than 4
const lessThan4 = array.filter((array) => array < 4);
console.log(lessThan4);

// Filter out odd numbers
const oddNumbers = array.filter((array) => array % 2 !== 0);
console.log(oddNumbers);

// Filter out Prime numbers
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

const primeNumbers = array.filter(isPrime);
console.log("these are prime numbers: ", primeNumbers);

