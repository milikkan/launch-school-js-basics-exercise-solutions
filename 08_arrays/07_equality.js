// Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

// it will log 'false'
// Arrays in JavaScript are objects. The variables array1 and array2 holds the memory addresses of the 
// real arrays. Real arrays are stored in a memory address and this address is stored in the variables.
// Equality operator doesn't check the contents of the arrays, but it checks if the variables hold the same
// memory address. Both arrays are distinct objects and have different memory locations. This is why
// this equality check returns false.