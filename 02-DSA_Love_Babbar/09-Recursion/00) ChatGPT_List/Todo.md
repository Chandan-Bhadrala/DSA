#TODO:

## List of beginner level questions on recursion by ChatGPT.
### Link: [Hashnode Notes Link](<https://coding-knowledge.hashnode.space/coding-knowledge/07-dsa-by-love-babbar/09-recursion#-q3-can-you-list-beginner-level-recursion-questions-to-practice-recursion-such-as-printing-numbers-forward-and-backward:~:text=Just%20tell%20me.-,%E2%9C%85%20Q3)%20Can%20you%20list%20beginner%2Dlevel%20recursion%20questions%20to%20practice%20recursion%2C%20such%20as%20printing%20numbers%20forward%20and%20backward%3F,-Yes.%20This%20is>)

I will list them in a **progressive order**, from absolute noob to solid beginner.

Do not jump. Do them in order.

---

Level 0 — base case training (stop condition)

1. Print numbers from 1 to n
    
2. Print numbers from n to 1
    
3. Print numbers from 1 to n skipping odd numbers
    
4. Print numbers from n to 1 skipping even numbers
    

Goal:  
Learn where to place `console.log` relative to the recursive call.

---

Level 1 — single recursion, no branching

5. Find sum of first n natural numbers
    
6. Find factorial of n
    
7. Find power (a^b) using recursion
    
8. Count number of digits in a number
    
9. Sum of digits of a number
    
10. Print all digits of a number (left to right)
    
11. Print all digits of a number (right to left)
    

Goal:  
Understand how return values travel upward.

---

Level 2 — recursion on arrays

12. Print all elements of an array
    
13. Print array elements in reverse
    
14. Find sum of array elements
    
15. Find maximum element in an array
    
16. Check if an array is sorted or not
    
17. Count occurrences of a given element in an array
    

Goal:  
Replace loop index with recursive index.

---

Level 3 — recursion with decision making

18. Check if a string is palindrome
    
19. Remove all occurrences of a character from a string
    
20. Reverse a string using recursion
    
21. Replace all spaces with `_` in a string
    
22. Count vowels in a string using recursion
    

Goal:  
Combine condition + recursion cleanly.

---

Level 4 — basic multiple recursion calls

23. Fibonacci number (nth term)
    
24. Print Fibonacci series till n terms
    
25. Count ways to climb n stairs (1 or 2 steps)
    
26. Count binary strings of length n with no consecutive 1s
    

Goal:  
Understand branching and exponential recursion.

---

Level 5 — recursion that feels like DSA

27. Linear search using recursion
    
28. Binary search using recursion
    
29. Find first occurrence of an element in array
    
30. Find last occurrence of an element in array
    

Goal:  
Bridge recursion with real DSA patterns.

---

How you should practice (important)

For each problem:

* first write base case in plain English
    
* then write recursive relation in one sentence
    
* only then write code
    

Example thought process:

Problem: Print 1 to n  
Base case: If n is 0, stop  
Recursive thought: Print 1 to n-1, then print n

---

Strict rule while practicing

Do **not** use loops inside recursion initially.  
Let recursion do all the work.

---

When to move ahead

If you can:

* predict output without running code
    
* dry-run stack on paper
    
* know where print happens (down or up)
    

You are ready for backtracking and tree recursion.

---

One-line takeaway (your style)

Recursion mastery starts with printing numbers,  
not with Fibonacci.