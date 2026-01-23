### Code Review and improvement by the ChatGPT.

Nice and clean solution 👍
You’re using the **two-pointer technique** exactly the way it’s meant to be used for a sorted array.

Here’s a tight breakdown and a couple of subtle insights that’ll strengthen your intuition.

What you did right

* You exploited the **sorted nature** of the array instead of brute force.
* Two pointers `i` (start) and `j` (end) reduce time complexity to **O(n)**.
* Space complexity stays **O(1)**.
* Early return on success is efficient.

Why the logic works (core intuition)

* Array is sorted in ascending order.
* `arr[i] + arr[j]` is:

  * **too large** → decrease the sum → move `j` left.
  * **too small** → increase the sum → move `i` right.
* This guarantees you never miss a valid pair.

Think of it like this (mental model):
You’re squeezing the window from both ends until the sum fits the target.

Edge cases your code already handles well

* Empty array or single element array → loop never runs → returns `-1`
* Target not achievable → clean `-1`
* First valid pair found → immediate exit

Tiny improvements (optional, stylistic)

1. Avoid recomputing sum twice (micro-optimization + clarity):

```js
function pairSum(arr, target) {
  for (let i = 0, j = arr.length - 1; i < j; ) {
    const sum = arr[i] + arr[j];

    if (sum === target) return [i, j];
    if (sum > target) j--;
    else i++;
  }
  return -1;
}
```

2. If you want **values instead of indices**, just return:

```js
return [arr[i], arr[j]];
```

One-line essence (your preferred style):
Sorted array + two pointers = linear-time pair sum.

If you want, next we can:

* Extend this to **count all pairs**
* Handle **duplicates correctly**
* Or relate this directly to **two-sum patterns in DSA interviews**
