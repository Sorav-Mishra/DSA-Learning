// 15. Extract Substring
// Write a function that extracts a substring from the given string starting from index start to index end using the slice or substring method.

function extractsSubString(str, start, end) {
  return str.slice(start, end);
}

console.log(extractsSubString("coding is fun", 0, 10));
