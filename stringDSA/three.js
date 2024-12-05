// 3. Longest Substring Without Repeating Characters
// Problem: Find the longest substring without repeating characters.
// Practice: LeetCode

// function lengthOfLongestSubstring(str) {
//   let charIndexMap = new Map();
//   let maxLength = 0;
//   let left = 0;

//   for (let right = 0; right < str.length; right++) {
//     const char = str[right];

//     //console.log(char);

//     if (charIndexMap.has(char) && charIndexMap.get(char) >= left) {
//       left = charIndexMap.get(char) + 1;
//     }

//     //console.log(left);

//     charIndexMap.set(char, right);
//     //console.log(charIndexMap);

//     maxLength = Math.max(maxLength, right - left + 1);
//     //console.log(maxLength);
//   }

//   return maxLength;
// }

// console.log(lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyz"));
// // // console.log(lengthOfLongestSubstring("bbbbb"));
// // // console.log(lengthOfLongestSubstring("pwwkew"));

// function longestSubstring(str) {
//   let charIndexMap = new Map();
//   let maxLength = 0;
//   let left = 0;

//   for (let right = 0; right < str.length; right++) {
//     const char = str[right];

//     if (charIndexMap.has[char] && charIndexMap.get[char] >= left) {
//       left = charIndexMap.get(char) + 1;
//     }
//   }
// }
// function lengthOfLongestSubstring(s) {
//   let charMap = {}; // Object to track characters and their counts
//   let left = 0; // Left pointer of the window
//   let maxLength = 0; // To store the longest length

//   for (let right = 0; right < s.length; right++) {
//     let char = s[right];

//     // If the character is already in the window, shrink the window
//     while (charMap[char]) {
//       charMap[s[left]]--; // Reduce count of the leftmost character
//       if (charMap[s[left]] === 0) delete charMap[s[left]]; // Clean up
//       left++;
//     }

//     // Add the current character to the map
//     charMap[char] = 1;

//     // Update the maximum length
//     maxLength = Math.max(maxLength, right - left + 1);
//   }

//   return maxLength;
// }

// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
// console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
// console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3

// function lengthOfLongestSubstring(str) {
//   let charMap = {};
//   let left = 0;
//   let maxLength = 0;

//   for (i = 0; i < str.length; i++) {
//     let char = str[i];

//     while (charMap[char]) {
//       charMap[str[left]]--;
//       if (charMap[str[left === 0]]) delete charMap[str[left]];
//       left++;
//     }

//     charMap[char] = 1;
//     maxLength = Math.max(maxLength, i - left + 1);
//   }
//   return maxLength;
// }

// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
// console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
// console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3

// 3. Longest Substring Without Repeating Characters
// Problem: Find the longest substring without repeating characters.
// Practice: LeetCode

// Sliding Window

function lengthOfLongestSubstring(str) {
  let charMap = {};
  let left = 0;
  let maxLength = 0;

  for (i = 0; i < str.length; i++) {
    let char = str[i];

    while (charMap[char]) {
      charMap[str[left]]--;
      if (charMap[str[char]] === 0) delete charMap[str[left]];
      left++;
    }

    charMap[char] = 1;

    maxLength = Math.max(maxLength, i - left + 1);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
