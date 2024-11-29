// 7. Count the Occurrences of a Substring
// Write a function that counts how many times a specific substring appears in a string.

function OccurrencesSubstring(str, substring) {
  let count = 0;
  let index = str.indexOf(substring);

  while (index !== -1) {
    count++;
    index = str.indexOf(substring, index + 1);
  }

  return count;
}

console.log(OccurrencesSubstring("coding is fun coding", "is"));
