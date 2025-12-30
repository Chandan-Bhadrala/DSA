/**
# Print sum of first n natural numbers.

## Question:
## Solution Approach:
*/
// -----------------------------

/**
## Minor Improvement:
1. I was using result to initialize the sum from 0 and to accumulate the result of pending recursive calls.
2. I could've used and it is a standard to use base case to seed the initialized result.
3. Later, we can use recursive calls to build upon the seed provided by the base case. 
*/

function sum_of_n_numbers(n) {
  // Base case, to terminate the recursive-loop and to provide the seed value for the recursive calls to build their result on.
  if (n == 0) {
    return 0;
  }

  // Last recursive execution was the base case, it returned 0.
  // Then the unwinding recursive calls provided their value of n, added it to the received/returned value from the previous executed recursive call.
  return sum_of_n_numbers(n - 1) + n;
}

// --- Output:
console.log(sum_of_n_numbers(4));

/**
## A comment by the ChatGPT.
---

### The most important thing

You now **don’t need formulas** anymore.

If someone says:

```
f(n) = f(n-1) + n
```

You can internally translate it to:

> “Call keeps going down until 0, returns 0, then each waiting call adds its own n.”

That’s mastery.
*/