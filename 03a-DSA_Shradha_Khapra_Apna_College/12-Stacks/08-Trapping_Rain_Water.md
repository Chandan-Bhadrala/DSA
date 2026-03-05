# Taught by Gemini.

To solve the **Trapping Rain Water** problem, we can use a **Monotonic Decreasing Stack**. This method calculates the water trapped horizontally, layer by layer, whenever we find a "pit" (a valley between two taller bars).

---

### Implementation

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let totalWater = 0;
    const stack = []; // Stores indices

    for (let i = 0; i < height.length; i++) {
        // While current bar is taller than the bar at the stack's top
        // we've found a potential "right wall" for a container
        while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
            const bottomIndex = stack.pop(); // The "floor" of the container
            
            // If stack is empty, there is no left wall to hold water
            if (stack.length === 0) break;
            
            const leftWallIndex = stack[stack.length - 1];
            const rightWallIndex = i;
            
            // Calculate height of the water level (limited by shorter wall)
            const boundedHeight = Math.min(height[leftWallIndex], height[rightWallIndex]) - height[bottomIndex];
            
            // Calculate width between the walls
            const width = rightWallIndex - leftWallIndex - 1;
            
            totalWater += boundedHeight * width;
        }
        
        stack.push(i);
    }

    return totalWater;
};

```

---

### Why this works:

1. **Finding the "Pit":** When `height[i]` is greater than the height at the top of the stack, the popped element represents the bottom of a container. The element now at the top of the stack is the **left wall**, and `height[i]` is the **right wall**.
2. **Horizontal Calculation:** Instead of calculating water column by column (like the Two-Pointer approach), this stack method calculates water in **horizontal strips**.
3. **The Height Logic:** The trapped water height is determined by the shorter of the two walls minus the height of the floor: `min(left, right) - floor`.

### Complexity:

* **Time Complexity:** **O(n)** because each index is pushed and popped at most once.
* **Space Complexity:** **O(n)** for the stack in the worst case (e.g., a strictly decreasing staircase).

### Alternative:

While the stack is great for understanding the geometry, this problem is also famously solved using **Two Pointers** with **O(1)** space. Would you like to see that version as well?

---

# Taught by ChatGPT.

Good.
This is **Trapping Rain Water** — one of the most important array problems.

There are 3 approaches:

1. Brute force → O(n²)
2. Prefix max arrays → O(n) space
3. Monotonic stack → O(n)
4. Two pointers → O(1) space (most elegant)

Since you're building stack mastery, I’ll show stack version first. Then I’ll show the clean two-pointer method (which is interview favorite).

---

Core Idea (1 line)

Water at index i =
min(maxLeft, maxRight) − height[i]

So water is trapped only when:
There is a taller bar on left AND right.

---

Monotonic Stack Approach

We maintain a **monotonic decreasing stack** of indices.

Why decreasing?

Because when we see a taller bar,
we may be able to trap water.

---

Mental Model

When current height > height at stack top:

We found a right boundary.

Pop the stack → that popped bar is the “bottom”.

Now:

* stack top becomes left boundary
* current index is right boundary

Water height =
min(leftBoundaryHeight, rightBoundaryHeight) − bottomHeight

Width =
currentIndex − leftBoundaryIndex − 1

That’s the container.

---

Stack Solution

```js
var trap = function (height) {
  const stack = [];
  let water = 0;

  for (let i = 0; i < height.length; i++) {
    while (
      stack.length > 0 &&
      height[i] > height[stack[stack.length - 1]]
    ) {
      const bottomIndex = stack.pop();

      if (stack.length === 0) break;

      const leftIndex = stack[stack.length - 1];

      const width = i - leftIndex - 1;
      const boundedHeight =
        Math.min(height[i], height[leftIndex]) -
        height[bottomIndex];

      water += width * boundedHeight;
    }

    stack.push(i);
  }

  return water;
};
```

Time: O(n)
Space: O(n)

---

Now the Cleaner (Two Pointer) Approach

This is more elegant and O(1) space.

Key Insight:

If leftMax < rightMax,
then water depends only on leftMax.

Because smaller side limits water.

---

Two Pointer Code

```js
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
};
```

Time: O(n)
Space: O(1)

---

Pattern Understanding for You

Compare:

LeetCode 84 → area between smaller bars
LeetCode 503 → next greater
LeetCode 42 → bounded water between greater bars

All use:
Monotonic Stack thinking.

---

Now the important conceptual test:

Why in two pointer method do we move the pointer with smaller height?

If you deeply understand that,
you’ve truly mastered this problem.

Think slowly.

---