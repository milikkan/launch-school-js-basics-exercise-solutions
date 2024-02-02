// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

// it will log 2.
// we pass the function b as the argument. It is a local variable for the function.
// the a variable that is referenced from the console.log method within the function refers to 
// argument passed to the function.