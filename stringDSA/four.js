// 4. Longest Common Prefix
// Problem: Find the longest common prefix among an array of strings.
// Practice: LeetCode

// function longestCommonPrefix(strs) {
//   if (strs.length === 0) {
//     return "";
//   }

//   let prefix = strs[0];
//   for (i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.slice(0, -1);
//       if (prefix === "") return "";
//     }
//   }

//   return prefix;
// }

// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
// console.log(longestCommonPrefix(["interview", "internet", "internal"])); // Output: "int"

// function longestCommonPrefix(strs) {
//   if (strs.length === 0) return "";

//   let prefix = strs[0];
//   for (i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.slice(0, -1);

//       if (prefix === "") return "";
//     }
//   }
//   return prefix;
// }
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix("dog", "cat", "apple"));

// function longestCommonPrefix(strs) {
//   let prefix = strs[0];

//   for (i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.slice(0, -1);
//       if (!prefix) return "";
//     }
//   }

//   return prefix;
// }

function longestCommonPrefix(strs) {
  let prefix = strs[0];

  for (i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }

  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix("dog", "cat", "apple"));
