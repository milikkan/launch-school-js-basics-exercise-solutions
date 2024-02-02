console.log(last(['Earth', 'Moon', 'Mars'])); // 'Mars'
console.log(last([])); // undefined

function last(arr) {
  return arr[arr.length - 1];
}