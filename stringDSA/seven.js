// function longestPalindrome(s) {
//   if (s.length === 0) return "";

//   let t = "#" + s.split("").join("#") + "#";
//   let n = t.length;
//   let p = new Array(n).fill(0);
//   let center = 0,
//     right = 0;

//   let maxLen = 0;
//   let maxCenter = 0;

//   for (i = 0; i < n; i++) {
//     if (i < right) {
//       p[i] = Math.min(right - i, p[2 * center - i]);
//     }

//     while (
//       i + p[i] + 1 < n &&
//       i - p[i] - 1 >= 0 &&
//       t[i + p[i] + 1] === t[i - p[i] - 1]
//     ) {
//       p[i]++;
//     }

//     if (i + p[i] > right) {
//       center = i;
//       right = i + p[i];
//     }

//     if (p[i] > maxLen) {
//       maxLen = p[i];
//       maxCenter = i;
//     }
//   }

//   let start = (maxCenter - maxLen) / 2;
//   return s.substring(start, start + maxLen);
// }

// console.log(longestPalindrome("abhishek"));

// function longestPalindrome(s) {
//   if (s.length < 2) return s;

//   let maxLength = 0,
//     longest = "";

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       let substr = s.slice(i, j + 1); // Get substring from i to j
//       //console.log(substr);
//       if (isPalindrome(substr) && substr.length > maxLength) {
//         maxLength = substr.length;
//         longest = substr;
//       }
//     }
//   }

//   console.log(longest);
//   return longest;

//   function isPalindrome(str) {
//     return str === str.split("").reverse().join("");
//   }
// }
// console.log(longestPalindrome("abajkkjhj"));
// //console.log(longestPalindrome("abaabhishkfkjdiji"));

// //isPalindrome(substr)

function longestPalindrome(str) {
  let maxLength = 0;
  let longest = "";

  for (i = 0; i < str.length; i++) {
    for (j = i; j < str.length; j++) {
      let subString = str.slice(i, j + 1);
      if (isPalindrome(subString) && subString.length > maxLength) {
        maxLength = subString.length;
        longest = subString;
      }
    }

    return longest;
  }

  function isPalindrome(subStr) {
    return subStr == subStr.split("").reverse().join("");
  }
}

console.log(longestPalindrome("abajkkjhj"));
console.log(longestPalindrome("madamfkjhfh"));
