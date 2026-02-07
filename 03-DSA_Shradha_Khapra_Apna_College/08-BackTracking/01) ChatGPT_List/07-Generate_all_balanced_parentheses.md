### Generate all balanced parentheses.

Ahh yes — **the most famous backtracking problem** 😄
This one cleanly separates *brute thinking* from *constraint-based recursion*.

Problem
Generate all **balanced parentheses** of length `2n`.

Example
`n = 3`

```
((()))
(()())
(())()
()(())
()()()
```

Key insight (very important)
At any point:

* You can add `'('` **only if** `open < n`
* You can add `')'` **only if** `close < open`

This keeps the string valid at **every step** (no invalid generation).

Recursive approach (constraint-based backtracking)

```js
function generateParentheses(n, open = 0, close = 0, current = "") {
  // Base case
  if (current.length === 2 * n) {
    console.log(current);
    return;
  }

  // Add opening bracket
  if (open < n) {
    generateParentheses(n, open + 1, close, current + "(");
  }

  // Add closing bracket
  if (close < open) {
    generateParentheses(n, open, close + 1, current + ")");
  }
}

// Example
generateParentheses(3);
```

Why this works (intuition)

* `'('` increases **future possibilities**
* `')'` can only close an existing `'('`
* We **never** build an invalid prefix

This is different from brute-force filtering.

Time complexity
Number of valid strings = **Catalan number** `Cₙ`
Time: `O(Cₙ)`
Space: `O(n)` recursion stack

One-line memory hook
Balanced parentheses = **close can never exceed open**

Mental pattern comparison (important)

| Problem        | Choice type            |
| -------------- | ---------------------- |
| Binary strings | fixed choices          |
| Subsequence    | include / exclude      |
| Permutation    | choose unused          |
| Parentheses    | **choices with rules** |

Web dev analogy
Think of HTML tags:

* You can open a tag anytime
* You can close it **only if it’s already open**
  Otherwise DOM breaks 😄

Common follow-ups:

* Return array instead of printing
* Generate for multiple bracket types
* Count balanced parentheses (DP)
* Validate parentheses (stack)

Tell me which one next 👌
