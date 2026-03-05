# Code Solution by the Gemini.

The **Product of Array Except Self** is a classic algorithmic challenge. The goal is to return an array where each element at index `i` is the product of all numbers in the original array except the one at `i`, without using the division operator and in **O(n)** time.

### The Logic: Prefix and Suffix

To solve this efficiently, we calculate two things for every index:

1. **Prefix Product:** The product of all numbers to the **left** of the index.
2. **Suffix Product:** The product of all numbers to the **right** of the index.

The final result for any index is simply **Prefix × Suffix**.

---

### Step-by-Step Breakdown

1. **Initialize the Result Array:** Create an array (let's call it `res`) of the same length as the input, initially filled with 1s.
2. **First Pass (Left to Right):** Calculate the prefix products. As you move right, keep track of the running product of all elements seen so far and store it in `res[i]`.
3. **Second Pass (Right to Left):** Calculate the suffix products. As you move left, maintain a running product of elements to the right. Multiply the existing value in `res[i]` (which is the prefix) by this suffix product.

---

### JavaScript Implementation

Here is the clean, **O(n)** time and **O(1)** extra space (excluding the output array) solution:

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);

    // Step 1: Calculate Prefix Products
    // res[i] will contain the product of all elements to the left of i
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }

    // Step 2: Calculate Suffix Products on the fly
    // Multiply the existing prefix product by the suffix product
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= suffix;
        suffix *= nums[i];
    }

    return res;
};

// Example Usage:
const input = [1, 2, 3, 4];
console.log(productExceptSelf(input)); // Output: [24, 12, 8, 6]

```

---

### Why this works

* **No Division:** We avoid the "zero" trap (where dividing by zero would crash the logic) by building the product from scratch.
* **Efficiency:** We only loop through the array twice, making it **O(2n)**, which simplifies to **O(n)**.
* **Space:** We don't create separate prefix/suffix arrays; we reuse the result array and two variables, keeping extra space usage minimal.

Would you like me to explain how to handle this if the input contains multiple zeros?

---

# Code Solution by the ChatGPT.

Alright, let’s do this cleanly and *naturally*, step by step — no tricks, no memorization pressure.
This is one of those problems that **looks scary but is actually very systematic** once the idea clicks.

---

## Problem recap (one-liner)

Given an array, return a new array where
`result[i] = product of all elements except arr[i]`,
**without using division**.

Example:

```
Input:  [1, 2, 3, 4]
Output: [24, 12, 8, 6]
```

---

## Core idea (the mental model)

For every index `i`:

```
product except self
= (product of all elements to the left of i)
  ×
  (product of all elements to the right of i)
```

So we split the work into **two independent parts**:

* Left products
* Right products

No division. Just multiplication. O(n) time.

---

## Step 1: Left product pass

Create an array `result` where:

```
result[i] = product of elements before index i
```

Start with:

```
leftProduct = 1
```

Walk from left → right.

Example:

```
arr     = [1, 2, 3, 4]
result  = [1, 1, 2, 6]

Explanation:
i=0 → no left elements → 1
i=1 → 1
i=2 → 1×2 = 2
i=3 → 1×2×3 = 6
```

---

## Step 2: Right product pass

Now multiply each `result[i]` with the product of elements **after** index `i`.

Start with:

```
rightProduct = 1
```

Walk from right → left.

Example continuation:

```
Before right pass:
result = [1, 1, 2, 6]

Right pass:
i=3 → result[3] *= 1   → 6
i=2 → result[2] *= 4   → 8
i=1 → result[1] *= 12  → 12
i=0 → result[0] *= 24  → 24

Final result:
[24, 12, 8, 6]
```

---

## Full solution code (clean and standard)

```javascript
function productExceptSelf(arr) {
  const n = arr.length;
  const result = new Array(n);

  // Step 1: Left products
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= arr[i];
  }

  // Step 2: Right products
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= arr[i];
  }

  return result;
}
```

---

## Why this works (intuition, not formula)

* At index `i`

  * First pass gives: product of everything **before**
  * Second pass multiplies: product of everything **after**
* You never touch `arr[i]` itself.
* Zeroes are handled naturally (no division).

---

## Complexity

* Time: **O(n)**
* Space: **O(1) extra** (output array doesn’t count)

---

## One-line takeaway (DSA style)

> Precompute left products, then fold in right products — each index gets everything except itself.

If you want, next we can:

* Walk through a **zero-containing array**
* Or convert this into a **pattern you can reuse** in other DSA problems
