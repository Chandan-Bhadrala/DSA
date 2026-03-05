/**
# Replace all spaces with %20 in a string.

## Question:
## Solution Approach:
*/
// -----------------------------

/**
## Error: In approach.
1. Here in the variable hasSplStrAdded, I'm storing the fact that current character of the string is space or not.
  1.1. So, variable naming is incorrect. As while building the frame stack I've not yet added any "%20".
3. So, while building the frame stack, I must only know whether the string character is a valid character or an empty white space.
4. So, the variable naming should be prevWasSpace.
5. So, now I'm building a prevWasSpace value which can be used at the time of unwinding of the recursion.
*/

// ## Multiple white spaces at one place.
function url_ify_string(str, i = 0, prevWasSpace = false) {
  // Base case: Terminates the recursive loop and seed an empty string to build the answer upon.
  if (i == str.length) return "";

  // Let it be a Head Recursion. So, let's build the frame stack first and receive the return value.
  // Passing prevWasSpace value of this stack to the next stack.
  let finalStr = url_ify_string(str, i + 1, str[i] === " ");

  // Now, we are receiving frame stacks in unwinding phase. So, let's build our answer conditionally.
  // Now, we have knowledge of the white space of the last stack.
  if (str[i] != " ") {
    // hasSplStrAdded = false; Modifying it now will means no difference as this value is not traveling to the next frame stack call.
    return str[i] + finalStr;
  }
  // Else-If, current is a white space but prev was not an white space, then only add %20.
  else if (str[i] == " " && !prevWasSpace) {
    // hasSplStrAdded/prevWasSpace = true; Modifying it now means no difference to the following recursive call/frame stacks.
    return "%20" + finalStr;
  }
  // Else if current is a white space and previously too it was a white space, then simply return the received string without any modification.
  else return finalStr;
}

// --- Output:
console.log(url_ify_string("Bhadrala  dot dev, is a good portfolio  web  app"));

/**
## Frames While Stacking.
Frame 1:
str, i = 0, prevWasSpace = false

Frame 2:
str, i = 1, prevWasSpace = booleanResult(str[i=0] === " ")

Frame 3:
str, i = 2, prevWasSpace = booleanResult(str[i=1] === " ")

Frame 4: (Base Case)
str, i = 3, prevWasSpace = booleanResult(str[i=2] === " ")

---

## Frames while unwinding.
Frame 4:
str, i = 3, prevWasSpace = booleanResult(str[i=2] === " "), finalStr = ""

Here, prevWasSpace value depends upon the string character value of previous frame (Frame 3).

- So, while unwinding every Call stack is holding the white space knowledge of the previous frame.
*/
