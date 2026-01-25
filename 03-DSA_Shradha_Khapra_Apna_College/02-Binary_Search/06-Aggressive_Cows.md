### Code and its explanation by the ChatGPT.

Alright Chotu, **Aggressive Cows** is another **Binary Search on Answer** gem. Very similar thinking to Book Allocation, just a different feasibility check.

I’ll keep it crisp, logical, and pattern-oriented.

---

Aggressive Cows – problem in simple words

• You are given positions of stalls (unsorted)
• You have **C cows**
• Place cows in stalls such that
• **minimum distance between any two cows is maximized**

Return that maximum minimum distance.

---

Example

```
stalls = [1, 2, 4, 8, 9]
cows = 3
```

Best placement:

```
1 ─── 4 ─── 8
```

Minimum distance = **3**

---

Key observation

We are not choosing positions directly.
We are choosing a **distance**.

Question becomes:

“Can I place all cows such that each cow is at least D distance apart?”

This yes/no question is **monotonic** → perfect for binary search.

---

Preprocessing (mandatory)

Sort the stalls.

```
[1, 2, 4, 8, 9]
```

Why?
Greedy placement only works on sorted positions.

---

Search space (distance)

Minimum possible distance
→ 1 (or 0, but 1 is practical)

Maximum possible distance
→ lastStall − firstStall

```
low = 1
high = stalls[n-1] - stalls[0]
```

---

Binary Search idea

For a candidate distance `mid`:

• Place first cow at first stall
• Place next cow at the **earliest stall** whose distance ≥ mid
• Continue greedily
• Count cows placed

If cowsPlaced ≥ C → possible
Else → not possible

---

Feasibility check intuition

Greedy works because:
Placing cows as early as possible leaves maximum room for future cows.

---

Dry run for mid = 3

```
Place cow at 1
Next ≥ 4 → place at 4
Next ≥ 7 → place at 8
Cows placed = 3 ✔
```

Possible.

---

Algorithm steps

1. Sort stalls
2. Set low = 1, high = maxDistance
3. Binary search:
   • mid = candidate distance
   • if possible(mid) → store answer, move right
   • else → move left
4. Return answer

Note: Here we move **right** on success because we want bigger distance.

---

Time Complexity

Sorting: O(n log n)
Binary search: O(log(maxDistance))
Check: O(n)

Overall: **O(n log n)**

---

JavaScript implementation

```js
function aggressiveCows(stalls, cows) {
  stalls.sort((a, b) => a - b);

  let low = 1;
  let high = stalls[stalls.length - 1] - stalls[0];
  let answer = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (canPlaceCows(stalls, cows, mid)) {
      answer = mid;
      low = mid + 1;   // try bigger minimum distance
    } else {
      high = mid - 1;
    }
  }

  return answer;
}

function canPlaceCows(stalls, cows, minDist) {
  let count = 1;
  let lastPos = stalls[0];

  for (let i = 1; i < stalls.length; i++) {
    if (stalls[i] - lastPos >= minDist) {
      count++;
      lastPos = stalls[i];

      if (count === cows) return true;
    }
  }

  return false;
}
```

---

One-line pattern memory

Binary search the **answer space**, greedy check feasibility.

---

Compare with Book Allocation (important link)

| Book Allocation      | Aggressive Cows       |
| -------------------- | --------------------- |
| Minimize max load    | Maximize min distance |
| Move left on success | Move right on success |
| Pages sum            | Distance              |
| Students             | Cows                  |

Same brain pattern, opposite direction.

---

If you want next:
• Proof why greedy placement works
• Edge cases examiners love
• List of similar problems (painters, routers, shipping)

Just say the word.
