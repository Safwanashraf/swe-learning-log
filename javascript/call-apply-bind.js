let name = {
    firstName: "Safwan",
    lastName: "Ashraf",
}

let printFullName = function (homeTown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + homeTown + ", " + state);
}

printFullName.call(name, "Kannur", "Kerala");

let name2 = {
    firstName: "Oziya",
    lastName: "Shahid",
}

// function borrowing
// call method
printFullName.call(name2, "Khatauli", "Uttar Pradesh");

// apply method
printFullName.apply(name2, ["Khatauli", "Uttar Pradesh"]);

// bind method
let printMyName = printFullName.bind(name, "Kannur", "Kerala");
console.log(printMyName);
printMyName();
