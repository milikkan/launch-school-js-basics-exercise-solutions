// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

let str = 'launch school tech & talk';
let capitalized = str
  .split(' ')
  .map(word => word[0].toUpperCase().concat(word.substring(1)))
  .join(' ');
console.log(str);
console.log(capitalized);

