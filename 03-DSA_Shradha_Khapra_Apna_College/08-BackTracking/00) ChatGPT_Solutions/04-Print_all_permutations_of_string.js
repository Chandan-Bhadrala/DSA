/**
# Print all subsets of an array 

## Question:
## Solution:
*/
// -----------------------------

function printPermutations(arr, index = 0) {
  // Base case
  if (index === arr.length) {
    console.log(arr.join(""));
    return;
  }

  for (let i = index; i < arr.length; i++) {
    // swap
    [arr[index], arr[i]] = [arr[i], arr[index]];

    printPermutations(arr, index + 1);

    // backtrack (swap back)
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }
}

// --- Output:
printPermutations("abc".split(""));

/**
abc
acb
bac
bca
cab
cba
*/