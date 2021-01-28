// Google question
// Given an array = [2,5,1,2,3,5,1,2,4];
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4];
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

const numbers = [2, 1, 1, 2, 3, 5, 1, 2, 4];

//O(n ^ 2) without hash table;
const findFirstRecurringCharacter2 = (numbers) => {
  let proximity = numbers.length;
  let numberToReturn;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let currentProximity = j - i;
      if (numbers[i] === numbers[j] && currentProximity < proximity) {
        numberToReturn = numbers[i];
        proximity = currentProximity;
      }
    }
  }
  return numberToReturn;
};

// O(n)
const findFirstRecurringCharacter = (numbers) => {
  for (let i = 0, obj = {}; i < numbers.length; i++) {
    if (obj[numbers[i]]) {
      return numbers[i];
    }
    obj[numbers[i]] = true;
  }
};
console.log(findFirstRecurringCharacter2(numbers));

console.log(findFirstRecurringCharacter(numbers));
