/**
# Print 1 to n.

## Question:
## Solution Approach:
*/
// -----------------------------
/**
## Error: In approach.
1. Output: 2 to 9 instead of 1 to 9.
2. I returned the value of 1 in the base case but never printed it.
3. Either I print it in the base case.
  3.1. if(n == 1){
        console.log(1);
        return;
      }
4. Or I terminate the base condition at n == 0.
  4.1. if(n == 0){
        return;
      }
*/

function print_N(n) {
  // 01. Base Case: Recursive-loop termination condition.
  if (n == 1) {
    return 1;
  }

  // 02a. Recursive Case: Call main function with smaller argument value, till we reach to the base case condition value.

  // 02b. We will keep building stack till 9, 8, 7, 6, ..., 2 and finally 1 (via base case).
  print_N(n - 1); // Head Recursion.

  // 03. At the end of the base case, we will start printing the values of the n in the LIFO fashion. While unwinding the stack.
  console.log(n);
}

// --- Output:
print_N(9);
