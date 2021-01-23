const array1 = [1, 2, 3, 9];
const array2 = [1, 2, 4, 4];
const array3 = [6, 4, 3, 2, 1, 7];
const sum = 9;

// O(n)
const betterApproach = (arr, sum) => {
  const mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
};
// O (n^2)
const naiveApproach = (array, sum) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        return true;
      }
    }
  }
  return false;
};

console.warn(`O (n^2) ${naiveApproach(array1, sum)}`);
console.warn(`0(n) ${betterApproach(array1, sum)}`);
