var MinStack = function() {
    this.stack = [];
};

/** * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // If the stack is empty, the new value is the minimum.
    // Otherwise, compare the new value with the current minimum at the top.
    const currentMin = this.stack.length === 0 
        ? val 
        : this.stack[this.stack.length - 1].min;

    this.stack.push({
        value: val,
        min: Math.min(val, currentMin)
    });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1].min;
};