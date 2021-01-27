// https://www.coderbyte.com/language/Longest%20Word

// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
// If there are two or more words that are the same length,
// return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty.

// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love
const word = 'fun&!! time';

const longestWord = (word) => {
  const words = word.split(' ');
  let longestWord = '';
  for (let i = 0; i < words.length; i++) {
    let pureWord = words[i]
      .split('')
      .map((word) =>
        (word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) ||
        (word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122)
          ? word
          : null
      )
      .join('');

    if (pureWord.length > longestWord.length) {
      longestWord = pureWord;
    }
  }
  return longestWord;
};

const longestWord2 = (word) => {
  return word
    .split(' ')
    .map((word) =>
      word
        .split('')
        .map((char) =>
          (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
          (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
            ? char
            : null
        )
        .join('')
    )
    .sort((a, b) => b.length - a.length)[0];
};

console.log(longestWord(word));
console.log(longestWord2(word));
