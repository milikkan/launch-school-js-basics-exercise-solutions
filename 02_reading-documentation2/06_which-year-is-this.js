// What is the difference between the two methods and which one should you use?

let today = new Date();

console.log(today.getYear()); // returns 124, year 2000 problem!
console.log(today.getFullYear()); // 2024

// getYear() is deprecated, we should you getFullYear()
// getYear() returns 100 or greater for years greater than or equal to 2000