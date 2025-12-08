// # Beautiful Triplets.
// 1. In this question we will be given an array with the numbers in the increasing orders, we have to find count of beautiful triplets.
// Q) What is beautiful triplets.
// 1. If we have three numbers x, y, z.
// 1.1. Then for these three numbers to be a beautiful triplets:
// x - y == z - y == d.
// 2. In question, you'll be given the value of "d" and you'd have to find the numbers in the array that satisfy the condition or difference of value "d".

//-----------------
// Solution Approach:
// 1. Pick first value at arr[0] and take "d" and compute value of "y" and "z".
// 2. Search the array for the "y" and "z", if found these values of "y" and "z" in the array then, increment count variable by 1.
// 3. If no value for "y" and "z", found move to arr[1] and compute again value of "y" and "z" with the help of the "d" and then search for the value of "y" and "z" again as in the "step 2".
//-----------------

// 01. A function to search for a beautiful triplets.
function beautifulTriplets(arr, difference) {
  let start = 0;
  let end = arr.length - 1;
  let mid = null;

  
}
