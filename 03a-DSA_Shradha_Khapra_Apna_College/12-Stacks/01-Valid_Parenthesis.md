# Taught by Gemini.

The **Valid Parentheses** problem is a classic application of the **Stack** data structure. Since we need to match the most recently opened bracket with the next closing bracket (Last-In, First-Out), a stack is the perfect tool for the job.

### Logic Breakdown

1. **Initialize a Stack**: Use an array to keep track of opening brackets.
2. **Map the Pairs**: Use an object to store which closing bracket matches which opening bracket. This keeps the code clean and avoids multiple `if-else` blocks.
3. **Iterate**:
* If you see an **opening bracket** (`(`, `[`, `{`), push it onto the stack.
* If you see a **closing bracket**, check the top of the stack. If the stack is empty or the top doesn't match the current bracket, it's invalid.


4. **Final Check**: After the loop, if the stack is empty, every bracket was matched correctly.

---

### The Solution

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (map[char]) {
            // If the character is a closing bracket
            // Pop the top element from the stack
            const topElement = stack.length === 0 ? '#' : stack.pop();

            // If the popped element doesn't match the map's value, it's invalid
            if (topElement !== map[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets were matched
    return stack.length === 0;
};

```

---

### Complexity Analysis

* **Time Complexity**: **O(n)** because we traverse the string exactly once.
* **Space Complexity**: **O(n)** in the worst case (e.g., a string of all opening brackets like `((((((`).

Would you like me to explain how to optimize this further for edge cases, like strings with odd lengths?

---

# Taught by ChatGPT.

Good. This is the perfect first stack problem for your DSA journey.

LeetCode 20 – Valid Parentheses

Core idea in one line:
A closing bracket must match the most recent unmatched opening bracket → this is pure LIFO → Stack.

Why stack here?

When you read the string from left to right:

* If you see `(` `{` `[` → push it.
* If you see `)` `}` `]` → it must match the top of the stack.
* If it doesn’t match → invalid.
* At the end → stack must be empty.

That’s it.

Now let’s build it cleanly.

Step-by-step logic

1. Create an empty stack (array in JS).
2. Create a map of closing → opening.
3. Traverse string:

   * If char is opening → push.
   * If char is closing:

     * If stack empty → false
     * Pop and check match
4. After loop → return stack.length === 0

Clean implementation:

```javascript
var isValid = function(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        // If opening bracket
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
        // If closing bracket
        else {
            if (stack.length === 0) return false;
            
            const top = stack.pop();
            if (top !== map[char]) return false;
        }
    }
    
    return stack.length === 0;
};
```

Time Complexity
O(n)

Space Complexity
O(n) worst case (all opening brackets)

Now let’s think deeper (important for you)

This is not about brackets.
This is about pattern:

Whenever:

* “Most recent thing needs to be checked first”
* “Undo last operation”
* “Nested structure”

→ Stack.

Web Development Relation (important for you)

1. Browser History
   Back button → stack behavior.

2. Undo/Redo in editors
   Last action undone first.

3. Parsing JSON / HTML
   Nested tags → stack validation.

4. Function call stack (OS + JS runtime)
   When you call functions, JS engine pushes frames into call stack → LIFO.

So this question is actually about understanding how execution context works internally in Node.js too.

Now I want you to think:

What happens if input is:
"([)]"

Walk through it manually with stack and tell me where it fails.

Let’s build your thinking muscle properly.

---