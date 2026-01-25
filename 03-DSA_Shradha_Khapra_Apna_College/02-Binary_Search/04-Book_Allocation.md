### Code and its explanation by the ChatGPT.

Alright Chotu, this is a **classic + very important** Binary Search on Answer problem. Once this clicks, a whole category of problems becomes easy.

I’ll explain it calmly, step-by-step, with **intuition first**, then logic, then code.

---

Book Allocation Problem – explained clearly

Problem statement (in simple words)

• You are given an array where each element represents **number of pages in a book**
• Books are arranged in order
• You are given **M students**
• You must allocate **contiguous books** to each student
• Every student must get **at least one book**
• Goal: **minimize the maximum pages assigned to any student**

Return that minimum possible maximum.

---

Example

```
books = [12, 34, 67, 90]
students = 2
```

Possible allocations:

```
[12, 34, 67] | [90]   → max = 113
[12, 34] | [67, 90]   → max = 157
```

Answer = **113**

---

Key observations (this is the heart)

1. Order matters → contiguous allocation
2. We are trying to **minimize the maximum load**
3. This screams **Binary Search on Answer**

We are NOT searching in the array
We are searching in the **range of possible answers**

---

Search space (very important)

Minimum possible answer
→ max(pages in a single book)
Why? One student must at least read the biggest book

Maximum possible answer
→ sum of all pages
Why? One student reads everything

So:

```
low = max(books)
high = sum(books)
```

---

Binary Search idea

We ask a yes/no question:

“Is it possible to allocate books such that
no student gets more than X pages?”

If yes → try smaller X
If no → need bigger X

This monotonic behavior allows binary search.

---

Feasibility check (most important function)

Given a maxPages limit:

• Assign books in order
• Keep adding pages to current student
• If adding a book exceeds maxPages → assign to next student
• Count students needed

If students needed > M → not possible
Else → possible

---

Dry run for X = 113

```
Student 1: 12 + 34 + 67 = 113
Student 2: 90
```

Students used = 2 → valid

---

Algorithm steps

1. If students > books.length → return -1
2. Set low = maxBookPages
3. Set high = totalPages
4. Binary search:
   • mid = possible max pages
   • if feasible(mid) → store answer, move left
   • else → move right
5. Return stored answer

---

Time Complexity

Binary search range: sum − max
Each check: O(n)

Overall: **O(n log(sum))**

---

JavaScript implementation

```js
function bookAllocation(books, students) {
  if (students > books.length) return -1;

  let low = Math.max(...books);
  let high = books.reduce((a, b) => a + b, 0);
  let answer = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (isPossible(books, students, mid)) {
      answer = mid;
      high = mid - 1;   // try better minimum
    } else {
      low = mid + 1;    // need more pages
    }
  }

  return answer;
}

function isPossible(books, students, maxPages) {
  let studentCount = 1;
  let pagesSum = 0;

  for (let pages of books) {
    if (pagesSum + pages <= maxPages) {
      pagesSum += pages;
    } else {
      studentCount++;
      pagesSum = pages;

      if (studentCount > students) return false;
    }
  }

  return true;
}
```

---

One-line intuition (remember this)

We are minimizing the **worst workload**, so we binary search the answer and check feasibility greedily.

---

Real-world / web-dev analogy (for intuition)

Think of **API rate limiting per server**:

• Requests must be handled in order
• You have M servers
• Each request has load
• Minimize max load on any server

Same thinking pattern.

---

If you want next:
• Visual dry run with pointers
• Pattern list of “Binary Search on Answer” problems
• Why greedy works here (proof intuition)

Just tell me 👍
