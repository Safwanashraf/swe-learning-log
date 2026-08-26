console.log("Starting of the program");

function cb() {
    console.log("Callback");
};

setTimeout(cb, 0);
console.log("End");

// Million lines of code exception

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 11000) {
    endDate = new Date().getTime();
}
console.log("blocking the event loop for 11 seconds & here while expires");