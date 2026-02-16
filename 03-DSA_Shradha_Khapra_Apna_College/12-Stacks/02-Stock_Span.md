# Taught by Gemini.

This problem is a classic example of using a **Monotonic Stack**. To find the "span" of a stock's price, we need to find the number of consecutive days (including the current day) where the price was less than or equal to the current price.

Essentially, we are looking for the **previous greater element**.

### The Strategy

Instead of recalculating the span every time (which would be ), we store pairs of `[price, span]` in a stack.

1. **Initialize**: An empty stack to store our pairs.
2. **The `next` logic**:
* Start with a default `span` of **1** (the current day itself).
* While the stack is not empty and the current `price` is **greater than or equal** to the price at the top of the stack:
* Pop the top element.
* Add that element's span to our current `span`.


* Push the current `[price, span]` onto the stack.
* Return the accumulated `span`.



---

### The Implementation

```javascript
var StockSpanner = function() {
    // Each element in the stack will be an array: [price, span]
    this.stack = [];
};

/** * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1;

    // While current price is >= top of stack, we "absorb" their spans
    while (this.stack.length > 0 && price >= this.stack[this.stack.length - 1][0]) {
        const [prevPrice, prevSpan] = this.stack.pop();
        span += prevSpan;
    }

    // Push current price and its calculated span onto the stack
    this.stack.push([price, span]);

    return span;
};

/** * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

```

---

### Why this is efficient

* **Time Complexity**: **O(1)** average. Although there is a `while` loop, each price is pushed and popped from the stack **exactly once** across all calls to `next`. This is known as **amortized** O(1) time.
* **Space Complexity**: **O(n)** in the worst case (if prices are strictly decreasing), as we store each price in the stack.

Would you like to see how this same logic applies to the **Daily Temperatures** problem?

---

# Taught by ChatGPT.

Very good.
Now you’re entering **monotonic stack** territory. This is an important pattern.

LeetCode 901 – Stock Spanner

Problem in simple words:

For each day’s price, return how many consecutive days (including today) the price was **≤ today’s price**.

Example:

Prices:
100 → span = 1
80 → 1
60 → 1
70 → 2  (70 ≥ 60)
60 → 1
75 → 4  (75 ≥ 60,70,60)
85 → 6

Core Idea (one line)

We need to remove smaller elements behind us → so they never get checked again → use a **monotonic decreasing stack**.

Why normal brute force fails?

If for every price you go backward checking previous days → O(n²).

We want O(n).

Key Insight

If today’s price is higher than previous day’s price, then:

* That previous day will never be useful for future comparisons.
* So we can permanently remove it.

This is where stack shines.

What do we store in stack?

Instead of storing only price, we store:

[price, span]

Why?

Because when we pop smaller prices, we accumulate their span.

That’s the trick.

Implementation

```javascript
var StockSpanner = function() {
    this.stack = []; 
    // Each element: [price, span]
};

StockSpanner.prototype.next = function(price) {
    let span = 1;
    
    // Pop all smaller or equal prices
    while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
        span += this.stack.pop()[1];
    }
    
    this.stack.push([price, span]);
    
    return span;
};
```

Why This Works

Suppose stack top has:

[70, 2]

That means:

* 70 was valid for 2 consecutive days.
* If today’s price is 75,
  then those 2 days automatically become part of today's span.

So we don’t check each day individually.
We compress history.

Time Complexity

Amortized O(1) per call
Each element is pushed once and popped once.

Overall O(n)

Space Complexity
O(n)

Pattern Recognition for You

This is the same family as:

* Next Greater Element
* Daily Temperatures
* Largest Rectangle in Histogram

Whenever question says:

* Consecutive
* Previous smaller/greater
* Next greater
* Span
* Until condition breaks

→ Think Monotonic Stack.

Web Development Relation (important for you)

Think of it like caching.

If a weaker entry is overshadowed by a stronger one,
you delete it permanently from consideration.

Exactly like:

* Removing stale cache entries.
* Maintaining decreasing priority queues.
* Keeping only relevant middleware in a chain.

Now a small thinking exercise for you:

Why do we use
<=
and not
<

in this line?

```
this.stack[this.stack.length - 1][0] <= price
```

Answer that carefully. This is where real understanding lies.


---