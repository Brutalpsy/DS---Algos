//Write two functions that finds the factorial of any number.
//One should use recursive, and the other should just use
//a for loop
function findFactorialRecursive(number) {
  if (!number) {
    return 1;
  }

  return number * findFactorialRecursive(--number);
}

function findFactorialIterative(number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result *= i;
  }
  return result;
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
