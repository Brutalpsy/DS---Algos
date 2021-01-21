//first way
const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];

const mergeSortedArrays = (array1, array2) =>
  array1.concat(array2).sort((a, b) => a - b);

const mergeSortedArrays2 = (array1, array2) => {
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  var mergedArray = [];
  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
};

const mergeSortedArrays3 = (array1, array2) => {
  var mergedArray = [];

  for (let i = 0; i < array1.length; i++) {
    mergedArray.push(array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    mergedArray.push(array2[i]);
  }

  for (let i = 0; i < mergedArray.length; i++) {
    var lowestNum = mergedArray[i];
    var tempIndex = null;
    for (let j = i + 1; j < mergedArray.length; j++) {
      if (mergedArray[j] < lowestNum) {
        lowestNum = mergedArray[j];
        tempIndex = j;
      }
    }

    if (tempIndex != null) {
      var temp = mergedArray[i];
      mergedArray[i] = lowestNum;
      mergedArray[tempIndex] = temp;
    }
  }

  return mergedArray;
};

console.log(
  `With extension methods w/o worry for sorted or not ${mergeSortedArrays(
    array1,
    array2
  )}`
);
console.info(
  `Works for sorted arrays only: ${mergeSortedArrays2(array1, array2)}`
);
console.error(
  `Not carring if sorted or not:  ${mergeSortedArrays3(array1, array2)}`
);
