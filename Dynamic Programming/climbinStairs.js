// Bottom Up
const climbinStairs = (n) => {
  // array[0] = 1;
  // array[1] = 2;
  // for (let index = 2; index < n; index++)

  let array = [];
  array[0] = 1; //with the 0-th step
  array[1] = 1;

  for (let index = 2; index <= n; index++) {
    array[index] = array[index - 1] + array[index - 2];
  }
  return array[array.length - 1];
};

// Top Down
const climbinStairsRecursive = (n) => {
  const cache = {};
  const helper = (number) => {
    if (cache[number]) {
      return cache[number];
    }

    if (number === 0) {
      return 1;
    }
    if (number < 0) {
      return 0;
    }

    let left = helper(number - 1);
    let right = helper(number - 2);
    cache[number] = left + right;
    return cache[number];
  };

  return helper(n);
};

console.log(climbinStairs(5));
console.log(climbinStairsRecursive(5));
