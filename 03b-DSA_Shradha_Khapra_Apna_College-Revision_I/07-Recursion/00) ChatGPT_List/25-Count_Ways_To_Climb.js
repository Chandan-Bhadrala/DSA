/**
# Count ways to climb n stairs (1 or 2 steps).

## Question:
## Solution Approach:

*/
// -----------------------------

function waysToClimb(n) {
  // Base Case to terminate recursive loop and to seed the number of ways to climb stairs if stair steps is equal to 1.
  // Two base case value of n == 0 or n == 1, both are mandatory as we are reaching the base case via. waysToClimb(n - 1) or waysToClimb(n - 2).
  // So, for n = 1, waysToClimb(0) or waysToClimb(-1).
  // So, the second case will push the recursion into an infinite loop and the **base case** of "n == 1" will make sure the recursive loop stops.
  if (n == 0 || n == 1) return 1;

  // This below solution is from the fact that to reach the nth stair. I must be either be at stair n - 1 or n - 2.
  // So, to reach the stair n, I must know with how many ways I could reach stair n - 1 or n - 2 and then only I can calculate ways to reach the nth stair.
  return waysToClimb(n - 1) + waysToClimb(n - 2);
}

// --- Output:
console.log(waysToClimb(4));

/**
## Golden rule by ChatGPT.
---
You only need to remember this mental template:

If a state n can only be reached from states n-1 and n-2,
then ways(n) = ways(n-1) + ways(n-2)
with base cases at the smallest reachable states.

That is enough.
*/
