// Find the Intersection of Two Arrays
// Given two arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays.

function intersect(nums1, nums2) {
  const map = new Map();
  const result = [];

  // Count the occurrences of each element in nums1
  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const num of nums2) {
    if (map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }

  return result;
}

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersect(nums1, nums2));
