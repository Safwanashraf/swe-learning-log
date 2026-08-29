// Always returns a promise.
async function getData() {
    return "Safwan Ashraf";
}

const dataPromise = getData();
dataPromise.then(res => console.log(res));