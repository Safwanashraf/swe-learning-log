// A Promise represents a result that will be available later.

const myPromise = new Promise((response, reject) => {
  const isSuccessful = true;
  setTimeout(() => {
    if(isSuccessful) {
      response("Task completed");
    } else {
      reject(new Error("Task failed"));
    }
  })
})

myPromise
.then((message) => {
  console.log(message);
})
.catch((error) => {
  console.error(error.message);
})
.finally(() => {
  console.log("This console work no matter what");
})
