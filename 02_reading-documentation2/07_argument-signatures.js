// How many arguments does the Array.prototype.join() method expect? What happens if you call it with less or more arguments?

// join() method expects an argument, which is used as a separator which is used as the separator
// when joining the strings in the array on which the method is called.
// If it is called with no arguments, a comma (,) is used to join the strings.
// If you pass more arguments, they are ignored.

let words = ['my', 'name', 'is', 'John'];
console.log(words.join()); // my,name,is,John
console.log(words.join(' ')); // my name is John
console.log(words.join('-', 2)); // my-name-is-John