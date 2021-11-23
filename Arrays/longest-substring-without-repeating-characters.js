// optimal solution - Sliding Window
// O(n) Time , O(n) Space

var lengthOfLongestSubstringOptimal = function (s) {
  if (s.length <= 1) {
    return s.length;
  }

  let left = 0;
  let seen = {};
  let longestLength = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const previoslySeenChar = seen[currentChar];

    if (previoslySeenChar >= left) {
      left = previoslySeenChar + 1;
    }
    seen[currentChar] = right;
    longestLength = Math.max(longestLength, right - left + 1);
  }

  return longestLength;
};

// wierd and complex solution
// O(n) time, 0(n) space
// var lengthOfLongestSubstring = function (s) {
//   let p1 = 0;
//   let p2 = 1;
//   let obj = {};
//   let longestSubtring = 0;
//   let p1AleadyInserted = false;
//   if (s.length <= 1) {
//     return s.length;
//   }

//   while (p1 < s.length) {
//     if (p2 >= s.length) {
//       obj = {};

//       p1++;
//       p2 = p1 + 1;
//     }
//     if ((obj[p1] || obj[p1] === 0) && p1AleadyInserted) {
//       p1++;
//       let numberOfChars = Object.keys(obj).length;
//       if (numberOfChars > longestSubtring) {
//         longestSubtring = numberOfChars;
//       }
//       obj = {};
//       p1AleadyInserted = false;
//     }

//     if (!p1AleadyInserted) {
//       obj[s[p1]] = s[p1];
//       p1AleadyInserted = true;
//     }

//     if (obj[s[p2]] || obj[s[p2]] === 0) {
//       let numberOfChars = Object.keys(obj).length;
//       if (numberOfChars > longestSubtring) {
//         longestSubtring = numberOfChars;
//       }
//       obj = {};
//       p1++;
//       p2 = p1 + 1;
//       p1AleadyInserted = false;
//     } else {
//       if (s[p2]) {
//         obj[s[p2]] = s[p2];
//       }
//       let numberOfChars = Object.keys(obj).length;
//       if (numberOfChars > longestSubtring) {
//         longestSubtring = numberOfChars;
//       }
//       p2++;
//     }
//   }
//   return longestSubtring;
// };

// Brute Force Solution
// O(n^2) Time, O(n) Space
var lengthOfLongestSubstringBruteForce = function (s) {
  if (s.length <= 1) {
    return s.length;
  }

  let longestLength = 0;

  for (let left = 0; left < s.length; left++) {
    let seenChars = {};
    let currentLongest = 0;

    for (let right = left; right < s.length; right++) {
      const currentChar = s[right];
      if (seenChars[currentChar]) {
        break;
      } else {
        seenChars[currentChar] = currentChar;
        currentLongest++;
        longestLength = Math.max(longestLength, currentLongest);
      }
    }
  }
  return longestLength;
};

console.log(lengthOfLongestSubstringBruteForce('abcbdaac'));
console.log(lengthOfLongestSubstringOptimal('anviaj'));
