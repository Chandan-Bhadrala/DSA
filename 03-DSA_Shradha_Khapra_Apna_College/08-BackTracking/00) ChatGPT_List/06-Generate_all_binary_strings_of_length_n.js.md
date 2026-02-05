### Generate all binary strings of length `n`

Classic recursion / backtracking pattern.
This is basically **two choices at every position**.

Problem
Generate all binary strings of length `n`.

Example
`n = 3`

```
000
001
010
011
100
101
110
111
```

Core idea
At every index, you can place:

* `'0'`
* `'1'`

Total strings = `2^n`.

Recursive solution (most clear)

```js
function generateBinaryStrings(n, index = 0, current = "") {
  // Base case
  if (index === n) {
    console.log(current);
    return;
  }

  // Place 0
  generateBinaryStrings(n, index + 1, current + "0");

  // Place 1
  generateBinaryStrings(n, index + 1, current + "1");
}

// Example
generateBinaryStrings(3);
```

How recursion tree looks (n = 2)

```
""
├─ "0"
│  ├─ "00"
│  └─ "01"
└─ "1"
   ├─ "10"
   └─ "11"
```

Time & space

* Time: `O(2^n)`
* Space: `O(n)` recursion stack

One-line memory hook
Binary string generation = **two fixed choices per position**

Iterative (bitmask thinking, optional)

```js
function generateBinaryStrings(n) {
  let limit = 1 << n;

  for (let i = 0; i < limit; i++) {
    let bin = i.toString(2).padStart(n, "0");
    console.log(bin);
  }
}

generateBinaryStrings(3);
```

Pattern connection (important for DSA)

* Subsequence → take / not take
* Subset → take / not take
* Binary strings → place 0 / place 1
* Permutation → choose unused

If you want next:

* Binary strings without consecutive 1s
* Count binary strings with constraints
* k-ary strings (generalization)
* DP version

Just say 👍
