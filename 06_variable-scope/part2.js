// What will the following code log to the console and why? Don't run it until you have tried to answer.

console.log(greeting);

let greeting = 'Hello world!';

// it will raise an error (ReferenceError)
// because the greeting variable is declared with let keyword and its scope begins where it is declared.
// during console.log method call, greeting is not reachable.