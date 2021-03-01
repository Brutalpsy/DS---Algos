//Implement a function that reverses a string with recursion!

// array implementation of reverese string
// import '../../Arrays/reverseString.js';

const reverseStringRecursive = (str) => {
  if (!str.length) {
    return '';
  }
  return (
    reverseStringRecursive(str.substr(1)) + str.charAt(0)
    // str[str.length - 1] + reverseStringRecursive(str.slice(0, str.length - 1))
  );
};

// with push and pop
const reverseString = (str) => {
  let arrayStr = str.split('');
  let reversedArray = [];
  //We are using closure here so that we don't add the above variables to the global scope.
  const addToArray = (array) => {
    if (array.length) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
  };
  addToArray(arrayStr);
  return reversedArray.join('');
};

console.log(reverseStringRecursive('Danijel'));
console.log(reverseString('Danijel'));
//should return: 'lejinaD'
