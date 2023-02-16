// https://leetcode.com/problems/valid-parentheses/description/

// solution #1 - first try
// space O(n)
// time O(n)
var isValid = function (s) {
  const stack = [];

  if (s.length < 2) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
      stack.push(s[i]);
    } else {
      const latParen = stack.pop();
      if (
        (latParen === '{' && s[i] === '}') ||
        (latParen === '[' && s[i] === ']') ||
        (latParen === '(' && s[i] === ')')
      ) {
        continue;
      } else {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
};

// solution #2
// space O(n)
// time O(n)
// with nagation on if statement
var isValid2 = function (s) {
  const stack = [];

  if (s.length < 2) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
      stack.push(s[i]);
    } else {
      const latParen = stack.pop();

      if (
        (latParen !== '{' || s[i] !== '}') &&
        (latParen !== '[' || s[i] !== ']') &&
        (latParen !== '(' || s[i] !== ')')
      ) {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
};

// better readability on this one and the best solution out of all of these
// space O(n)
// time O(n)
var isValid3 = function (s) {
  const stack = [];
  const parens = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  if (!s.length) {
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    if (parens[s[i]]) {
      stack.push(s[i]);
    } else {
      const lastLeftParens = stack.pop();
      if (parens[lastLeftParens] !== s[i]) {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
};

console.log(isValid3('()')); // true
console.log(isValid3('()[]{}')); // true
console.log(isValid3('(]')); // false
console.log(isValid3(')(){}')); // false
