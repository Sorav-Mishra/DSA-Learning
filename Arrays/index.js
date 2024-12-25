// let fruits = ["banana", "apple", "mango"];
// //console.log(frutits);]
// // console.log("index:", fruits.indexOf("banana"));
// // console.log("includes:", fruits.includes("lichi"));
// // console.log("unsort:", fruits);
// // console.log("sort:", fruits.sort());
// console.log("orignal:", fruits);
// console.log("join:", fruits.join(", "));

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const total = nums.reduce((acc, num) => acc + num, 0);
// const tota = nums.reduce((acc, num) => {
//   return acc + num;
// }, 0);

// const nums2 = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, , 6];
// console.log("1:", nums2);
// let unique = [...new Set(nums2)];
// console.log("2:", unique);

//console.log("1:", total);
//console.log("2:", tota);
// nums.push(11);
// console.log("push", nums);
// nums.pop();
// console.log("pop", nums);
// nums.unshift(0);
// console.log("unshift", nums);
// nums.shift();
// console.log("shift", nums);

// nums.splice(0, 0, 100);
// console.log("splice:", nums);

// let subArray = nums.slice(0, 3);
// console.log("slice:", subArray);

// let names = new Array("ab", "bd", "as", "avd");
// let mearge = nums.concat(names);
// console.log("concat", mearge.join(" "));

// console.log(nums);
// console.log(names);
// console.log(nums[0]);
// nums[1] = 25;
// console.log(nums);
// names[0] = "abhishek";
// console.log(names);
//console.log(nums.join(" "));
// let result = [];
// nums.forEach((num) => result.push(num));
// console.log("forEach:", result.join(" "));

// let result1 = [];
// let squares = nums.map((num) => result1.push(num ** 2));
// console.log("map squares:", result1.join(" "));
// let evenNums = nums.filter((num) => num % 2 === 0);
// console.log("filter method:", evenNums);
// let found = nums.find((num) => num > 5);
// console.log(found);
// let index = nums.findIndex((num) => num > 5);
// console.log(index);
// nums.sort((a, b) => b - a);
// console.log(nums);

// const people = [{ age: 35 }, { age: 25 }, { age: 50 }];
// console.log("1:", people);
// people.sort((a, b) => a.age - b.age);
// console.log("2:", people);

// const nested = [1, 3, 5, [2, 4, 5], [2, 5, 1, 3, 2, [2, 4, 3]]];
// console.log("1:", nested);

// console.log("2:", nested.flat(Infinity));

// 1. Find the Maximum and Minimum Element in an Array
// function findMaxMin(arr) {
//   let min = arr[0];
//   let max = arr[0];

//   for (let num of arr) {
//     if (num < min) min = num;
//     if (num > max) max = num;
//   }
//   return { min, max };
// }
//console.log(findMaxMin([1, 5, 3, 7, 9, 5, 7]));

// function findMaxMin(arr) {
//   let min = arr[0];
//   let max = arr[0];

//   for (let num of arr) {
//     if (num < min) min = num;
//     if (num > max) max = num;
//   }
//   return { min, max };
// }

// // 2. Reverse an Array

// function reverse(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
//   return arr;
// }
// let arr = [1, 5, 3, 7, 9, 5, 7];
//console.log(reverse(arr));

//Binary Search: Implement binary search for sorted arrays.

// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) return mid;
//     if (arr[mid] < target) left = mid + 1;
//     else right = mid - 1;
//   }
//   return -1;
// }
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// console.log(binarySearch(nums, 11));

// function binarySearch(arr, target) {
//   let sortedArray = arr.sort((a, b) => a - b);
//   let left = 0;
//   let right = sortedArray.length - 1;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (sortedArray[mid] === target) return mid;
//     if (sortedArray[mid] < target) left = mid + 1;
//     else right = mid - 1;
//   }
//   return -1;
// }

// let nums = [1, 5, 20, 4, 5, 6, 7, 8, 9, 10, 11];
// console.log(binarySearch(nums, 20));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//1: Create and Initialize a 2D Array

