const numbers = [2, 7, 11, 15];
const target = 9;

//(n^2)
const getIndicesOfTwoSum = (array, target) => {
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == target) {
        return [i, j];
      }
    }
  }
  return null;
};

//O(n)
const getIndicesOfTwoSum2 = (array, target) => {
  var obj = {};
  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = i;
  }
  for (let i = 0; i < array.length; i++) {
    const compiliment = target - array[i];
    if (obj[compiliment] != undefined && obj[compiliment] != i) {
      return [i, obj[compiliment]];
    }
  }
};

//O(n)
const getIndicesOfTwoSum3 = (array, target) => {
  var obj = {};
  for (let i = 0; i < array.length; i++) {
    const compliment = target - array[i];
    if (obj[compliment] != undefined) {
      return [obj[compliment], i];
    }
    obj[array[i]] = i;
  }
};

console.warn(getIndicesOfTwoSum(numbers, target));
console.log(getIndicesOfTwoSum2(numbers, target));
console.info(getIndicesOfTwoSum3(numbers, target));
