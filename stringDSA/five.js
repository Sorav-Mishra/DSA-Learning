// function isPalindrome(s) {
//   const cleanedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

//   let left = 0;
//   let right = cleanedStr.length - 1;

//   while (left < right) {
//     if (cleanedStr[left] !== cleanedStr[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// }
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));

// function isPalindrome(str) {
//   const cleanedstr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

//   let left = 0;
//   let right = cleanedstr.length - 1;

//   while (left < right) {
//     if (cleanedstr[left] !== cleanedstr[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// 5. Valid Palindrome
// Problem: Determine if a string is a palindrome.
// Practice: LeetCode

function isPalindrome(str) {
  let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome("abhishek"));
console.log(isPalindrome("madam")); // true
