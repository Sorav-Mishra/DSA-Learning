// 17. Replace All Occurrences of a Substring
// Write a function that replaces all occurrences of a substring with another string.

function allOccurrences(str, target, replacement) {
  return str.replaceAll(target, replacement);
}

const originalString = "i love coding. toding is fun";
const modifiedString = allOccurrences(originalString, "toding", "coading");
console.log(modifiedString);
