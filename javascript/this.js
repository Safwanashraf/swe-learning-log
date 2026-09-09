// "use Strict";

// this in global space
console.log(this); // globalObject - window, global

// this inside a function
function x() {
    // the value depends on strict / non-strict mode
    console.log(this); // window in non-strict & undefined in strict mode
}

// this inside non-strict mode - (this substitution)

/* If the value of this keyword is undefined or null
this keyword will be replaced with globalObject
only in non-strict mode */

// this keyword value also depends on how the function is called (runtime).
x(); // undefined in strict mode.
window.x(); // window object even in strict mode.
// window.x(); would show an error because it's browser console only works.

// this inside a object's method
const person = {
    firstName: "Safwan",
    lastName: "Ashraf",
    printName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}
object.fullName();

const person2 = {
    firstName: "Oziya",
    lastName: "Shahid",
}
// call apply bind methods (sharing methods).
person.printName.call(person2); // value of this = person2 (Oziya Shahid).

// this inside arrow function.
const obj = {
    a: 10,
    // console.log(this); // will work same as below console.
    x: () => {
        console.log(this);// window - because arrow function encloses with it's lexical context.
    }
}
obj.x();

// this inside nested arrow function
const obj2 = {
    a: 20,
    x: function () {
        // console.log(this); // will work same as the console below.
        // enclosing lexical context
        const y = () => {
            console.log(this); // {a:20, x: function} because it's the lexical context it see's.
        };
        y();
    }
}
obj2.x();

// this inside DOM.
