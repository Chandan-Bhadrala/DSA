### Remove empty subsequence from count
Perfect, this is a **one-liner fix** once the logic is clear.

Right now
`countDistinctSubsequences()` **includes** the empty subsequence `""`.

So:

```
with empty  = dp[n]
without empty = dp[n] - 1
```

Why this works

* `dp[0] = 1` exists **only** to count the empty subsequence
* Every DP path builds on it
* Subtracting `1` removes `""` exactly once

Updated JS code (empty excluded)

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

  return dp[n] - 1; // remove empty subsequence
}

// Examples
console.log(countDistinctSubsequences("abc")); // 7
console.log(countDistinctSubsequences("aaa")); // 3
console.log(countDistinctSubsequences("abab")); // 10
```

Quick sanity check
`"aaa"` distinct subsequences excluding empty:

```
"a", "aa", "aaa" → 3
```

One-line memory hook
DP always counts `""` → **subtract 1 at the end**

If you want next (natural progression):

* Count distinct subsequences **equal to a given string**
* Modulo `1e9+7` version
* Space optimized DP (single array)

Just say the next step 🙂
