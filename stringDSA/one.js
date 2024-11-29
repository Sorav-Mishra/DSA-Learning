// 1. Reverse a String
// Problem: Given a string, reverse it.
// Practice: LeetCode

function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr("coding is fun"));

// function reverseStr(str) {
//   let reverse = "";
//   for (i = str.length - 1; i >= 0; i--) {
//     const char = str[i];
//     reverse += char;
//   }
//   return reverse;
// }

// console.log(reverseStr("coding is fun"));

function reverse(str) {
  if (str.length === 0) return;
  let reverseStr = "";

  for (i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}
console.log(reverse("coding is fun"));
