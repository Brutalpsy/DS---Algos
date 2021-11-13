//https://leetcode.com/problems/container-with-most-water/

// O(n)
var maxArea = function (height) {
  let maxContainer = 0;
  let p1 = 0;
  let p2 = height.length - 1;
  while (p1 < p2) {
    let min = Math.min(height[p1], height[p2]);
    let area = p2 - p1;
    let newContainer = min * area;
    maxContainer = Math.max(maxContainer, newContainer);
    if (height[p1] <= height[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxContainer;
};

// O(n) - wierd one with for loop
// var maxAreaWierd = function (height) {
//   let max = 0;
//   for (let i = 0, y = height.length - 1; i < y; i++) {
//     let lowerNumber = Math.min(height[i], height[y]);
//     let width = y - i;
//     let newContainer = lowerNumber * width;
//     max = Math.max(max, newContainer);
//     if (height[y] < height[i]) {
//       y--;
//       i--;
//     }
//   }
//   return max;
// };

//O(n^2) - bad one
var maxAreaBad = function (height) {
  let maxContainer = 0;
  for (let i = 0; i < height.length; i++) {
    for (let y = i + 1; y < height.length; y++) {
      let lowerNumber = Math.min(height[i], height[y]);
      let container = lowerNumber * (y - i);
      maxContainer = Math.max(container, maxContainer);
    }
  }
  return maxContainer;
};

console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
// console.log(maxAreaWierd([2, 3, 4, 5, 18, 17, 6]));
console.log(maxAreaBad([2, 3, 4, 5, 18, 17, 6]));
