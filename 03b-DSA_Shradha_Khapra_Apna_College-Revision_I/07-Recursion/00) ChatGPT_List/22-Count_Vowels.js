/**
# Count vowels in a string using recursion.

## Question:
## Solution Approach:
1. I've to create a vowel map to let the code know this is a target character.
2. Rest if the target found push it to an object where key is a vowel and value is a count.
*/
// -----------------------------

function countVowels(str, i = 0) {
  // Base Case: Terminate the recursive loop and provides an object.
  if (i == str.length) return { a: 0, e: 0, i: 0, o: 0, u: 0 };

  // Do the recursive call with incremented iterator and receive an updated vowelObject from the deeper recursive calls.
  // Start receiving from the base case and so on.
  const vowelObject = countVowels(str, i + 1);

  // At very initial, we have received an initial object with count 0 from the base case let's modify it.
  if (
    str[i] == "a" ||
    str[i] == "i" ||
    str[i] == "e" ||
    str[i] == "o" ||
    str[i] == "u"
  ) {
    vowelObject[str[i]] = vowelObject[str[i]] + 1;
    return vowelObject;
  }

  // Return vowel object as it is to the following unwinding recursive calls to further pass on and make vowelObject reach the calling function.
  return vowelObject;
}

// --- Output:
console.log(countVowels("aabbcceeffiigguuooeevvaa"));
