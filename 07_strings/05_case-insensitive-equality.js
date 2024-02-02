let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

console.log(string1.toLowerCase() === string2.toLowerCase()); // true
console.log(string1.toLowerCase() === string3.toLowerCase()); // false
console.log(string2.toUpperCase() === string3.toUpperCase()); // false