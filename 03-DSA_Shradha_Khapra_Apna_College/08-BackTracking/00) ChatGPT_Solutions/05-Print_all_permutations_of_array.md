### Print all permutations of an array.

Perfect — same **permutation logic**, just applied to an array instead of a string.

Key idea
Permutation means:

* **order matters**
* **all elements must be used**
* total permutations = `n!`

Best approach for arrays
Use **swap-based backtracking** (in-place, clean, fast).

Swap-based approach

```js
function printPermutations(arr, index = 0) {
  // Base case
  if (index === arr.length) {
    console.log([...arr]);
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
printPermutations([1, 2, 3]);
```

Sample output

```
[1, 2, 3]
[1, 3, 2]
[2, 1, 3]
[2, 3, 1]
[3, 2, 1]
[3, 1, 2]
```

Important details

* `index` represents the **position being fixed**
* Loop decides **which element goes at that position**
* Swapping avoids extra space
* `[...arr]` is needed to avoid reference issues while printing

Time & space

* Time: `O(n × n!)`
* Space: `O(n)` recursion stack

One-line memory hook
Permutation = **fix position, swap choices**

Quick comparison (to keep patterns clean)

| Problem     | Core decision     |
| ----------- | ----------------- |
| Subset      | include / exclude |
| Subsequence | include / exclude |
| Permutation | swap & fix        |

If you want next (very common extensions):

* Unique permutations when array has duplicates
* Return permutations instead of printing
* Iterative permutations
* Permutation with condition (sum, position rules)

Tell me what to tackle next 👍
