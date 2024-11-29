// function printNum(n, result = "") {
//   if (n === 1) {
//     result += "1";
//     console.log(result);
//     return;
//   }

//   result += n + " ";

//   printNum(n - 1, result);
// }

// printNum(50);

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

// console.log(factorial(4));

function sum(n) {
  if (n === 1) {
    return 1;
  }

  return n + sum(n - 1);
}

console.log(sum(5));
