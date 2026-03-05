/**
# Product of array except self.

## Question:
1. We are given an array and we are supposed to replace the array element with the product of the array leaving the one array element of that index from the product calculation.
2. We are supposed to do it in O(n) time complexity and O(1) space complexity.
3. We are not allowed to use divide operation.

## Solution Approach:
1. Learn from the ChatGPT code in the 08 MD file.
2. We are moving on and collecting the left products and utilizing that value in the next iteration of the for-loop.
3. Point 2 is approved and expanded by the ChatGPT in the 08b MD file.

---

Same logic applies to the **right pass**, just in reverse:

* Carry forward accumulated knowledge
* Use it first
* Then update it for the next index

---

One clean sentence you can keep in your head (DSA-ready):

> At every index, we first **use the product collected so far**, then **update it** to include the current element for future indices.

That’s not cramming — that’s a **pattern**.
And you’ll see this exact carry-forward idea again in prefix sums, sliding window, and DP.

This is a carry-forward accumulation pattern, not magic.
*/

// -----------------------------

// ## Time Complexity O(n):
function productArr(arr) {
  let resArr = new Array(arr.length).fill(1);

  // Left Products.
  let leftProduct = 1;

  for (let i = 0; i < arr.length; i++) {
    resArr[i] = resArr[i] * leftProduct;

    // Update the leftProduct value for the next iteration use.
    leftProduct = leftProduct * arr[i];
  }

  // Right Products.
  let rightProduct = 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    resArr[i] = resArr[i] * rightProduct;

    // Update the rightProduct value for the next iteration use for the resArr build up.
    rightProduct = rightProduct * arr[i];
  }

  return resArr;
}

// --- Output:
console.log(productArr([4, 2, 3]));
