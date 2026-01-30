/**
# Remove all occurrences of a substring.

Link:
https://leetcode.com/problems/remove-all-occurrences-of-a-substring/description/

## Question:
1. 
## Solution Approach:
1. Will create a window of substring length.
2. Will only scan for the substring once match for the first instance/character of the substring is found.
3. Scan only for the "Full string length - substring length". 
  3.1. To avoid pushing **scan/read pointer** beyond full string length.
*/

// -----------------------------
/**
## Error in my approach:
 1. I was trying to solve this problem without using any helper at all.
  1.1. I was trying to solve it by only using if and for-loop.
  1.2. ChatGPT suggested that'll make the problem solution completely rudimentary and way too difficult than it is needed.
2. So, ChatGPT suggested to use join or slice to solve this problem at least.
  2.1. In DSA using join or slice is 100 % acceptable.
  2.2. Only using replace, replaceAll or regex are generally discouraged in DSA problems.
    2.2.1. However, replace and regex are completely acceptable and often preferred in **production code**.
3. As per ChatGPT helpers which abstracts away the need for loop and provide the solution without incremental aggregation are not useful for the DSA part.
  3.1. As use of regex and replace completely hides the need for looping and aggregation.
  3.2. This prevents demonstrating understanding of how the solution is built incrementally.
4. However, split, join and slice doesn't abstracts away the need for the loop to scan and aggregate the desired solution.
  4.1. Thus, split, join, slice, charAt, push, pop, length, Indexing: s[i] are 100 % fine to use in DSA.
  4.2. As, they assist with basic operations but still require manual control over iteration and logic.
  4.3. As they don't hide the need for the looping the variable for extracting the desired solution.
  4.4. Therefore, helpers such as:
- split
- join
- slice
- charAt
- push / pop
- length
- indexing (s[i])
are fully acceptable in DSA solutions.
* /


// 01. A function implementation to remove all occurrences of a substring - w/o using replace helper function.

function removeAllSubstrings(s, part) {
  let windowSize = part.length; // Accessing total number of substring characters.
  let stringLastIndex = s.length - 1;
  let newString = ""; // String value after every iteration.
  let finalString = ""; // String value after last scan.

  let i = 0;
  while (i <= stringLastIndex - windowSize) {
    // Try to remove the substring upon finding its first character match.
    if (s[i] == part[0]) {
      // Check for i, i + 1, i + 2, max till part.length for rest of the character matching.
      let scanLimit = i + windowSize;
      let iPointerValueBeforeRemovingSubstring = i;
      for (let j = 0; i <= scanLimit; ) {
        if (s[i] == part[j]) {
          // let the pointer increment for the next check.
          i++;
          j++;
        } else {
          i = iPointerValueBeforeRemovingSubstring;
        }
      }
    }
    newString += s[i];
    i++;
  }

  // Add the last remaining characters avoided by the while loop and the window size.
  for (; i <= stringLastIndex; i++) {
    newString += s[i];
  }

  return newString;
}

//------------

let s = "daabcbaabcbc";
let substring = "abc"; // Output: "dab"
// let s1 = "Hi there, how are you.";
// let substring1 = "there,";

console.log("Given string after removing the substring:",removeAllSubstrings(s, substring));
