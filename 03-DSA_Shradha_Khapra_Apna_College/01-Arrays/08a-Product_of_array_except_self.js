/**
# Product of array except self.

## Question:
1. We are given an array and we are supposed to replace the array element with the product of the array leaving the one array element of that index from the product calculation.
2. We are supposed to do it in O(n) time complexity and O(1) space complexity.
3. We are not allowed to use divide operation.

## Solution Approach:
1. 

*/

// -----------------------------

// ## Brute force - Time Complexity O(n^2):
function productArr(arr) {
  let resArr = new Array(arr.length).fill(1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        resArr[i] = resArr[i] * arr[j];
      }
    }
  }

  return resArr;
}

// --- Output:
console.log(productArr([4, 2, 3]));
