console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true

function isBlank(str) {
  return str.trim().length === 0;
}