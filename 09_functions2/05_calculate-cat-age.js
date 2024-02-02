function catAge(humanAge) {
  let result = 0;
  if (humanAge >= 1) result += 15;
  if (humanAge >= 2) result += 9;
  if (humanAge >= 3) result += (humanAge - 2) * 4;
  return result;
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32