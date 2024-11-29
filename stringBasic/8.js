// 8. Check if a String Contains a Substring
//  Write a function that checks if a given string contains a specific substring (case insensitiv

function containsSubString(mainString, subString) {
  const lowerMainString = mainString.toLowerCase();
  const lowerSubString = subString.toLowerCase();

  return lowerMainString.includes(lowerSubString);
}
console.log(containsSubString("Coding is fun", "coding"));
