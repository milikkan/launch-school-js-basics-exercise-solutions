console.log(repeat(3, 'ha')); // 'hahaha'

function repeat(times, str) {
  let result = '';
  for (let count = 1; count <= times; count += 1) {
    result += str;
  }
  return result;
}