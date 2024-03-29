// How can you check whether a variable holds a value that is an array? For example, imagine you start writing a function and want to check whether its argument is an array:

function filter(input) {
  // Is input an array?
  return Array.isArray(input);
}

console.log(filter([1, 2, 3])); // true
console.log(filter('abc')); // false