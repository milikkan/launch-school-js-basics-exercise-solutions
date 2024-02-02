// What will the following code log to the console and why? Don't run it until you have tried to answer.

console.log(greeting);

var greeting = 'Hello world!';

// it will log 'undefined'
// The variable greeting is declared and initialized after the console.log method call.
// Variables declared with var are hoisted. Hoisting means virtually moving the variable declaration to the 
// beginning of the scope. Since it is initialized after being used, during the console.log method call,
// variable greetind is uninitialized and its value is undefined.