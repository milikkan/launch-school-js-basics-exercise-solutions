// Find out how we can join two or more strings together.

let str1 = 'hello';
let str2 = 'world';

// we can use + as the concat operator
console.log(str1 + ' ' + str2);

// we can use string templates
console.log(`${str1} ${str2}`)


// we can use String.prototype.concat() method
console.log(str1.concat(' ', str2));