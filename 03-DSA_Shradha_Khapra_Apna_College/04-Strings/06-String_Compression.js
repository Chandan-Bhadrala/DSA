/**
# String Compression.
## LeetCode:
https://leetcode.com/problems/string-compression/description/

## Question:

## Solution Approach:
*/

// -----------------------------
/**
Error: In Approach.
1. I was supposed to change the str array in-place.
2. I was supposed to add digits as string of 12 -> "1", "2"
*/

function stringCompression(str) {
  let resArr = [];

  for (let i = 1; i < str.length; i++) {
    resArr.push(str[i]);
    let count = 1;

    while (str[i] == str[i - 1]) {
      count++;
      i++;
    }

    resArr.push(count);
  }

  return { resArr, length: resArr.length };
}

// --- Output:
console.log(stringCompression(["a", "a", "b", "b", "c", "c", "c"]));

// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
