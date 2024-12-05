// let fruits = ["banana", "apple", "mango"];
// //console.log(frutits);]
// // console.log("index:", fruits.indexOf("banana"));
// // console.log("includes:", fruits.includes("lichi"));
// // console.log("unsort:", fruits);
// // console.log("sort:", fruits.sort());
// console.log("orignal:", fruits);
// console.log("join:", fruits.join(", "));

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
console.log(findMaxMin([1, 5, 3, 7, 9, 5, 7]));

function findMaxMin(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }
  return { min, max };
}

// 2. Reverse an Array

function reverse(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
let arr = [1, 5, 3, 7, 9, 5, 7];
console.log(reverse(arr));
