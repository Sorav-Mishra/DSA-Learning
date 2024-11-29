// 10. Capitalize the First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.s

function capitalizeWords(str) {
  return str
    .split(" ") // Split the string into an array of words
    .map(
      (
        word // Use map to iterate through each word
      ) => word.charAt(0).toUpperCase() + word.slice(1) // Capitalize first letter
    )
    .join(" "); // Join the words back into a single string
}

// Example usage:
const sentence = "capitalize the first letter of each word";
console.log(capitalizeWords(sentence)); // Output: "Capitalize The First Letter Of Each Word"
