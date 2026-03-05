# Taught by Gemini.

The **Celebrity Problem** can be solved efficiently using two pointers or a stack. The key logic is: if **person A knows person B**, then **A cannot be a celebrity**. If **A does not know B**, then **B cannot be a celebrity**.

By following this logic, we can eliminate  people in **O(n)** time.

---

### Implementation

```javascript
/**
 * @param {number[][]} mat
 * @returns {number}
 */
class Solution {
    celebrity(mat) {
        const n = mat.length;
        let candidate = 0;

        // Step 1: Find the potential candidate
        for (let i = 1; i < n; i++) {
            // If candidate knows i, candidate cannot be a celebrity.
            // i becomes the new potential candidate.
            if (mat[candidate][i] === 1) {
                candidate = i;
            }
            // If candidate does NOT know i, i cannot be a celebrity.
            // We keep the current candidate.
        }

        // Step 2: Verify the candidate
        for (let i = 0; i < n; i++) {
            if (i !== candidate) {
                // A celebrity must not know anyone (row must be all 0s)
                // Everyone must know the celebrity (column must be all 1s except diagonal)
                if (mat[candidate][i] === 1 || mat[i][candidate] === 0) {
                    return -1;
                }
            }
        }

        return candidate;
    }
}

```

---

### Why this works:

1. **Elimination Phase:** We start with person 0. For every other person `i`, we check if the current candidate knows them.
* If `mat[candidate][i] === 1`, the current candidate is disqualified, and `i` takes their place.
* After one pass, only one person can possibly be the celebrity.


2. **Verification Phase:** Since the elimination only tells us who *might* be the celebrity, we must verify:
* Do they know anyone? (Row check)
* Does everyone else know them? (Column check)


3. **Efficiency:** We avoid the **O(n²)** approach of checking every pair.

### Complexity:

* **Time Complexity:** **O(n)**. One pass to find the candidate, one pass to verify.
* **Space Complexity:** **O(1)** as we only store the index of the candidate.

Would you like to see how this same logic is implemented using a **Stack** (the more "classic" data structure approach)?

---

# Taught by ChatGPT.

Good.
This is a pure **stack / elimination logic** problem.
Very important for interview reasoning clarity.

---

Problem in one line

A celebrity:

* Everyone knows them.
* They know no one.

Matrix meaning:

mat[i][j] = 1 → i knows j
mat[i][j] = 0 → i does NOT know j

We must return index of celebrity, else -1.

---

Brute Force (Don’t Do)

For every person:
Check:

* Row must be all 0
* Column must be all 1 (except diagonal)

That is O(n²).

We can do better logically.

---

Key Observation (Most Important Insight)

If person A knows person B
→ A cannot be celebrity.

If person A does NOT know B
→ B cannot be celebrity.

So in one comparison, we eliminate one person.

This is the elimination principle.

---

Efficient Approach (O(n))

Step 1: Find Potential Celebrity

Use two pointers:

Start:
i = 0
j = n - 1

While i < j:

If i knows j:
i cannot be celebrity → i++
Else:
j cannot be celebrity → j--

At end, only one candidate remains.

This works because every comparison removes one person.

---

Step 2: Verify Candidate

Let candidate = i

Check:

1. Candidate row must have all 0 (except self)
2. Candidate column must have all 1 (except self)

If both true → return candidate
Else → return -1

---

Clean Code

```js
class Solution {
  celebrity(mat) {
    const n = mat.length;

    let i = 0;
    let j = n - 1;

    // Step 1: Find candidate
    while (i < j) {
      if (mat[i][j] === 1) {
        i++;
      } else {
        j--;
      }
    }

    const candidate = i;

    // Step 2: Verify
    for (let k = 0; k < n; k++) {
      if (k === candidate) continue;

      if (
        mat[candidate][k] === 1 || // candidate knows someone
        mat[k][candidate] === 0    // someone doesn't know candidate
      ) {
        return -1;
      }
    }

    return candidate;
  }
}
```

---

Time Complexity

Elimination → O(n)
Verification → O(n)
Total → O(n)

Space → O(1)

---

Deep Understanding Check

Why does elimination phase guarantee at most one candidate?

Because:
Every comparison removes exactly one person permanently.

After n−1 eliminations,
only one survives.

---

Pattern Recognition

This is not really about stack.
It’s about logical elimination.

Similar pattern appears in:

* Majority Element (Boyer-Moore)
* Tournament winner problems
* Pair elimination reasoning

---

Web Dev Analogy (for your pattern linking)

Think of this like narrowing down a faulty service:

If Service A depends on Service B,
and B fails independently,
you eliminate A as root cause.

You progressively eliminate possibilities
until one candidate remains,
then verify.

---

Now think carefully:

Why do we need verification step?
Why can elimination alone be wrong?

If you understand that,
your logic thinking is getting sharp.

---