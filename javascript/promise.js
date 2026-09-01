// A Promise represents a result that will be available later.

const myPromise = new Promise((res, rej) => {
  const isSuccessful = true;

  setTimeout(() => {
    if (isSuccessful) {
      res("Task completed successfully!");
    } else {
      rej(new Error("Task failed."));
    }
  }, 3000);
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


  ///////
