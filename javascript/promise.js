// A Promise represents a result that will be available later.
const myPromise = new Promise((resolve, reject) => {
  const isSuccessful = true;

  setTimeout(() => {
    if (isSuccessful) {
      resolve("Task completed successfully!");
    } else {
      reject(new Error("Task failed."));
    }
  }, 1000);
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => {
    console.log("Promise settled.");
  });
