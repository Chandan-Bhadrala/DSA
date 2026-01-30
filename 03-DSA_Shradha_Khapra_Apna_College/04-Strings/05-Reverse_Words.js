/**
# Reverse words and normalize intermediate and trailing white-spaces.

## Question:
1. We'll be given a string and we've to reverse the words placement of the string and normalize the trailing and intermediary white-spaces.

## Solution Approach:
*/

// -----------------------------
/**
## Error: In Approach.
1. I couldn't debug, too tire to resolve the bug.
2. Chat GPT tried to explain and has corrected the code in the following MD file.
*/

function reverseWords(str) {
  let reverseStr = reverse(str); // yraiD   raeD  ssiM
  let finalAns = "";

  for (let i = 0; i < reverseStr.length; i++) {
    let res = "";
    // Below while-condition will ensure no white spaces gets any place in the final string.
    while (reverseStr[i] != " ") {
      // Fetching the letters till empty space is found.
      res = res + reverseStr[i];
      i++;
    }
    console.log(res);
    if (res != " ") finalAns = finalAns + " " + reverse(res);
    console.log(finalAns);
  }

  return finalAns;
}

// Helper reverse function.
function reverse(str) {
  let res = "";

  for (let i = str.length - 1; i >= 0; i--) {
    res = res + str[i];
  }
  return res;
}
// --- Output:
console.log(reverseWords("  Miss  Dear   Diary "));
