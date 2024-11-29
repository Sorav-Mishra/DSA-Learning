// 6. String to Integer (atoi)
// Problem: Implement the atoi function which converts a string to an integer.
// Practice: LeetCodea

// function myAtoi(str) {
//   str = str.trim();

//   if (str.length === 0) return 0;
//   let sign = 1;
//   let index = 0;

//   if (str[index] === "-") {
//     sign = -1;
//     index++;
//   } else if (str[index] === "+") {
//     index++;
//   }

//   let result = 0;
//   while (index < str.length && isDigit(str[index])) {
//     const digit = str[index] - "0";
//     result = result * 10 + digit;
//     index++;
//   }

//   result *= sign;

//   const INT_MAX = 2147483647;
//   const INT_MIN = -2147483648;
//   if (result > INT_MAX) return INT_MAX;
//   if (result < INT_MIN) return INT_MIN;

//   return result;
// }

// function isDigit(char) {
//   return char >= "0" && char <= "9";
// }

// function myAtoi(str) {
//   str = str.trim();

//

//   let sing = 1;
//   let index = 0;
//   let ans = 0;

//   if (str[index] == "-" || str[index] == "+") {
//     str[index] == "-" ? (sing = -1) : (sing = 1);
//     index++;
//   }

//   while (index < str.length && isDigit(str[index])) {
//     const digit = str[index] - "0";
//     ans = ans * 10 + digit;
//     index++;
//   }

//   ans *= sing;
//   // const INT_MAX = 2147483647;
//   // const INT_MIN = -2147483648;

//   const INT_MAX = Math.pow(2, 31) - 1; // 2147483647
//   const INT_MIN = -Math.pow(2, 31); // -2147483648

//   if (ans > INT_MAX) return INT_MAX;
//   if (ans < INT_MIN) return INT_MIN;

//   return ans;

//   function isDigit(char) {
//     return char >= "0" && char <= "9";
//   }
// }

// console.log(myAtoi("   -42"));
// console.log(myAtoi("4193 with words"));
// console.log(myAtoi("words and 987"));
// console.log(myAtoi("21474836460"));

// function myAtoi(str) {
//   str = str.trim();

//   let sign = 1;
//   let index = 0;
//   let ans = 0;

//   if (str[index] == "-" || str[index] == "+") {
//     sign = str[index] == "-" ? -1 : 1;
//     index++;
//   }

//   while (index < str.length && isDigit(str[index])) {
//     const digit = str[index] - "0";
//     ans = ans * 10 + digit;
//     index++;
//   }

//   ans *= sign;

//   const INT_MAX = Math.pow(2, 31) - 1;
//   const INT_MIN = -Math.pow(2, 31);

//   if (ans > INT_MAX) return INT_MAX;
//   if (ans < INT_MIN) return INT_MIN;

//   return ans;

//   function isDigit(char) {
//     return char >= "0" && char <= "9";
//   }
// }

// function myAtoi(str) {
//   str = str.trim();

//   let sign = 1;
//   let index = 0;
//   let ans = 0;

//   if (str[index] == "-" || str[index] == "+") {
//     sign = sign[index] == "-" ? -1 : 1;
//     index++;
//   }

//   while (index < str.length && isDigit(str[index])) {
//     const digit = str[index] - "0";
//     ans = ans * 10 + digit;
//     index++;
//   }

//   ans *= sign;

//   // const INT_MAX = Math.pow(2, 31) - 1;
//   // const INT_MIN = -Math.pow(2, 31);

//   // if (ans > INT_MAX) return INT_MAX;
//   // if (and < INT_MIN) return INT_MIN;

//   // return ans;

//   const INT_MAX = Math.pow(2, 31) - 1;
//   const INT_MIN = -Math.pow(2, 31);

//   if (ans > INT_MAX) return INT_MAX;
//   if (ans < INT_MIN) return INT_MIN;
//   return ans;

//   function isDigit(char) {
//     return char >= "0" && char <= "9";
//   }
// }

function myAtoi(str) {
  str = str.trim();

  let sign = 1;
  let index = 0;
  let ans = 0;

  if (str[index] == "-" || str[index] == "+") {
    sign = str[index] == "-" ? -1 : 1;
    index++;
  }

  while (index < str.length && isDigit(str[index])) {
    const digit = str[index] - "0";
    ans = ans * 10 + digit;
    index++;
  }

  ans *= sign;

  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);

  if (ans > INT_MAX) return INT_MAX;
  if (ans < INT_MIN) return INT_MIN;
  return ans;

  function isDigit(char) {
    return char >= "0" && char <= "9";
  }
}

console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("21474836460"));
