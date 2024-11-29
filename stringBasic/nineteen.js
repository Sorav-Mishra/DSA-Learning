// 20. Check if String Starts with Substring
// Write a function that checks if a string starts with a given substring.

function startsWithSubstring(str, substring) {
  return str.startsWith(substring);
}
const testString = "coding is fun";
const substring = "coding";

console.log(startsWithSubstring(testString, substring));
