/**
# Remove all occurrences of the substring.

## Question:

## Solution Approach:
1. 
*/

// -----------------------------

/**
Error: In Approach.
1. Using slice method, I was grabbing the sub string rather than deleting it.
2. Better use **replace** string method, or
3. Grab the sliced portion of the string on the based of the indexOf and then concat the grabbed portion as shown in the Gemini code in the corresponding MD file.
*/

function removeOccurrence(str, subStr) {
  let res = str;

  while (str.length > subStr.length && str.indexOf(subStr)) {
    let idx = str.indexOf(subStr);

    // if (idx == -1) break; // Break out of the while loop.
    // Now, included this condition in the while-loop condition.
   
    // re-assign a new value to res. As string variables are immutable.
    console.log(res);
    res = str.slice(idx, subStr.length);
  }

  return res;
}

// --- Output:
console.log(removeOccurrence("madam", "a"));
