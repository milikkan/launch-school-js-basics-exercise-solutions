// In your JavaScript console, execute the following two lines of code to check whether their return values differ and if so, how. Take a look at the MDN documentation on equality comparisons to read about how == and === differ.

console.log('8' == 8); // true
console.log('8' === 8); // false

// === is the strict equality operator (also called identity operator)
// it returns true if the two operands have the same value and the same type
// == is the loose equality operator. It doesn't do type check.
// in this particular case, it coerces the string to a number and returns true.