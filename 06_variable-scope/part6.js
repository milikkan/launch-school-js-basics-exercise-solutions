// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// it will log false. From the console.log method call, variable b that is declared in the outer
// scope is referenced. The variable declared inside the if block is a different variable.
// It shadows outer b variable during the inner if block, but it is not accessible from the outer scope.