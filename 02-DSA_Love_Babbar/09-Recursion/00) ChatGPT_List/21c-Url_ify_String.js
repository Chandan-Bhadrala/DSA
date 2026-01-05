/**
# Replace all spaces with %20 in a string.

## Question:
## Solution Approach:
*/
// -----------------------------

/**
## Error: In approach.
1. Here in the variable hasSplStrAdded, I'm storing the fact that current character of the string is space or not.
2. So, variable naming is incorrect. As while building the frame stack I've not yet added any "%20".
3. So, while building the frame stack, I must only know whether the string character is a valid character or an empty white space.
4. So, the variable naming should be prevWasSpace.
5. So, now I'm building a prevWasSpace value which can be used at the time of unwinding of the recursion.
*/

// ## Multiple white spaces at one place.
function url_ify_string(str, i = 0, hasSplStrAdded = false) {
  // Base case: Terminates the recursive loop and seed an empty string to build the answer upon.
  if (i == str.length) return "";

  // Let it be a Head Recursion. So, let's build the frame stack first and receive the return value.
  let finalStr = url_ify_string(str, i + 1, str[i] === " ");

  // Now, we are receiving frame stacks in unwinding phase. So, let's build our answer conditionally.

  if (str[i] != " " && !hasSplStrAdded) {
    hasSplStrAdded = false;
    return str[i] + finalStr;
  } else if (str[i] == " " && !hasSplStrAdded) {
    hasSplStrAdded = true;
    return "%20" + finalStr;
  } else return finalStr;
}

// --- Output:
console.log(url_ify_string("Bhadrala  dot dev, is a good portfolio  web  app"));
