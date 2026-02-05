/**
# Print all permutations of a string.

## Question:
## Solution:
*/
// -----------------------------

function printSubsets(arr, index = 0, current = []) {
  // Base case
  if (index === arr.length) {
    console.log(current);
    return;
  }

  // Choice 1: include current element
  current.push(arr[index]);
  printSubsets(arr, index + 1, current);

  // Backtrack
  current.pop();

  // Choice 2: exclude current element
  printSubsets(arr, index + 1, current);
}

// --- Output:
printSubsets([1, 2, 3]);

/**
[1, 2, 3]
[1, 2]
[1, 3]
[1]
[2, 3]
[2]
[3]
[]

*/