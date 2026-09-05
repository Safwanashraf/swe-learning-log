const p = new promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 3000);
})

// The Older .then() Way (Callback/Promise Chain)
function getData() {
  fetch("https://api.github.com/users/safwanashraf")
    .then(res => res.json())
    .then(data => console.log(data));
  console.log("Namaste JavaScript"); // Prints FIRST!
}

// The Modern async/await Way
async function getData() {
  const res = await fetch("https://api.github.com/users/safwanashraf");
  const data = await res.json();
  console.log(data);
  console.log("Namaste JavaScript"); // Prints LAST!
}