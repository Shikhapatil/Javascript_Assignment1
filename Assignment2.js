/*let x = [1, 3454, 655, 24, 7, 8]
find the largest number in x without using sort method*/

function findLargestNumber(x) {
  let largestNumber = x[0];
  for (let i = 1; i < x.length; i++) {
    if (x[i] > largestNumber) {
      largestNumber = x[i];
    }
  }
  return largestNumber;
}

let x = [1, 3454, 655, 24, 7, 8];
console.log(findLargestNumber(x)); // Output: 3454