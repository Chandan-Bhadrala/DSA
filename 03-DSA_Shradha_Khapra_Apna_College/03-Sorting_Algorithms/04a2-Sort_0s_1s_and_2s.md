### Standard code with explanation by the ChatGPT.

Classic problem. Frequency counter approach is the most straightforward one 👍
Here’s the clean way to do it.

Idea (frequency counting):

* Count how many 0s, 1s, and 2s are present.
* Overwrite the array using these counts in order: first 0s, then 1s, then 2s.

Steps:

1. Initialize three counters: count0, count1, count2.
2. Traverse the array once and update counts.
3. Traverse the array again and fill values based on the counts.

Time complexity: O(n)
Space complexity: O(1) (only constant extra variables)

JavaScript code:

```js
function sort012(arr) {
  let count0 = 0, count1 = 0, count2 = 0;

  // Step 1: Count frequencies
  for (let num of arr) {
    if (num === 0) count0++;
    else if (num === 1) count1++;
    else count2++;
  }

  // Step 2: Overwrite array
  let index = 0;

  while (count0 > 0) {
    arr[index++] = 0;
    count0--;
  }

  while (count1 > 0) {
    arr[index++] = 1;
    count1--;
  }

  while (count2 > 0) {
    arr[index++] = 2;
    count2--;
  }

  return arr;
}
```

Example:
Input:

```js
[2, 0, 2, 1, 1, 0]
```

Output:

```js
[0, 0, 1, 1, 2, 2]
```

or

JavaScript code:

```js
function sort012(arr) {
  let count0 = 0, count1 = 0, count2 = 0;

  // Count frequencies
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) count0++;
    else if (arr[i] === 1) count1++;
    else count2++;
  }

  let index = 0;

  // Place 0s
  for (let i = 0; i < count0; i++) {
    arr[index++] = 0;
  }

  // Place 1s
  for (let i = 0; i < count1; i++) {
    arr[index++] = 1;
  }

  // Place 2s
  for (let i = 0; i < count2; i++) {
    arr[index++] = 2;
  }

  return arr;
}
```

One-line intuition (good for revision):
“Count first, then rewrite in sorted order.”

If you want, next we can contrast this with the Dutch National Flag algorithm and discuss when to prefer which.
