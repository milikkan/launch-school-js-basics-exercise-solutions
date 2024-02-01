// Find the MDN documentation on operator precedence, and use it to find out which result the expression 4 * 5 + 3 ** 2 / 10 evaluates to.

console.log(4 * 5 + 3 ** 2 / 10); // 20.9

// exponentiation operator evaluates first (**)
// then multiplication (*) and division evaluates from left to right
// lastly, addition evaluates

// evaluation steps
// step1: 4 * 5 + 3 ** 2 / 10
// step2: 4 * 5 + 9 / 10
// step3: 20 + 9 / 10
// step4: 20 + 0.9
// step5: 20.9 