// Input: Rows and Columns
// const rows = 3;
// const cols = 3;

// let value = 1;
// const arr = Array.from({ length: rows }, () =>
//   Array.from({ length: cols }, () => value++)
// );

// console.log("2D Array with Incremental Values:");
// arr.forEach((row) => console.log(row));

// let rows1 = 3;
// let cols1 = 3;

// let value1 = 1;
// const arr1 = Array.from(
//   { length: rows1 },
//   () => Array.from({ length: cols1 }).fill(0)
//   // Array.from({ length: cols1 }, () => value1++)
// );

// console.log("2D Array");
// arr1.forEach((row) => console.log(row));

// let row = 3;
// let cols = 3;

// let value = 1;
// const arr = Array.from({ length: row }, () =>
//   Array.from({ length: cols }, () => value++)
// );

// console.log("2D");
// arr.forEach((row) => console.log(row));

// const rows = parseInt(prompt("Enter the number of the rows"));
// const cols = parseInt(prompt("Enter the number od the cols"));

// import readline from "readline";
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // Function to ask a question and get input
// const getInput = (query) =>
//   new Promise((resolve) =>
//     rl.question(query, (answer) => resolve(parseInt(answer)))
//   );

// (async () => {
//   try {
//     const rows = await getInput("Enter the number of rows: ");
//     const cols = await getInput("Enter the number of columns: ");

//     // Generate the 2D array
//     const arr = Array.from({ length: rows }, (_, i) =>
//       Array.from({ length: cols }, (_, j) => i + j)
//     );

//     console.log("The 2D array is:");
//     arr.forEach((row) => console.log(row));

//     rl.close();
//   } catch (err) {
//     console.error("Error:", err.message);
//     rl.close();
//   }
// })();

// 2D ARRAYS **************************************************************//

// let rows = 3;
// let cols = 3;
// value = 1;
// const arr = Array.from({ length: rows }, () =>
//   Array.from(
//     {
//       length: cols,
//     },
//     () => value++
//   )
// );

// console.log("2D Array");
// arr.forEach((row) => console.log(row));

// Write a program to print the elements of a 2D array row by row.

// const array2D = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log("Printing 2D array row by row");

// for (i = 0; i < array2D.length; i++) {
//   let row = "";
//   for (j = 0; j < array2D[i].length; j++) {
//     row += array2D[i][j] + " ";
//   }
//   //console.log("first", row);
//   console.log("second", row.trim());
// }

// const array2D = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log("Printing 2D Array");
// for (i = 0; i < array2D.length; i++) {
//   row = "";
//   for (j = 0; j < array2D[i].length; j++) {
//     row += array2D[i][j] + " ";
//   }
//   console.log(row.trim());
// }

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the number of rows: ", (rows) => {
//   rl.question("Enter the number of columns: ", (cols) => {
//     const array2D = [];
//     let counter = 1;

//     // Fill the 2D array with numbers

//     for (i = 0; i < rows; i++) {
//       const row = [];
//       for (j = 0; j < cols; j++) {
//         row.push(counter++);
//       }
//       array2D.push(row);
//     }

//     console.log("Generated 2D Array:");
//     for (i = 0; i < array2D.length; i++) {
//       console.log(array2D[i].join(" "));
//     }

//     rl.close();
//   });
// });

// const Array2D = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (i = 0; i < Array2D.length; i++) {
//   let row = "";
//   for (j = 0; j < Array2D[i].length; j++) {
//     console.log(Array2D[i][j]);
//     row += Array2D[i][j] + " ";
//   }
//   //console.log(row.trim());
// }

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the number of rows: ", (rows) => {
//   rl.question("Enter the number of colms: ", (cols) => {
//     const Array2D = [];
//     let value = 1;

//     for (i = 0; i < row; i++) {
//       const row = [];
//     }
//     for (j = 0; j < cols; j++) {
//       row.push(value++);
//     }

//     Array2D.push(row);

//     console.log("Generated the 2D Array :");
//     for (i = 0; i < Array2D.length; i++) {
//       console.log(Array2D[i].join(" "));
//     }

