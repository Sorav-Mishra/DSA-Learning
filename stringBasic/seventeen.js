// 18. Find the Character at the Nth Position
// Write a function that returns the character at the nth position of a string.

function nthPositionChar(str, n) {
  if (n > 0 && n <= str.length) {
    return str[n - 1];
  } else {
    return "Position out of the range";
  }
}

console.log(nthPositionChar("coding is fun", 6));
