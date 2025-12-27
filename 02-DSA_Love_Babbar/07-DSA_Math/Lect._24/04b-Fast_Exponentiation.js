/**
# Fast Exponentiation.
Tutorial Link:
https://youtu.be/hFWckDXE-K8?si=l9aDtoE3hOmYUMjh

## Question:

## Solution Approach:
One final lock-in sentence (By Chat GPT):
“On odd exponent: accumulate into result.
On even exponent: transform the base.”

The **invariant** in Fast Exponentiation:
At every iteration of the loop, the following statement is always true: 
result × (num ^ exp) = original_base ^ original_exp
*/
// -----------------------------

// Been through the tutorial link above and saw the proper dry run of the code and thus came up with the following code.
// Three responsibilities Three Variables (V-Imp Thought Process/Concept taught by ChatGPT. It's an generic rule, which gets applied everywhere. Clear **separation of responsibility**):
// 1. Result -> For Final Result (Accumulator).
// 2. Base -> For changing (increasing) base.
// 3. Exp -> For reducing exp value.
function fastExponentiation(num, exp) {
  let result = 1; // Accumulate base into the result variable.

  let base = num;

  while (exp > 0) {
    if (exp % 2 == 0) {
      base = base ** 2;
      exp = Math.floor(exp / 2);
    } else {
      result = result * base; // Previously accumulated result * new base value.
      exp--;
    }
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