//     rl.close();
//   });
// });

// const readline = require("readline")

// cost rl = readline.createInterface({

//   input: process.stdin,
//   output: process.stdout,

// })

// rl.question('Enter the number of rows: ', (rows) => {
//   rl.question('Enter the number of coln: ', (coln) => {
//     const Array2D = []
//     let value1 = 1

//     for(i = 0; i < row; i++) {
//       const row = []
//     }
//     for(j = 0; j < cols; j++) {
//       row.push(value++)
//     }
//   })
// })

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the number of rows: ", (rows) => {
//   rl.question("Enter the number of colms: ", (cols) => {
//     const Array2D = [];
//     let value = 1;

//     for (i = 0; i < row; i++) {
//       const row = [];
//     }
//     for (j = 0; j < cols; j++) {
//       row.push(value++);
//     }

//     Array2D.push(row);

//     console.log("Generated the 2D Array :");
//     for (i = 0; i < Array2D.length; i++) {
//       console.log(Array2D[i].join(" "));
//     }

//     rl.close();
//   });
// });

//console.log("hellow from solo namaste from india")

// console.log("hello from solo namate from india");
// console.log("coding is fun");

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the number of rows: ", (rows) => {
//   rl.question("Enter the number of colms: ", (cols) => {
//     const Array2D = [];
//     let value = 1;

//     for (i = 0; i < row; i++) {
//       const row = [];
//     }
//     for (j = 0; j < cols; j++) {
//       row.push(value++);
//     }

//     Array2D.push(row);

//     console.log("Generated the 2D Array :");
//     for (i = 0; i < Array2D.length; i++) {
//       console.log(Array2D[i].join(" "));
//     }

//     rl.close();
//   });
// });

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the number of rows ", (rows) => {
//   rl.question("Enter the number of cols: ", (cols) => {
//     rows = parseInt(rows);
//     cols = parseInt(cols);

//     const Array2D = [];
//     let value = 1;

//     for (i = 0; i < rows; i++) {
//       const row = [];
//       for (j = 0; j < cols; j++) {
//         row.push(value++);
//       }
//       Array2D.push(row);
//     }

//     console.log("Generated the 2D Array:");
//     for (i = 0; i < Array2D.length; i++) {
//       console.log(Array2D[i].join(" "));
//     }
//     rl.close();
//   });
// });

// const readline = require("readline");

// // const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the numbers of rows: ", (rows) => {
//   rl.question("Enter the numbers of cols: ", (cols) => {
//     rows = parseInt(rows);
//     cols = parseInt(cols);

//     const Array2D = [];
//     let value = 1;

//     for (i = 0; i < rows; i++) {
//       const row = [];
//       for (j = 0; j < cols; j++) {
//         row.push(value++);
//       }

//       Array2D.push(row);
//     }

//     console.log("Generated the 2D Array:");
//     for (i = 0; i < Array2D.length; i++) {
//       console.log(Array2D[i].join(" "));
//     }
//     rl.close();
//   });
// });

// const Array2D = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(Array2D);

// const rows = 3;
// const cols = 4;

// const Array2D = [];

// for (i = 0; i < rows; i++) {
//   const row = [];
//   for (j = 0; j < cols; j++) {
//     row.push(i * cols + j + 1);
//   }

//   Array2D.push(row);
// }

// console.log(Array2D);
// console.log("why i am not doing anything");

// function twoSum(nums, target) {
//   for (i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }

//   return [];
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// target = 3;
// console.log(twoSum(num, target));

// function removeDuplicates(nums) {
//   if (nums.length === 0) return 0;

//   let k = 0;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[k]) {
//       k++;
//       nums[k] = nums[i];
//     }
//   }

//   return k + 1;
// }

// let num1 = [1, 1, 2, 2, 3, 3];

// console.log(removeDuplicates(num1));

function divide(num) {
  left = 0;
  right = num.length - 1;

  let mid = Math.floor((left + right) / 2);
  return mid;
}

nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log("mid", divide(nums2));
