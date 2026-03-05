### Count total subsequences of a string.

Good, this is where **basic recursion ends and real DSA begins**.
Counting **distinct subsequences** is NOT `2^n` when duplicates exist.

Problem clarification
Given a string, count the number of **distinct subsequences** (including empty).

Example
`"abc"` → all unique → `8`
`"aaa"` → NOT `8`

Distinct subsequences of `"aaa"`:

```
""
"a"
"aa"
"aaa"
```

Answer = `4`

Why `2^n` fails
Because duplicate characters create **duplicate subsequences** via different paths.

Correct idea (DP based)
Let
`dp[i]` = number of distinct subsequences considering first `i` characters

Base case
`dp[0] = 1` → empty string has one subsequence: `""`

Transition logic
For a new character:

* Every existing subsequence can either:

  * include it
  * exclude it
    So normally:
    `dp[i] = 2 * dp[i-1]`

But
If the current character has appeared before, we **over-count duplicates**.

Fix
Subtract subsequences counted before the previous occurrence.

Formula
If current character `ch` last appeared at index `last[ch]`:

```
dp[i] = 2 * dp[i-1] - dp[last[ch] - 1]
```

If it never appeared:

```
dp[i] = 2 * dp[i-1]
```

JS implementation (clean and interview-safe)

```js
function countDistinctSubsequences(str) {
  let n = str.length;
  let dp = new Array(n + 1).fill(0);
  let lastIndex = new Map();

  dp[0] = 1; // empty subsequence

  for (let i = 1; i <= n; i++) {
    let ch = str[i - 1];

    dp[i] = 2 * dp[i - 1];

    if (lastIndex.has(ch)) {
      let prev = lastIndex.get(ch);
      dp[i] -= dp[prev - 1];
    }

    lastIndex.set(ch, i);
  }

  return dp[n];
}

// Examples
console.log(countDistinctSubsequences("abc")); // 8
console.log(countDistinctSubsequences("aaa")); // 4
console.log(countDistinctSubsequences("abab")); // 11
```

Dry run intuition (`"aaa"`)

```
i=1 ('a'): dp[1] = 2
i=2 ('a'): dp[2] = 4 - dp[0] = 3
i=3 ('a'): dp[3] = 6 - dp[1] = 4
```

Final subsequences:

```
"", "a", "aa", "aaa"
```

Time & space

* Time: `O(n)`
* Space: `O(n)` (can be optimized, but not needed now)

One-line memory hook
Duplicate character → subtract subsequences formed **before its last occurrence**

Web dev analogy (to lock it in)
Think of cached API responses:

* New request doubles possibilities
* Same request again → must subtract what cache already counted

If you want next:

* Remove empty subsequence from count
* Modulo version (LeetCode style)
* Convert to space-optimized DP
* Count distinct subsequences equal to a target string (very important DP)

Just tell me 👌
