// 11. Find the Index of a Substring
// Write a function that returns the index of the first occurrence of a substring in a string. If not found, return -1.

function findSubstringIndex(str, subStr) {
  return str.indexOf(subStr);
}

console.log(findSubstringIndex("hello world", "world")); // Output: 6
console.log(findSubstringIndex("hello world", "planet")); // Output: -1
