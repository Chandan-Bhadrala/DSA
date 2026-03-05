/**
# Print 1 to n.

## Question:
## Solution Approach:
*/
// -----------------------------

function print_n(n) {
  let x = 1;
  // 01. Base Case:
  if (x == n) {
    return 1;
  }

  // Recursive Case: Call main function with smaller argument value, till we reach to the base case argument value.
  console.log(x);
  x++;
  print_n(x);
}

// --- Output:
print_n(9);

/**
Error: In above approach.
- Caught and described well by the ChatGPT.
- Same is saved in the following Md file.
- Use preview option of the Md file to read it properly.
*/