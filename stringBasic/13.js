// 14. Check if Two Strings are Anagrams
// Write a function that checks if two strings are anagrams of each other.

function areAnagrams(str1, str2) {
  if (str1.lenght !== str2.lenght) {
    return false;
  }

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  //   console.log(sortedStr1);
  //   console.log(sortedStr2);

  return sortedStr1 === sortedStr2;
}
console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("coding", "is fun"));
