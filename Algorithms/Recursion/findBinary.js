const findBinary = (decimal, result) => {
  if (decimal === 0) {
    return result;
  }

  result = Math.floor(decimal % 2) + result;

  return findBinary(Math.floor(decimal / 2), result);
};

console.log(findBinary(233, ''));

233; // 2 =116 remainder 1
116; // 2 = 58 remainder 0
58; // 2 = 29 remainder 0
29; // 2 = 14 remainder 1
14; // 2 = 7 remainder 0
7; // 2 = 3 remainder 1
3; // 2 = 1 remainder 1
1; // 2 = 0 remainder 1
0; // 2 = 0 remainder 0
// 233 in binary is 11101001
