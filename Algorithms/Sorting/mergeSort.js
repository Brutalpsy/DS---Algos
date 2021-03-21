const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }
  // split Array into right and left side
  const left = array.slice(0, array.length / 2);
  const right = array.slice(array.length / 2, array.length);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let leftIndex = 0;
  let rightIndex = 0;
  let newArr = [];
  while (leftIndex < left.length || rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex] || rightIndex >= right.length) {
      newArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      newArr.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return newArr;
};

// merge with push and pop
// const merge = (left, right) => {
//   var newArr = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       newArr.push(left.shift());
//     } else {
//       newArr.push(right.shift());
//     }
//   }

//   if (!left.length) {
//     newArr.push(...right);
//   } else {
//     newArr.push(...left);
//   }
//   return newArr;
// };

const answer = mergeSort(numbers);
console.log(answer);
