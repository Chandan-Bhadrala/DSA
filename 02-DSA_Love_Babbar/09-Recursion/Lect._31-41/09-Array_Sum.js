/**
# Calculate the sum of the array elements.

## Question:
## Solution Approach:
*/
// -----------------------------

function sumArray(arr, i = 0) {
  // Base Case: To terminate the recursion and to seed a base value of 0.
  if (i == arr.length) return 0;

  // Building frame stack memory with the arr and respective value of the iterator i.
  // Receiving the value of sum starting from the base value
  let sum = sumArray(arr, i + 1);

  // Building result upon the seed value received from the base case.
  // Using frame stack memory to access the arr elements.
  return (sum += arr[i]);
}

// --- Output:
console.log(sumArray([1, 2, 3, 4, 5]));
