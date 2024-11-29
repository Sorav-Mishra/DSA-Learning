// 10. Implement strStr()
// Problem: Return the index of the first occurrence of a substring within a string.
// Practice: LeetCode
// function strStr(str1, str2) {
//   for (i = 0; i <= str1.length - str2.length; i++) {
//     if (str1.substring(i, i + str2.length) === str2) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(strStr("hello", "llo"));

function strStr(str1, str2) {
  for (i = 0; i <= str1.length - str2.length; i++) {
    if (str1.substring(i, i + str2.length) === str2) {
      return i;
    }
  }

  return -1;
}

console.log(strStr("hello", "ll"));
