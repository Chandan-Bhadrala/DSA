### Taught by ChatGPT.

Sure, Chandan. I’ll keep it simple, step-by-step, and then show how Kadane’s Algorithm is just an optimized way of thinking about the same idea.

---

Simple idea (brute force thinking)

Problem:
Given an array, find the maximum sum of any **contiguous sub-array**.

Example:

```
[-2, 1, -3, 4, -1, 2, 1, -5, 4]
```

Answer is `6` from sub-array `[4, -1, 2, 1]`.

---

Naive approach (thinking, not for interviews)

Idea:

* Start at every index
* Keep adding elements to the right
* Track the maximum sum seen

Time complexity: O(n²)

```js
function maxSubArraySum(nums) {
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;

    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}
```

Why this works:

* For each starting index `i`, we try all sub-arrays `i → j`
* We keep the best sum we have seen so far

Problem:

* Recomputes many sums again and again

---

Key observation (the turning point)

While moving from left to right:

* If your running sum becomes **negative**, it will only hurt future sub-arrays
* So, it is better to **drop it and start fresh**

This single observation leads to Kadane’s Algorithm.

---

Kadane’s Algorithm (simple explanation)

At every index, ask:

> “Is it better to start a new subarray here, or continue the previous one?”

So:

* Either take `nums[i]` alone
* Or extend the previous subarray

Formula:

```
currentSum = max(nums[i], currentSum + nums[i])
```

And always track the best answer:

```
maxSum = max(maxSum, currentSum)
```

---

Kadane’s Algorithm code (JS)

```js
function maxSubArraySum(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
```

---

Dry run (very important)

Array:

```
[-2, 1, -3, 4, -1, 2, 1]
```

| i | nums[i] | currentSum          | maxSum |
| - | ------- | ------------------- | ------ |
| 0 | -2      | -2                  | -2     |
| 1 | 1       | max(1, -2 + 1) = 1  | 1      |
| 2 | -3      | max(-3, 1 - 3) = -2 | 1      |
| 3 | 4       | max(4, -2 + 4) = 4  | 4      |
| 4 | -1      | max(-1, 4 - 1) = 3  | 4      |
| 5 | 2       | max(2, 3 + 2) = 5   | 5      |
| 6 | 1       | max(1, 5 + 1) = 6   | 6      |

Final answer: `6`

---

One-line intuition (remember this)

Kadane’s Algorithm =
“Carry forward sum only if it helps; otherwise start fresh.”

---

If you want, next we can:

* Write recursive intuition for Kadane
* Modify it to return the actual sub-array
* Connect this with prefix sums (why negative prefix is useless)

Just tell me 👍
