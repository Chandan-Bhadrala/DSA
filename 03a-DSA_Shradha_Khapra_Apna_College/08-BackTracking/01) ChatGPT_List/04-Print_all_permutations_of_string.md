### Print all permutations of a string.

Alright, this is another **fundamental backtracking pattern**.
Different from subsequences/subsets — here **order matters** and **all characters must be used**.

Problem idea
Given a string, print **all permutations**.

Example
Input: `"abc"`
Output:

```
abc
acb
bac
bca
cab
cba
```

Core idea
At every position, choose **one unused character** and fix it there.

Two common approaches:

1. Swap-based (most clean for strings/arrays)
2. Used-array approach

I’ll show the **swap-based approach** first — it’s the most intuitive and interview-friendly.

Approach 1: Swap based backtracking

Concept

* Fix one index at a time
* Swap current index with every possible index ahead
* Recurse
* Swap back (backtracking)

JS implementation

```js
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

// Example
printPermutations("abc".split(""));
```

Why swapping works
At index `0`:

* put every character once
  At index `1`:
* permute remaining characters
  And so on…

Time complexity
`O(n!)` permutations
Each print takes `O(n)` → overall `O(n × n!)`

Space
`O(n)` recursion stack (in-place swaps)

One-line memory hook
Permutation = **fix one position, permute the rest**

Approach 2: Using visited array (conceptual clarity)

Idea

* Build permutation step by step
* Use a boolean array to mark used characters

```js
function printPermutations(str, used, current) {
  if (current.length === str.length) {
    console.log(current);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    if (used[i]) continue;

    used[i] = true;
    printPermutations(str, used, current + str[i]);
    used[i] = false;
  }
}

// Example
printPermutations("abc", new Array(3).fill(false), "");
```

When to use which

* Swap method → faster, cleaner, in-place
* Used-array → easier to adapt for constraints

Very important distinction (DSA clarity)

| Problem     | Choice per step   |
| ----------- | ----------------- |
| Subsequence | take / not take   |
| Subset      | take / not take   |
| Permutation | choose one unused |

If you want next (natural follow-ups):

* Handle duplicate characters (unique permutations)
* Return permutations in an array
* Permutation with constraints
* Time complexity intuition trees

Just say the next one 🙂
