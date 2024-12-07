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

//4. Longest Common Prefix
// Problem: Find the longest common prefix among an array of strings.
// Practice: LeetCode

// A prefix is the beginning part of a string, starting from the first character, and it must appear in the same order at the start of another string.

// ["flower", "flow", "flight"] fl

// ************************************************************************************
//************************************************************************************** */
// Example Walkthrough
// For strs = ["flower", "flow", "flight"]:

// Start with "flower" as the prefix:

// prefix = "flower"
// Compare "flower" with "flow":

// "flow".indexOf("flower") !== 0 → Remove the last character ("flower" → "flowe").
// "flow".indexOf("flowe") !== 0 → Remove again ("flowe" → "flow").
// Match! Prefix is now "flow".

// Compare "flow" with "flight":

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
