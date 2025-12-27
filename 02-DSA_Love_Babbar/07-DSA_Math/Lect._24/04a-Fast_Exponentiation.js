/**
# Fast Exponentiation.
Tutorial Link:
https://youtu.be/hFWckDXE-K8?si=l9aDtoE3hOmYUMjh

## Question:

## Solution Approach:
  1.  
*/
// -----------------------------

// Solution provided by the Chat GPT.
function fastExponentiation(num, exp) {
  let result = 1;

  while (exp > 0) {
    if (exp % 2 === 1) {
      result = result * num; // accumulate
    }
    num = num * num; // square the base
    exp = Math.floor(exp / 2); // halve exponent
  }

  return result;
}

// --- Output:
let a = 4;
let exp = 9;

console.log(
  `Exponent result of ${a} and ${exp} is:`,
  fastExponentiation(a, exp)
);
