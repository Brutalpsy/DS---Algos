//https://leetcode.com/problems/valid-palindrome-ii/

// Optimal solution
// O(n) Time, 0(1) space
var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  const validSubPalindrome = (s, start, end) => {
    while (start <= end) {
      if (s[start] !== s[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  };

  while (left <= right) {
    if (s[left] !== s[right]) {
      return (
        validSubPalindrome(s, left + 1, right) ||
        validSubPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true;
};

// optimal solution #2
// O(n) time, O(1) space
// var validPalindrome = function (s) {
//   let leftUsed = false;
//   let rightUsed = false;
//   let orginalString = s;
//   let newString = '';
//   let p1 = 0;
//   let p2 = s.length - 1;
//   let p2Old = 0;
//   let p1Old = 0;

//   while (p1 <= p2) {
//     if (s[p1] != s[p2]) {
//       if (!leftUsed) {
//         leftUsed = true;
//         p2Old = p2;
//         p1Old = p1;
//         newString = orginalString.slice(0, p1) + orginalString.slice(p1 + 1);
//         p2 = p2Old - 1;
//         s = newString;
//       } else if (!rightUsed) {
//         rightUsed = true;
//         p1 = p1Old;
//         newString =
//           orginalString.slice(0, p2Old) + orginalString.slice(p2Old + 1);
//         s = newString;
//         p2 = p2Old - 1;
//       } else {
//         return false;
//       }
//     } else {
//       p1++;
//       p2--;
//     }
//   }

//   return true;
// };

['raceacar', 'abccdba', 'abcdefdba', '', 'a', 'ab'].forEach((string) =>
  console.log(string, validPalindrome(string))
);
