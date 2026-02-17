/**
# Valid Parentheses.

## Question: We've to check whether brackets are properly opened and closed in the given string.

## Solution:
1. First check if the str[i] is a closing bracket.
  1.1. If it's a closing bracket then it must have a opening bracket pair at the top of the stack.
2. If it's an opening bracket then push it to the stack.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (str) {
  // JS doesn't have stack implemented natively.
  // We've to use array and its push, pop and peek = arr[arr.length - 1] to make it behave like stack.
  let stack = [];

  let map = new Map();
  map[")"] = "(";
  map["}"] = "{";
  map["]"] = "[";

  for (let i = 0; i < str.length; i++) {
    // If str[i] is a closing bracket then only enter the if-block to check for its corresponding opening bracket at the top of the stack.
    if (map[str[i]]) {
      let topElement = stack.length > 0 ? stack.pop() : "#";

      // Now top element must be corresponding opening bracket to the str[i].

      if (topElement != map[str[i]]) return false;
    } else {
      // It's an opening bracket. So, push it to the stack.
      stack.push(str[i]);
    }
  }
  return stack.length == 0; // Stack must be empty by the end of the code.
};
