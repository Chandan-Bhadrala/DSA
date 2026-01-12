/**
# Add two numbers represented as the array elements.
Links:
1. https://www.geeksforgeeks.org/problems/add-two-numbers-represented-by-two-arrays2408/1
2. https://leetcode.com/problems/add-to-array-form-of-integer/description/

## Question:
  1. We will be given two numbers whose digits are stored as an array elements in the arr1 and arr2.
  2. We have to return the sum of those two numbers represented as the array elements.
## Solution Approach:
  1. Last solution was correct enough only for the numbers having up to "15" digits.
    1.1. As JS "Number" primitive can only store up to 15 digits only.
  2. Below approach provided by the ChatGPT, uses only **one loop** and store the resultant number as a **string**.
 */
function calc_Sum(arr1, arr2) {
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    let digit1 = i >= 0 ? arr1[i] : 0;
    let digit2 = j >= 0 ? arr2[j] : 0;

    let sum = digit1 + digit2 + carry;
    let remainder = sum % 10;
    carry = Math.floor(sum / 10);

    result = remainder + result; // prepend digits to the previous result.

    i--;
    j--;
  }

  return result;
}
