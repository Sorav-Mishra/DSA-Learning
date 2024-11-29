// 8. Group Anagrams
// Problem: Group all anagrams together in a list of strings.
// Practice: LeetCode

// function groupAnagrams(strs) {
//   const anagrams = {};

//   for (const word of strs) {
//     const sortedWord = word.split("").sort().join("");

//     if (!anagrams[sortedWord]) {
//       anagrams[sortedWord] = [];
//     }

//     anagrams[sortedWord].push(word);
//   }

//   return Object.values(anagrams);
// }

// //const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// console.log(groupAnagrams(strs));
// // Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// function groupAnagrams(strs) {
//   const anagrams = {};

//   for (const word of strs) {
//     const sortedWord = word.split("").sort().join("");

//     if (!anagrams[sortedWord]) {
//       anagrams[sortedWord] = [];
//     }

//     anagrams[sortedWord].push(word);
//   }

//   return Object.values(anagrams);
// }

// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// console.log(groupAnagrams(strs));

function groupAnagrams(strs) {
  let map = new Map();

  for (let words of strs) {
    let sortedWord = words.split("").sort().join("");

    if (!map.has(sortedWord)) {
      map.set(sortedWord, []);
    }

    map.get(sortedWord).push(words);
  }

  return Array.from(map.values());
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));
