// 2. Check if Two Strings are Anagrams
// Problem: Check if two strings are anagrams of each other.
// Practice: LeetCode

// function areAnagrams(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   const newStr1 = str1.split("").sort().join("");
//   const newStr2 = str2.split("").sort().join("");

//   console.log(newStr1);
//   console.log(newStr2);

//   return newStr1 === newStr2;
// }

// console.log("Function1", areAnagrams("silent", "listen"));

// function areAnagrams(str1, str2) {
//   if (str1 === str2) {
//     return false;
//   }

//   let charStr = {};

//   for (let char of str1) {
//     charStr[char] = (charStr[char] || 0) + 1;
//   }

//   for (let char of str2) {
//     if (!charStr[char]) {
//       return false;
//     }
//     charStr[char] -= 1;
//   }

//   return true;
// }

// console.log("Function2", areAnagrams("listen", "silent"));
// console.log("Function2", areAnagrams("coding", "isFun"));

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let charStr = {};

  for (i = 0; i < str1.length; i++) {
    let char = str1[i];
    charStr[char] = (charStr[char] || 0) + 1;
    console.log(charStr);
  }
  for (i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!charStr[char]) {
      return false;
    }
    console.log(charStr);
    charStr[char]--;
  }
  return true;
}
console.log("Function2", areAnagrams("listen", "silent"));
console.log("Function2", areAnagrams("coding", "isFun"));
