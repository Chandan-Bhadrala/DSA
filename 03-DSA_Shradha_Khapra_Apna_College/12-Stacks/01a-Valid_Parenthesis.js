/**
# Valid Parentheses.

## Question: We've to check whether brackets are properly opened and closed in the given string.

## Solution:
    1. We will push the opening brackets in the stack.
    2. And once we encounter a closing bracket then we must've it's opening pair at the top of the stack for the string to be a valid pairs of the brackets.
    3. If the stack top is not an opening pair of the current closing pair then we can mark the string as invalid.

    1. We'll first check whether the closing bracket has a valid opening bracket at the top of the stack or not.
        1.1. If not return false.
    2. If we've then pop it up till the end of the str.length.
    3. If the current str[i] is an opening bracket then push it to the stack.
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
  map["("] = ")";
  map["{"] = "}";
  map["["] = "]";

  for (let i = 0; i < str.length; i++) {
    // if (str[i] == map.key || str[i] == map.key) {
    //   stack.push(str[i]);
    // }
    // We cannot access map keys (or opening bracket) individually without using a separate loop.

    // Let's access map values and try to make use of them.
    // str[i] -> opening bracket.
    // mapValue -> closing bracket.
    let mapValue = map[str[i]];
    // Now, we've access to both.
    // Current opening bracket (str[i]) and its corresponding closing bracket (mapValue).

    // If the string character is a valid opening bracket then enter the if block.
    // mapValue will hold the closing bracket.
    if (mapValue) {
      // topElement -> opening bracket at the top of the stack.
      let topElement = stack.length - 1 >= 0 ? stack.pop() : "#";

      // Compare stack's top element with the current opening bracket.
      // Both must be same for the string to be a valid bracket pair.
      if (topElement != str[i]) return false;
    } else if (map.has(str[i])) {
      // However, else if block is true by default too.
      // As we've entered the if block only for the valid map value.
      stack.push(str[i]);
    }
  }
  return stack.length == 0; // Stack must be empty by the end of the code.
};
