// Some dummy promises.
const p1 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("P1 Success"), 5000);
  setTimeout(() => reject("P1 Fails"), 5000);
});

const p2 = new Promise((resolve, reject) => {
  //setTimeout(() => resolve("P2 Success"), 1000);
  setTimeout(() => reject("P2 Fails"), 1000);
});

const p3 = new Promise((resolve, reject) =>
  setTimeout(() => {
    // resolve("P3 Success");
     reject("P3 Fails");
  }, 3000),
);

// Promise.all, Promise.allSettled, Promise.race, Promise.any
Promise.any([p1, p2, p3])
.then((results) => {
    console.log(results);
})
.catch((error) => {
    console.error(error);
})
