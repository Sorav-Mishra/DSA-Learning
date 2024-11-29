// 2. Count Vowels in a String
// Write a function to count the number of vowels in a given string.

function countVowels(str) {
  let count = 0;

  for (i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }

  return count;
}

const testString = "coding is fun";
console.log(countVowels(testString));
