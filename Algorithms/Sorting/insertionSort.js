const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    var currentValue = array[i];
    var hole = i;
    while (hole > 0 && array[hole - 1] > currentValue) {
      array[hole] = array[hole - 1];
      hole--;
    }
    array[hole] = currentValue;
  }
  return array;
};

// a bit confusing one
const insertionSort2 = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      // if the current value is lower than the first element - set it as first element,
      // by splicing it from the array and setting it as first elelent using unshift
      array.unshift(array.splice(i, 1)[0]);
    } else {
      //find where number should go
      for (let j = 1; j < i; j++) {
        // if the current value is higher than one before the  current iteration of j
        // and the current value is a lower number than j
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // remove the current value from the array and place
          // it in front of the current value of j
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
  return array;
};

// first try - maybe not a 'good way' to do it
// const insertionSort = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     for (var j = i; j >= 0; j--) {
//       if (array[j + 1] < array[j]) {
//         var temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// };

console.log(insertionSort(numbers));
console.log(insertionSort2(numbers));
