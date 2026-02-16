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