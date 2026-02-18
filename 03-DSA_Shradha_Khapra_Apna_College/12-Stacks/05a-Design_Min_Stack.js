/**
## Solution Approach:
1. Will create a stack from an array.
2. At each index, I'll store an object {val: val, minVal: Math.min(minVal, val)}

*/
var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  let currMin = val;

  // if-condition to avoid accessing empty stack.
  if (this.stack.length > 0) {
    currMin = this.stack[this.stack.length - 1].minValue;
  }

  // Pushing object pair into the stack.
  this.stack.push({
    val: val,
    minValue: Math.min(val, currMin),
  });

  return this;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let removedFrame = null;
  if (this.stack.length > 0)
    removedFrame = this.stack.pop();

  return removedFrame;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  let topFrame = null;
  if (this.stack.length > 0) topFrame = this.stack[this.stack.length - 1];

  return topFrame.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let minValue = null;
  if (this.stack.length > 0) minValue = this.stack[this.stack.length - 1].minValue;

  return minValue;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
