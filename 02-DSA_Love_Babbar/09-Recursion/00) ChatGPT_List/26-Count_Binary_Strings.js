/**
# Count binary strings of length n with no consecutive 1s.

## Question:
1. I've to count possible ways a string of length n can be written without any consecutive 1s.
## Solution Approach:
1. The approach is same as to count ways to climb stairs.
2. If last bit is set to 0, then we have n - 1 bits to set for 1s.
3. Similarly, if we have last bit set to 1, then second last bit must be 0 and now we have n - 2 bits to set 1s.
*/
// -----------------------------

function countBinaryStrings(n) {
  // Base Case: Terminates the recursive loop at n == 0 || n == 1 and seeds a base value of 1 or 2.
  // Why:
  // n = 0 → empty string → 1 valid way
  // n = 1 → "0", "1" → 2 valid ways
  if (n == 0) return 1;
  if (n == 1) return 2;

  return countBinaryStrings(n - 1) + countBinaryStrings(n - 2);
}

// --- Output:
console.log(countBinaryStrings(5));
