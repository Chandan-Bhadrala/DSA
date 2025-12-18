/**
# Find maximum occurring characters.

Link:
https://www.geeksforgeeks.org/problems/maximum-occuring-character-1587115620/1

**Input String:** "abcdeapapqarr"
**Expected Output:** 'a'
**Explanation:** Since 'a' has appeared four times in the string which happens to be the highest frequency character, the answer would be 'a'.

## Question:
1. Find characters which has maximum occurrence in the given string in the string.
## Solution Approach:
 1. Create an array 0 to 25 index and push the corresponding character into the array accordingly.
 2. Find the maximum array element and its index in the array and return the corresponding character.
*/

// -----------------------------

// 01. A function to find and return the maximum or most frequent character in the string.
function maxCharacter(s) {
  s = s.toLowerCase(); // normalize string letter casing.

  let characterArray = new Array(26).fill(0);

  // Scan through array and push their number count in the corresponding array position.
  for (let i = 0; i < s.length; i++) {

    // If-condition, to avoid characters other than "a" - "z".
    let ASCIIcode = s.charCodeAt(i);
    if(ASCIIcode>=97 && ASCIIcode<=122){

      // Below code will increment the index from 0 to 25 according to the character's alphabetical order.
      let index = ASCIIcode - "a".charCodeAt(0);
      characterArray[index]++;
    }

  }
  let firstMaxValue = Math.max(...characterArray);
  let maxValueIndex = characterArray.indexOf(firstMaxValue);

  let mostRepeatedCharacter = maxValueIndex + "a".charCodeAt(0); // Smaller in Lexicographical Order.

  // Creating number into a ASCII character and returning.
  return String.fromCharCode(mostRepeatedCharacter);
}

//------------
let s = "Output";
console.log("Max character in a string:", maxCharacter(s));

// Just a proof that string is stored as an character array.
// console.log(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);
