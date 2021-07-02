const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//               99
//         44          6
//     2       1   5       63
// 87   283  4   0

const heapsort = (array) => {
  let arrayLength = array.length;
  for (let i = Math.floor(arrayLength / 2) - 1; i >= 0; i--) {
    sortPerentAndChild(array, arrayLength, i);
  }

  for (let i = arrayLength - 1; i > 0; i--) {
    swap(array, 0, i);
    arrayLength--;
    sortPerentAndChild(array, arrayLength, 0);
  }

  return array;
};

const sortPerentAndChild = (array, arrayLength, parentIndex) => {
  let leftIndex = parentIndex * 2 + 1;
  let rightIndex = parentIndex * 2 + 2;
  let maxIndex = parentIndex;

  if (arrayLength > leftIndex && array[leftIndex] > array[maxIndex]) {
    maxIndex = leftIndex;
  }
  if (arrayLength > rightIndex && array[rightIndex] > array[maxIndex]) {
    maxIndex = rightIndex;
  }

  if (maxIndex != parentIndex) {
    swap(array, maxIndex, parentIndex);
    sortPerentAndChild(array, arrayLength, maxIndex);
  }
};

const swap = (array, index1, index2) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

console.log(heapsort(numbers));
