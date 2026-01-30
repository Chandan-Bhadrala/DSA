/**
# Permutation of the substring in the main string.

## Tutorial Link:
https://youtu.be/VXewy91P0S4?si=4mqCbi8W4FzdvUJk

## Question:
1. We are supposed to return a boolean value to indicate whether the permutation of the subStr is present in the str or not.

## Solution Approach:
1. Well I'm supposed to first track the frequency of the subStr in an array.
2. Next I'll need to loop through the str using a for-loop.
  2.1. And I'll also need another nested loop to create a window of subStr size and track the alphabets of the str of the window sized and compare that window elements with subStr frequency using a helper function.
*/

// -----------------------------

function permutationInStr(str, subStr) {
  let subStrFreq = new Array(26).fill(0);

  // Create a frequency array for the subStr.
  for (let i = 0; i < subStr.length; i++) {
    let ascii = subStr[i].charCodeAt(0) - 97;
    subStrFreq[ascii]++;
  }

  // Loop through the str.
  for (let i = 0; i <= str.length - subStr.length; i++) {
    let window = i;
    let windowFreq = new Array(26).fill(0);
    let windowIdx = 0; // Controls the window's iterator.

    while (windowIdx < subStr.length) {
      let ascii = str.charCodeAt(window) - 97; // Window always has the starting index of the window, then we'll increment window to complete our windowFreq array.
      windowFreq[ascii]++;
      window++; // It'll stop the loop for the window's while-loop.
      windowIdx++;
    }

    console.log(windowFreq);

    // Compare the window with subStrFreq.
    if (compareFreq(subStrFreq, windowFreq)) return true;
  }

  return false;
}

// Helper function.
function compareFreq(subStrFreq, windowFreq) {
  for (let i = 0; i < subStrFreq.length; i++) {
    if (subStrFreq[i] != windowFreq[i]) {
      return false;
    }
  }
  return true;
}

// --- Output:
console.log(permutationInStr("daabcbaabcbc", "abc"));
