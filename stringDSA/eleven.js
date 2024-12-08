// 20. Find All Anagrams in a String
// Problem: Given a string and a pattern, find all anagrams of the pattern in the string.
// Practice: LeetCode

function findAnagrams(s, p) {
  const result = [];
  const pFreq = new Array(26).fill(0);
  const sFreq = new Array(26).fill(0);

  const aCharCode = "a".charCodeAt(0);

  for (let char of p) {
    pFreq[char.charCodeAt(0) - aCharCode]++;
  }

  const pLen = p.length;

  for (let i = 0; i < s.length; i++) {
    sFreq[s.charCodeAt(i) - aCharCode]++;

    console.log("first:", sFreq);

    if (i >= pLen) {
      sFreq[s.charCodeAt(i - pLen) - aCharCode]--;
      console.log("secods:", sFreq);
    }
    if (arraysAreEqual(pFreq, sFreq)) {
      result.push(i - pLen + 1);
    }
  }

  return result;
}

function arraysAreEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const s = "cbaebabacd";
const p = "abc";
console.log(findAnagrams(s, p)); // Output: [0, 6]
