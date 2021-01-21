//Create a function that reverces a string:
// 'Hi, my name is Danijel':
// should be 'lejinaD si eman ym ,iH':

var string = 'Hi, my name is Danijel';
var newString = '';
//second way
for (let i = string.length - 1; i >= 0; i--) {
  newString += string[i];
}
var firstWay = [...string].reverse().join('');
// var firstWay = string.split('').reverse().join('');

console.log(firstWay);
console.warn(newString);
