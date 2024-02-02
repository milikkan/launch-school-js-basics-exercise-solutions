// What will the following code log to the console and why? Don't run it until you have tried to answer.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

// it will raise a ReferenceError
// variable 'a' is declared in the function body, then another variable with the same name is declared
// with let keyword inside the if block. This new variable shadows the 'a' variable from the outer scope.
// when we try to access it from the console.log method, since it is not initialized before usage,
// JavaScript raises an error.