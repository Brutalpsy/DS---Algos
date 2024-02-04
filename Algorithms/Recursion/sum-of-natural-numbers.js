const sumOfNumbers = (inputNumber) => {
  if (inputNumber <= 1) {
    return inputNumber;
  }

  return inputNumber + sumOfNumbers(inputNumber - 1);
};

// with passing result as a parameter to the function, we can keep track of the result of the function as it is called recursively.
// This is a common pattern in recursion.

// const sumOfNumbers = (number, result) => {
//   if (number == 0) {
//     return result;
//   }
//   result = result + number;
//   return sumOfNumbers(--number, result);
// };

console.log(sumOfNumbers(10, 0));
