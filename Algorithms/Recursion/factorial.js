//Write two functions that finds the factorial of any number.
//One should use recursive, and the other should just use a for loop

// O(n) time
function findFactorialRecursive(number) {
  if (number <= 1) {
    return 1;
  }

  return number * findFactorialRecursive(--number);
}
// explanation of findFactorialRecursive

// 5 * findFactorialIterative(4)
// 5 * (4 * findFactorialIterative(3))
// 5 * (4 * (3 * findFactorialIterative(2))
// 5 * (4 * (3 * (2 * findFactorialIterative(1))))
// 5 * (4 * (3 * (2 * 1)))
// => 120

// O(1) time if engine supports it, otherwise O(n)
function tailRecursion(x, totalSoFar = 1) {
  if (x === 0) {
    return totalSoFar;
  }
  return tailRecursion(x - 1, totalSoFar * x);
}

// explanation of tailRecursion
// tailRecursion(5)
// tailRecursion(5, 1)
// tailRecursion(4, 5)
// tailRecursion(3, 20)
// tailRecursion(2, 60)
// tailRecursion(1, 120)
// tailRecursion(0, 120)
// => 120

// O(n)
function findFactorialIterative(number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result *= i;
  }
  return result;
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
console.log(tailRecursion(5));
