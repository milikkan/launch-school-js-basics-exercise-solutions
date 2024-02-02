// What will the following code log to the console and why? Don't run it until you have tried to answer.

if (true) {
  let myValue = 20;
}

console.log(myValue);

// it will raise a ReferenceError.
// variables declared using let keyword has block scope. myValue is only accessible within the if block.