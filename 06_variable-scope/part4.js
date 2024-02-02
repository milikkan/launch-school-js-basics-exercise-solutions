// What will the following code log to the console and why? Don't run it until you have tried to answer.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

// it will log 1.
// the variable a is declared inside the function and it is accessible inside the function scope.
// variables declared in an outer scope is accessible from any inner scope.