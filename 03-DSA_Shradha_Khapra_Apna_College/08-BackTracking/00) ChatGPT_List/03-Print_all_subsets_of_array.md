### Print all subsets of an array.

Nice, this is the **array version of subsequences**.
Same idea, different data type.

Key idea
For every element in the array, you have **two choices**:

* include it in the current subset
* exclude it

This generates all `2^n` subsets (power set).

Recursive approach (most intuitive)

```js
function printSubsets(arr, index = 0, current = []) {
  // Base case
  if (index === arr.length) {
    console.log(current);
    return;
  }

  // Choice 1: include current element
  current.push(arr[index]);
  printSubsets(arr, index + 1, current);

  // Backtrack
  current.pop();

  // Choice 2: exclude current element
  printSubsets(arr, index + 1, current);
}

// Example
printSubsets([1, 2, 3]);
```

Output order (one possible)

```
[1, 2, 3]
[1, 2]
[1, 3]
[1]
[2, 3]
[2]
[3]
[]
```

Important points to notice

* `push → recurse → pop` is **backtracking**
* Same pattern as string subsequences
* Order of subsets depends on recursion order

Time & space

* Time: `O(2^n)`
* Space: `O(n)` recursion stack

One-line pattern to remember
Subset generation = **take or not take every element**

Mental bridge (string → array)

* String subsequence → `current + str[i]`
* Array subset → `push(arr[i])`

If you want next (very common follow-ups):

* Print subsets iteratively using bitmask
* Handle duplicate elements (distinct subsets)
* Count subsets with sum = k
* Return subsets instead of printing

Just tell me what to do next 👍
