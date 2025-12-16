/**
# Add two numbers represented as the array elements.
Links:
1. https://www.geeksforgeeks.org/problems/add-two-numbers-represented-by-two-arrays2408/1
2. https://leetcode.com/problems/add-to-array-form-of-integer/description/

## Question:
  1. We will be given two numbers whose digits are stored as an array elements in the arr1 and arr2.
  2. We have to return the sum of those two numbers represented as the array elements.
## Solution Approach:
  1. 
 */
function calc_sum(arr1, arr2) {
  let sumNumber = 0;
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let carry = 0;
  let base = 0;

  // Adding numbers till either one of the array (arr1 or arr2) exhausts.
  while (i >= 0 && j >= 0) {
    let digitSum = arr1[i] + arr2[j] + carry;
    let remainder = digitSum % 10;
    carry = Math.floor(digitSum / 10);

    sumNumber += remainder * 10 ** base; // Building sumNumber using base.
    base++;

    i--;
    j--;
  }

  // Adding numbers from the left out arr1 elements.
  while (i >= 0) {
    let digitSum = arr1[i] + carry;

    let remainder = digitSum % 10;
    carry = Math.floor(digitSum / 10);

    sumNumber += remainder * 10 ** base; // Still building number.
    base++;
    i--;
  }

  // Adding numbers from the left out arr2 elements.
  while (j >= 0) {
    let digitSum = arr2[j] + carry;

    let remainder = digitSum % 10;
    carry = Math.floor(digitSum / 10);

    sumNumber += remainder * 10 ** base; // Still building number.
    base++;
    j--;
  }

  sumNumber += carry * 10 ** base;

  return sumNumber;
}
