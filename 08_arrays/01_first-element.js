console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'
console.log(first([])); // undefined

function first(arr) {
  return arr[0];
}