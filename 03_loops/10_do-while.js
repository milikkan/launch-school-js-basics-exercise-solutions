// What is the difference between the following two code snippets? Check the MDN documentation on while and do...while.

/* 
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}
*/

/* 
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

*/

// first loop (while loop) doesn't execute because its condition is false
// second loop (do-while loop) executes once and logs to the console, because its condition is checked at the and. do-while loops execute at lease once.

