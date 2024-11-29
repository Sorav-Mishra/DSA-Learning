// 5. Find the First Non-Repeating Character
// Write a function that finds the first non-repeating character in a string.

function firstNonRepeating(str) {
  let charCount = {};
  for (i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log(charCount);
  for (i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }
}
console.log(firstNonRepeating("abhishke"));
