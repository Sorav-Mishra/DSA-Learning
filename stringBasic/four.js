// 4. Remove Whitespace
// Write a function that removes all whitespace from a string (leading, trailing, and middle spaces).

function removeWhitespace(str) {
  return str.replaceAll(" ", "");
}

// function removeWhitespace(str) {
//   return str.replaceAll(" ", "");
// }
const testString = "coding is fun";

console.log(removeWhitespace(testString));
