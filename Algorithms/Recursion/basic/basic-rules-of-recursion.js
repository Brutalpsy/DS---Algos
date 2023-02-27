const inseption = (number) => {
  debugger;
  if (number > 5) {
    return 'done';
  }
  return inseption(number + 1);
};

console.log(inseption(1));

// 1. Indentify the base case
// 2. Identify the recursive case
// 3. Get closer and close and return when needed. Usually you have two returns

//this function basically translates to this:
// inseption(inseption(inseption(inseption(inseption(inseption('done')))))
