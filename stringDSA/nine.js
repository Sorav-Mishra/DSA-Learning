// function countAndSay(n) {
//   let current = "1";

//   for (i = 1; i < n; i++) {
//     let nextTerm = "";
//     let count = 1;
//     for (j = 0; j < current.length; j++) {
//       if (j + 1 < current.length && current[j] === current[j + 1]) {
//         count++;
//       } else {
//         nextTerm += count.toString() + current[j];
//         count = 1;
//       }
//     }

//     current = nextTerm;
//     //console.log(nextTerm);
//   }

//   return current;
// }
// console.log(countAndSay(5));

function countAndSay(n) {
  let current = "1";

  for (i = 1; i < n; i++) {
    let nextTerm = "";
    let count = 1;

    for (j = 0; j < current.length; j++) {
      if (j + 1 < current.length && current[j] === current[j + 1]) {
        count++;
      } else {
        nextTerm += count.toString() + current[j];
        count = 1;
      }
    }
    current = nextTerm;
  }

  return current;
}

console.log(countAndSay(5));
