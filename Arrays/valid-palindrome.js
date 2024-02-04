//https://leetcode.com/problems/valid-palindrome/

// two pointers
// Time O(n), Space O(1)
const isPalindrome = (s) => {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (s[left] != s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// two pointers from center
// const isPalindrome = (s) => {
//   s = s.replace(/\W/g, '').toLowerCase();

//   let center = Math.floor((s.length - 1) / 2);
//   let left = center;
//   let right = s.length % 2 === 0 ? s.length / 2 : center;

//   while (left >= 0 && right < s.length) {
//     let ll = s[left];
//     let rr = s[right];
//     if (ll != rr) {
//       return false;
//     }
//     left--;
//     right++;
//   }

//   return true;
// };

// compare against reverse
// const isPalindrome = (s) => {
//   s = s.replace(/\W/g, '').toLowerCase();
//   let reversed = '';

//   for (let i = s.length - 1; i >= 0; i--) {
//     reversed += s[i];
//   }
//   return reversed === s;
// };

//recursive approach
const isPalindromeRecursive = (s) => {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  if (s.length === 0 || s.length === 1) {
    return true;
  }

  if (s[0] === s[s.length - 1]) {
    return isPalindrome(s.substring(1, s.length - 1));
  }
  return false;
};

['aabaa', 'aabbaa', 'abc', 'a', '', 'A man, a plan, a canal: Panama'].forEach(
  (string) => console.log(`${string} - ${isPalindrome(string)}`)
);
