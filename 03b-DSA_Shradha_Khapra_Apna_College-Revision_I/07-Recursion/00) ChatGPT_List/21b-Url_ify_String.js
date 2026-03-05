/**
# Replace all spaces with %20 in a string.

## Question:
## Solution Approach:
*/
// -----------------------------

/**
## Error: In approach.
1. I never updated the frame stacks value for the hasSplStrAdded while building up the frame stacks.
    1.1. It was always false for each stacked call stack.
    1.2. And in my below conditional built, I'm relying on the hasSplStrAdded to build string conditionally.
    1.3. However, hasSplStrAdded is always false.
*/

// ## Multiple white spaces at one place.
function url_ify_string(str, i = 0, hasSplStrAdded = false) {
  // Base case: Terminates the recursive loop and seed an empty string to build the answer upon.
  if (i == str.length) return "";

  // Let it be a Head Recursion. So, let's build the frame stack first and receive the return value.
  let finalStr = url_ify_string(str, i + 1, hasSplStrAdded);

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
