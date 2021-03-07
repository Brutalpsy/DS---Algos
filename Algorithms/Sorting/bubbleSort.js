const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const bubbleSort = (array) => {
  let length = array.length - 1;
  while (length) {
    for (let index = 0; index <= length; index++) {
      if (array[index] > array[index + 1]) {
        const temp = array[index + 1];
        array[index + 1] = array[index];
        array[index] = temp;
      }
    }
    length--;
  }
  return array;
};

const bubbleSort2 = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

console.log(bubbleSort2(numbers));
console.log(bubbleSort(numbers));
