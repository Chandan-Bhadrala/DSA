/**
# Fast Exponentiation.

## Question:
1. We'll be given a number and we have to do cube of all the individual digits of the number and then sum those cubes.
2. Sum of cubes of the digits must be equal to the original number.
  2.1. For number to be a Armstrong Number.
## Solution Approach:
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
