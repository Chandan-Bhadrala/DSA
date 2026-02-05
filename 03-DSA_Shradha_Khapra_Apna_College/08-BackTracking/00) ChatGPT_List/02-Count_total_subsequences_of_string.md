### Count total subsequences of a string.

Nice, this is the **natural next step** after printing subsequences 👍
Once the pattern is clear, counting becomes almost trivial.

Key idea
For every character, you still have **two choices**:

* include
* exclude

So the recursion tree is the same — we just **count leaves instead of printing strings**.

Recursive thinking
When index reaches the end → **1 valid subsequence formed**.

Recursive solution (counting)

```js
function countSubsequences(str, index = 0) {
  // Base case: one subsequence formed
  if (index === str.length) return 1;

  // include + exclude
  let include = countSubsequences(str, index + 1);
  let exclude = countSubsequences(str, index + 1);

  return include + exclude;
}

// Example
console.log(countSubsequences("abc")); // 8
```

What’s really happening
Each character doubles the count.

So mathematically:

```
Total subsequences = 2^n
```

where `n = str.length`

Direct formula solution (no recursion)

```js
function countSubsequences(str) {
  return Math.pow(2, str.length);
}

console.log(countSubsequences("abc")); // 8
```

Important notes (DSA clarity)

* Empty string is included
* Duplicate characters do NOT change the count (still `2^n`)
* Printing → recursion needed
* Counting → math shortcut exists

Time complexity

* Recursive: `O(2^n)`
* Formula: `O(1)`

One-line memory hook
Subsequence count = **binary choice per character**

If you want next, very common follow-ups:

* Count **distinct** subsequences
* Count subsequences matching a pattern
* Count subsequences with sum = k (DP bridge)

Just say the word 🙂
