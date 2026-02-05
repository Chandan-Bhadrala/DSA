### Print all subsequences of a string.  

Alright, this is a **classic recursion pattern** question. Let’s go clean and conceptual.

Problem idea
Given a string, print **all subsequences** (not substrings).

Subsequence meaning
Characters maintain order, but **can be skipped**.

Example
Input: `"abc"`
Output subsequences:

```
"", "c", "b", "bc", "a", "ac", "ab", "abc"
```

(Empty string is also a valid subsequence)

Core recursion intuition
For every character, you have **two choices**:

1. Take it
2. Skip it

This gives `2^n` subsequences.

Recursive structure
At each index:

* Either include `str[index]`
* Or exclude it

Base case
When index reaches string length → print what you’ve built so far.

JS recursive solution (printing)

```js
function printSubsequences(str, index = 0, current = "") {
  // Base case
  if (index === str.length) {
    console.log(current);
    return;
  }

  // Choice 1: include current character
  printSubsequences(str, index + 1, current + str[index]);

  // Choice 2: exclude current character
  printSubsequences(str, index + 1, current);
}

// Example
printSubsequences("abc");
```

Call flow intuition (important for DSA thinking)
For `"ab"`:

```
                ""
           /            \
         "a"             ""
       /     \         /     \
    "ab"     "a"     "b"      ""
```

Time complexity
`O(2^n)`
Space (recursion stack): `O(n)`

One-line pattern to remember
Subsequence = **take or not take at every index**

Web dev analogy (to lock it in)
Think of building a **feature flag list**:

* Every feature can be ON or OFF
* All combinations must be generated
  That’s subsequence recursion.

If you want next:

* Return subsequences in an array
* Remove empty subsequence
* Handle duplicate characters
* Convert this to iterative / bitmask version

Just tell me 👍
