//leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

// Space O(2n) => O(n)
// Time O(4n) => O(n)
var minRemoveToMakeValid = function (s) {
  const stack = []; // O(n)
  const newString = s.split(''); // s: O(n) t: O(n)

  for (let i = 0; i < newString.length; i++) {
    // t: O(n)
    if (newString[i] === ')' && !stack.length) {
      newString[i] = '';
    }
    if (newString[i] === '(') {
      stack.push(i);
    }

    if (newString[i] === ')' && stack.length) {
      stack.pop();
    }
  }

  while (stack.length) {
    //t: O(n)
    const currentIndex = stack.pop();
    newString[currentIndex] = '';
  }

  return newString.join(''); // t: O(n)
};

console.log(minRemoveToMakeValid('))(('));
console.log(minRemoveToMakeValid('(abc(d)'));
console.log(minRemoveToMakeValid('a(bc(d)'));
