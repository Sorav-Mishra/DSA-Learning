// 19. Remove Specific Characters
// Write a function that removes all occurrences of a specific character from a string.

function removesChar(str, remove) {
  return str.split(remove).join();
}

const str = "abhishek Mishra";
const remove = "M";

console.log(removesChar(str, remove));
