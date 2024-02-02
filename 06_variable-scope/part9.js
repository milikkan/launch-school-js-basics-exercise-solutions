// What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

// it will raise an error (TypeError) because a variable is declared with const keyword. It is accessible
// from the function body since it is declared in the outer scope. Variables declared with
// the const keyword cannot be reassigned.