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