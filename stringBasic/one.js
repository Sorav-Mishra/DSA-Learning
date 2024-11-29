// 1. Reverse a String
// Write a function that reverses a given string without using the built-in reverse method.

function reverseString(str) {
  let reverse = "";

  for (i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;
}

console.log(reverseString("coding"));

function revString(str) {
  return str.split("").reverse().join("");
}

console.log(revString("coding"));
