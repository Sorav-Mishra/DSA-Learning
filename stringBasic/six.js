// 6. Find the Longest Word in a Sentence
// Write a function that finds the longest word in a given sentence.

function findLongestWord(sentence) {
  const words = sentence.split(" ");

  let longestword = "";

  for (const word of words) {
    if (word.length > longestword.length) {
      longestword = word;
    }
  }
  return longestword;
}

console.log(findLongestWord("javascript is a verstile programming laungauge"));
