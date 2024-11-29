// 3. Check Palindrome
// Write a function to check whether a string is a palindrome.

function arePalindrome(str) {
  const newStr = str.toLowerCase();

  const result = newStr.split("").reverse().join("");

  return newStr === result;
}

const testString = "madam";
//const testString = "coading";
console.log(arePalindrome(testString));
