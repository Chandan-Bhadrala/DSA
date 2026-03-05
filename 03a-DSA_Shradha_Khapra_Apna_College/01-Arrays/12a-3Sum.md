### brute → better → optimal, code by the ChatGPT.

Alright Chotu, classic problem. Let’s do **3 Sum** properly, step-by-step, the DSA way — **brute → better → optimal**.
I’ll keep it clean, readable, and JS-only.

Problem (quick recap)
Given an array `nums`, return all **unique triplets** `[a, b, c]` such that
`a + b + c === 0`.

Important constraints to remember

* Triplets must be **unique**
* Order inside a triplet doesn’t matter
* Same index cannot be reused

---

Brute Force Approach
Time: O(n³)
Space: O(set for uniqueness)

Idea
Try **every possible triplet** using 3 loops and use a set to avoid duplicates.

Logic

* Fix i, j, k
* Check sum
* Sort triplet before storing (to handle uniqueness)

Code

```js
function threeSumBrute(nums) {
  let n = nums.length;
  let resultSet = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          resultSet.add(triplet.toString());
        }
      }
    }
  }

  return Array.from(resultSet).map(t => t.split(',').map(Number));
}
```

Why this is bad

* Very slow for large inputs
* Only good for understanding the problem

---

Better Approach (Hashing)
Time: O(n²)
Space: O(n)

Idea
Fix one element, reduce **3 Sum → 2 Sum** using a Set.

Logic

* Fix `i`
* Use a set to find `-(nums[i] + nums[j])`
* Use sorting + set to avoid duplicates

Code

```js
function threeSumBetter(nums) {
  let n = nums.length;
  let resultSet = new Set();

  for (let i = 0; i < n; i++) {
    let seen = new Set();

    for (let j = i + 1; j < n; j++) {
      let needed = -(nums[i] + nums[j]);

      if (seen.has(needed)) {
        let triplet = [nums[i], nums[j], needed].sort((a, b) => a - b);
        resultSet.add(triplet.toString());
      }

      seen.add(nums[j]);
    }
  }

  return Array.from(resultSet).map(t => t.split(',').map(Number));
}
```

Why this is better

* One loop removed
* Uses hashing (same concept as OS hash table you studied)

Still not optimal because

* Extra space
* Duplicate handling is indirect

---

Optimal Approach (Sorting + Two Pointers)
Time: O(n²)
Space: O(1) (ignoring output)

This is the **interview-level expected solution**.

Idea

* Sort the array
* Fix one element
* Use **two pointers** for remaining part

Logic

1. Sort nums
2. Loop `i`
3. Skip duplicate `i`
4. Use `left` and `right`
5. Adjust pointers based on sum
6. Skip duplicate `left` and `right`

Code

```js
function threeSumOptimal(nums) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } 
      else if (sum < 0) {
        left++;
      } 
      else {
        right--;
      }
    }
  }

  return result;
}
```

Why this is optimal

* No hashing
* No extra space
* Uses sorted order intelligently
* Clean duplicate handling

---

One-line intuition (your style)

* Brute: Try everything
* Better: Fix one, hash the rest
* Optimal: Sort + squeeze from both ends

If you want, next we can

* Dry run optimal step-by-step
* Convert this thinking to **4 Sum**
* Or link it to **Two Pointer pattern recognition for DSA**

Just say the word.
