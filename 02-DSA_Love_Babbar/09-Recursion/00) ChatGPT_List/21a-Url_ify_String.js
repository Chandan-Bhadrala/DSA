/**
# Replace all spaces with %20 in a string.

## Question:
## Solution Approach:
1. Find single white space and replace it with % sign.
*/
// -----------------------------

// ## Single white spaces at one place.
function url_ify_string(str, i = 0) {
  // Base Case: To terminate the recursive loop and to seed the empty string to built up the answer on.
  if (i == str.length) return "";

  // Receive empty string, the base case provided seed and build your answer upon it conditionally in the unwinding phase.
  // In the stacking phase, simply keep on passing the respective value of "i and str" for each frame stack.
  let finalStr = url_ify_string(str, i + 1);

  // In unwinding phase we are receiving back each frame stack of the recursive calls which have their respective value of the "iterator i and the str" and the **return value** "finalStr" from the deeper recursive call.
  // Now, let's build the final string character by character.
  if (str[i] != " ") {
    return (finalStr = str[i] + finalStr);
  } else {
    // If space is found
    return (finalStr = "%20" + finalStr);
  }

  /**
   1. Better return statement rather than if-else, would have been as per ChatGPT.
   2. return str[i] !== " " ? str[i] + finalStr : "%20" + finalStr;
   3. As per it assignment to a finalStr within the return statement is redundant.
   */
}

// --- Output:
console.log(url_ify_string("Bhadrala dot dev, is a good portfolio web app"));
