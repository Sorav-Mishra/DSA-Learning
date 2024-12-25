// Find the Maximum Product of Two Integers in an Array
// Given an integer array nums, find the maximum product of two integers in the array.

// function Maximum(nums) {
//   nums.sort((a, b) => a - b);

//   let product1 = nums[nums.length - 1] * nums[nums.length - 2];
//   let product2 = nums[0] * nums[1];

//   return Math.max(product1, product2);
// }
// console.log(Maximum([1, 2, 3, 4]));

// Rotate an Array
// Given an array nums, rotate the array to the right by k steps, where k is non-negative.

// function rotate(arr, k) {
//   const n = arr.length;

//   k = k % n;

//   function reverse(start, end) {
//     while (start < end) {
//       [arr[start], arr[end]] = [arr[end], arr[start]];
//       start++;
//       end--;
//     }
//   }

//   reverse(0, n - 1);
//   reverse(0, k - 1);
//   reverse(k, n - 1);
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let k = 1;

// rotate(arr, k);
// console.log(arr);

// function rotate(arr, k) {
//   const n = arr.length;

//   k = k % n;

//   function reverse(start, end) {
//     while (start < end) {
//       [arr[start], arr[end]] = [arr[end], arr[start]];
//       start++;
//       end--;
//     }
//   }

//   reverse(0, n - 1);
//   //console.log("After reversing the entire array:", arr);

//   //   reverse(0, k - 1);
//   //   console.log("After reversing the first k elements:", arr);

//   reverse(k, n - 1);
//   // console.log("After reversing the remaining elements:", arr);

//   //   reverse(0, n - 1);
//   //   console.log("1", arr);
//   //   reverse(0, k - 1);
//   //   console.log("2", arr);
//   //   reverse(k, n - 1);
//   //   console.log("3", arr);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let k = 3;
// rotate(arr, k);
// console.log(arr);

// Move Zeros to the End
// Given an array of integers, move all the zeros to the end of the array while maintaining the relative order of the non-zero elements.

// function movedZero(arr) {
//   let index = 0;

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[index] = arr[i];
//       index++;
//     }
//   }

//   for (i = index; i < arr.length; i++) {
//     arr[i] = 0;
//   }

//   return arr;
// }

// arr = [0, 1, 2, 0, 3, 0, 5, 0, 6, 7, 8, 0, 5, 4, 0];

// movedZero(arr);
// console.log(arr);

// function movedZero(arr) {
//   let index = 0;

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[index] = arr[i];
//       index++;
//     }
//   }
//   console.log(arr);

//   for (i = index; i < arr.length; i++) {
//     arr[i] = 0;
//   }

//   return arr;
// }

// let arr = [0, 1, 0, 4, 0, 5, 0, 6, 0, 8, 0];
// movedZero(arr);

// console.log(arr);

// Find the Missing Number
// Given an array of integers from 1 to n with one number missing, find the missing number.

// function findMissingNumber(arr, n) {
//   const expectedSum = (n * (n + 1)) / 2;
//   console.log("expectedSum", expectedSum);

//   // const actualSum = arr.reduce((sum, num) => sum + num, 0);
//   const actualSum = arr.reduce(function (sum, num) {
//     console.log(`sum is ${sum} and num is ${num}`);
//     return sum + num;
//   }, 0);

//   return expectedSum - actualSum;
// }

// let arr = [1, 2, 4, 5];
// let n = 5;
// console.log("missing number", findMissingNumber(arr, n));

// function missingNumber(arr, n) {
//   let expectedSum = (n * (n + 1)) / 2;
//   // const actualSum = arr.reduce(function (sum, num) {
//   //   console.log(`sum is ${sum} and num is ${num}`);
//   //   return sum + num;
//   // }, 0);
//   actualSum = arr.reduce((sum, num) => sum + num, 0);

//   return expectedSum - actualSum;
// }

// let arr = [1, 2, 4, 5];
// let n = 5;
// console.log("missing number", missingNumber(arr, n));

// console.log("coding is fun");

// console.log("hello from solo namste from india");

// Create a 2D Array
// Create a 2D array and print its elements row by row.

// const Array2D = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(Array2D);

// rows = 3;
// cols = 4;
// let Array2D = [];

// for (i = 0; i < rows; i++) {
//   const row = [];
//   for (j = 0; j < cols; j++) {
//     row.push(i * cols + j + 1);
//   }

//   Array2D.push(row);
// }
// console.log(Array2D);

// const matix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9, 10],
// ];

// console.log(matix);
// for (let row of matix) {
//   const rowString = row;
//   console.log(rowString);
// }

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];
// console.log(twoSum(num, 24));

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       // Corrected condition
//       if (nums[i] + nums[j] === target) {
//         // Added if condition
//         return [i, j]; // Return only when the condition is true
//       }
//     }
//   }
//   return []; // If no solution is found, return an empty array
// }

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];
// console.log(twoSum(nums, 14)); // Test with target 24

function twoSum(nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
target = 3;
console.log(twoSum(num, target));

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let k = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k]) {
      k++;
      nums[k] = nums[i];
    }
  }
  return k + 1;
}

let num1 = [1, 2, 2, 3, 3, 4, 4];
console.log(removeDuplicates(num1));

function removeElement(nums, value) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== value) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

let n = [1, 2, 2, 2, 2, 3, 4, 5];
console.log(removeElement(n, 2));

function searchInsert(nums, target) {
  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + right / 2);
  }

  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
  return left;
}
