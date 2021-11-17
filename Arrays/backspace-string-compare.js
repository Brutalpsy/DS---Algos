//https://leetcode.com/problems/backspace-string-compare/

// brute force
// O(a+b) / O(a+b)
var backspaceCompare = function (s, t) {
  let buildString = (string) => {
    var builtArray = [];
    for (let i = 0; i < string.split('').length; i++) {
      if (string[i] === '#') {
        builtArray.pop();
      } else {
        builtArray.push(string[i]);
      }
    }
    return builtArray.join('');
  };

  var finalS = buildString(s);
  let finalT = buildString(t);

  return finalS === finalT;
};

// o(a+b) / O(1)
// optimal solution -- two pointer
var backspaceCompare2 = function (s, t) {
  let p1 = s.length - 1;
  let p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === '#' || t[p2] === '#') {
      if (s[p1] === '#') {
        let backCount = 2;

        while (backCount > 0) {
          p1--;
          backCount--;

          if (s[p1] === '#') {
            backCount += 2;
          }
        }
      }
      if (t[p2] === '#') {
        let backCount = 2;

        while (backCount > 0) {
          p2--;
          backCount--;

          if (t[p2] === '#') {
            backCount += 2;
          }
        }
      }
    }

    if (s[p1] !== t[p2]) {
      return false;
    }
    p1--;
    p2--;
  }
  return true;
};

// another messy  brute force solution
// var backspaceCompare = function (s, t) {
//   let newS = s.split('');
//   let i = 0;
//   let y = 0;

//   while (i < newS.length) {
//     if (newS[i] === '#') {
//       newS[i] = '';
//       newS[i - 1] = '';
//       i = 0;
//       newS = newS.join('').split('');
//     } else {
//       i++;
//     }
//   }
//   let newT = t.split('');
//   while (y < newT.length) {
//     if (newT[y] === '#') {
//       newT[y] = '';
//       newT[y - 1] = '';
//       y = 0;
//       newT = newT.join('').split('');
//     } else {
//       y++;
//     }
//   }

//   return newS.join('') === newT.join('');
// };

console.log(backspaceCompare('a##c', '#a#c'));
console.log(backspaceCompare2('abc#d', 'abzz##d'));
