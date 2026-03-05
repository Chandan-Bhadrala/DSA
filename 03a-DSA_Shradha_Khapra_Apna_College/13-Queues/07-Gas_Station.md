# Taught by Gemini.

In the **Gas Station** problem, you are given two arrays, `gas` and `cost`, and you need to find the starting gas station index from which you can travel around the circuit once in a clockwise direction. If no such station exists, return -1.

The logic follows a "greedy" approach: if you can't reach station B from station A, then no station between A and B can reach station B either.

---

### **The JavaScript Solution**

```javascript
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let currentTank = 0;
    let startIndex = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        currentTank += gas[i] - cost[i];

        // If current tank is negative, we cannot reach the next station
        if (currentTank < 0) {
            // Reset the start to the next station
            startIndex = i + 1;
            // Reset current tank for the new journey
            currentTank = 0;
        }
    }

    // If total gas is less than total cost, it's impossible
    return totalGas >= totalCost ? startIndex : -1;
};

```

---

### **How it works**

* **Total Sum Check**: At the end of the day, if the sum of all gas is less than the sum of all costs (`totalGas < totalCost`), you physically cannot complete the loop, regardless of where you start.
* **The Greedy Reset**: We track `currentTank`. If it ever drops below zero at station `i`, it means every station from our current `startIndex` up to `i` is an invalid starting point. We then move our `startIndex` to `i + 1` and try again.
* **Efficiency**: This solution runs in **O(n)** time complexity because it only traverses the arrays once, and **O(1)** space complexity.

### **Quick Example**

If `gas = [1, 2, 3, 4, 5]` and `cost = [3, 4, 5, 1, 2]`:

1. At index 0: `1 - 3 = -2`. Tank is negative. Reset `startIndex` to 1.
2. At index 1: `2 - 4 = -2`. Tank is negative. Reset `startIndex` to 2.
3. At index 2: `3 - 5 = -2`. Tank is negative. Reset `startIndex` to 3.
4. At index 3: `4 - 1 = 3`. Tank is positive. Keep going.
5. At index 4: `3 + (5 - 2) = 6`.
6. Final check: Total gas (15) >= Total cost (15). Return `startIndex` (3).

---

Would you like me to explain how to adapt this logic for a version where the road is not a circular circuit?

---

# Taught by ChatGPT.

### 134. Gas Station — Problem Understanding

This problem is from **LeetCode**.

You are given two arrays:

* `gas[i]` → gas available at station `i`
* `cost[i]` → gas required to go from station `i` to `i+1` (circular route)

You need to return the **starting index** from where you can complete the full circle once.
If it’s impossible → return `-1`.

---

## Core Insight (Most Important Part)

Two key observations:

### 1️⃣ If total gas < total cost → impossible

If

```
sum(gas) < sum(cost)
```

then no solution exists.
This is a **global feasibility condition**.

---

### 2️⃣ Greedy Reset Logic

We iterate once and track:

* `totalTank` → overall gas balance
* `currentTank` → gas balance from current start candidate
* `start` → current candidate index

If at any point:

```
currentTank < 0
```

Then:

* You **cannot** start from any station between old `start` and current index.
* So reset:

  ```
  start = i + 1
  currentTank = 0
  ```

Why?
Because if starting from `start` can't even reach `i+1`,
then any index between `start` and `i` would have even less gas available.

This is the greedy proof.

---

## Final Algorithm (O(n), single pass)

```javascript
function canCompleteCircuit(gas, cost) {
    let totalTank = 0;
    let currentTank = 0;
    let start = 0;

    for (let i = 0; i < gas.length; i++) {
        let diff = gas[i] - cost[i];

        totalTank += diff;
        currentTank += diff;

        if (currentTank < 0) {
            start = i + 1;
            currentTank = 0;
        }
    }

    return totalTank >= 0 ? start : -1;
}
```

---

## Why This Works (Deep Understanding)

Think of `gas[i] - cost[i]` as net gain/loss.

We are basically finding a point such that:

* From that point onward, cumulative sum never dips below zero
* And total sum overall is ≥ 0

This is similar to:

* Finding a valid prefix start in a circular cumulative sum problem
* Very similar thinking to Kadane-style greedy reasoning

---

## Pattern Recognition for DSA

Whenever you see:

* Circular array
* Gain/Loss at each step
* “Find valid starting point”

Think:

> Check global feasibility + greedy reset when balance goes negative.

---

If you want, we can now:

* Walk through a dry run example
* Or connect this to real-world analogy (fuel economics, circular buffers in OS, etc.)
* Or relate it to web dev system design thinking (like request handling capacity).

---