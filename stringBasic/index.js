// Adding and Removing Elements:
// .push(): Adds an element to the end.
// .pop(): Removes the last element.
// .shift(): Removes the first element.
// .unshift(): Adds an element to the beginning.

//const numbers = [1, 2, 3, 4, 5, 6];
//numbers.push(7);
//numbers.pop();
//numbers.shift();
//numbers.unshift(0);
//console.log(numbers);
//let removed = numbers.splice(1, 4);
//let removed = numbers.slice(0, 5);
//const fruits = new Array("apple", "banana", "cherry");
//fruits.push("lichi");
//fruits.pop();
//fruits.shift();
//fruits.unshift("orange");

//console.log(numbers);
//console.log(fruits);
//console.log(removed);

// function aadElement(arr, index, element) {
//   arr.splice(index, 0, element);
//   return arr;
// }

// const sampleArray = [1, 2, 3, 4, 5];
// console.log(aadElement(sampleArray, 5, 2000));

// function reverseArry(arry) {
//   // arry.reverse();
//   // return arry;

//   let reverse = [];
//   for (i = arry.length - 1; i >= 0; i--) {
//     reverse.push(arry[i]);
//   }
//   return reverse;
// }
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(reverseArry(num));

// function findMax(arr) {
//   let max = arr[0];

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       console.log(arr[i], max);
//       max = arr[i];
//     }
//   }
//   return max;
// }

// const testArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(findMax(testArry));

// function average(arr) {
//   let count = 0;

//   for (i = 0; i < arr.length; i++) {
//     count += arr[i];
//   }
//   return count / arr.length;
// }
// const myArr = [1, 2, 3];
// console.log(average(myArr));

// function frequencyOfEle(arr) {
//   let char = {};

//   for (i = 0; i < arr.length; i++) {
//     let ch = arr[i];
//     if (char[ch]) {
//       char[ch] += 1;
//     } else {
//       char[ch] = 1;
//     }
//   }

//   return char;
// }

// const arr = [1, 1, 2, 3, 3, 3, 4];
// console.log(frequencyOfEle(arr));

// function removeDup(arr) {
//   //return [...new Set(arr)];

//   let count = {};
//   let result = [];

//   for (i = 0; i < arr.length; i++) {
//     let ch = arr[i];

//     console.log(ch);
//     if (!count[ch]) {
//       count[ch] = true;
//       result.push(ch);
//     }
//   }

//   return result;
// }

// function removeDup(arr) {
//   let count = {};
//   let result = [];

//   for (i = 0; i < arr.length; i++) {
//     let ch = arr[i];

//     if (!count[ch]) {
//       count[ch] = true;
//       result.push(ch);
//     }
//   }
//   return result;
// }

// const myArr = [1, 2, 2, 3, 3, 4, 5];
// console.log(removeDup(myArr));

// Ascending order
// const numbers = [5, 3, 8, 1, 2];
// numbers.sort((a, b) => a - b); // For ascending numerical order
// console.log(numbers); // Output: [1, 2, 3, 5, 8]

// // Descending order
// numbers.sort((a, b) => b - a); // For descending numerical order
// console.log(numbers); // Output: [8, 5, 3, 2, 1]

// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// const sampleArray = [5, 3, 8, 1, 2];
// console.log(bubbleSort(sampleArray));

// function bubbleSort(arr) {
//   let n = arr.length;

//   for (i = 0; i < n - 1; i++) {
//     for (j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// function bubbleSort(arr) {
//   let n = arr.length;
//   for (i = 0; i < n - 1; i++) {
//     for (j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the found minimum element with the first element of the unsorted portion
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(selectionSort([64, 25, 12, 22, 11])); // Output: [11, 12, 22, 25, 64]
