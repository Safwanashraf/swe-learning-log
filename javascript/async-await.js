
// Always returns a promise. Even if we don't return promis manually it will wrap things into a promise object.
async function getData() {
    return "Safwan Ashraf";
}
 
const dataPromise = getData();

dataPromise.then(res => console.log(res));

// Always returns a promise.
const promise = new Promise((res, rej) => {
    res("Promise Resolved Value!");
});

async function getPromiseData() {
    return promise;
}

const promiseData = getPromiseData();

promiseData.then(res => console.log(res));


const p = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value!");
});

async function handlePromise() {
    const val = await p;
    console.log(val);
    console.log(p, "It's directly calling p");
}


handlePromise();
