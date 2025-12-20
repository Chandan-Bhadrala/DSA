/**
# Length of String.

## Question:
1. Find the number of characters in the string.
## Solution Approach:
  1. In C++ or C, this question has significance, as in C or C++, we will be using "Null Character (\0)" to locate the end of the string and count the number of characters before the null-character.
  2. In JS, we could simply use array.length or string.length to see the length of the string.  
*/
// -----------------------------

// 01. A function to find the length of the string.
function stringLength(name) {
  return name.length;
}

console.log("Length of the name is:", stringLength("Asmi"));
