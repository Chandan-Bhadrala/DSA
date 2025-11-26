// # Find the single duplicate number in the given array.
// 1. We will sort the array and compare the number with its adjacent number.
// 2. For the two adjacent numbers which are equal, we will return that number as a duplicate number.
// 3. Same could have done using XOR. But only for the array which has sequence of numbers starting from 1 onwards and a single duplicate number in between.
// 3.1. We would have to XOR given array once and store its result in the xorArr.
// 3.2. And XOR a number sequence range starting from 1 till "array size - 1" and store its result in the xorRange.
// 3.3. Then at last we had to XOR, xorArr with xorRange (xorArr ^ xorRange).
// 3.4.1. This would have result in yielding the duplicate number.
// 4. Diagram Explanation for the same:
// 4.1. Assume array to be [1, 2, 3, 3, 4]
// 4.2. What we are doing is, creating a result out of XOR of xorArr ^ xorRange. It would have looked like:
// 4.2.1. 1 ^ 2 ^ 3 ^ 3 ^ 4 (xorArr) ^ 1 ^ 2 ^ 3 ^ 4 (xorRange)
// 4.2.2. Here common variables which has occurrence in pair would have cancelled out and the number which is repeating thrice or in odd numbers would have left.
// 4.2.3. And that would have been our result.

// -----------------------------
import readline from "readline/promises";

// 00a. Create input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 00b. A generic helper function helps to take multiple user input using async/await.
async function ask(q) {
  return rl.question(q);
}
// -----------------------------

// 01a. A function to find count or frequency of an element in an array.
function findSingleDuplicateNumber(arr) {
  let i = 0;

  while (i < arr.length - 1) {
    if (arr[i] == arr[i + 1]) return arr[i];
    i++;
  }
}

// -----------------------------

// 01b. Example Dynamic usage:
const inputArray = await ask(
  "Enter an array elements separated by a single space: "
);

const arr1 = inputArray.trim().split(" ").map(Number);

const duplicateNumber =
  findSingleDuplicateNumber(arr1) ||
  "Found no duplicate number in the given array";

console.log("Duplicate number in the given array is:", duplicateNumber);

// if (hasUniqueFrequency) {
//   console.log("Thus, frequency of the numbers in the given array is Unique");
// } else {
//   console.log(
//     "Thus, frequency of the numbers in the given array is not Unique"
//   );
// }

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

// # ChatGPT refinement on my above notes.

// ### Here is a clean, corrected, and complete version of your explanation with polished flow and accurate XOR logic, without using H1 and sticking to simple English.

// ## Find the single duplicate number in the given array.

// 1. One simple way is to sort the array and compare each element with its next one.
// 1.1. If two adjacent elements are equal, that value is the duplicate.

// 2. The same task can be done using XOR, but only when the array contains
//     numbers from 1 to n-1 and exactly one number is duplicated.
//     Example: [1, 2, 3, 3, 4]

// 3. XOR approach works because pairs cancel each other out.
// 3.1. XOR all elements of the array → xorArr.
// 3.2. XOR all numbers from 1 to (array size - 1) → xorRange.
// 3.3. XOR the two results: xorArr ^ xorRange.
// 3.4. Everything that appears exactly twice cancels out.
// 3.5. The only value appearing an odd number of times (the duplicate) remains.

// 4. Diagram Explanation:
//    For array [1, 2, 3, 3, 4]
//    xorArr   = 1 ^ 2 ^ 3 ^ 3 ^ 4
//    xorRange = 1 ^ 2 ^ 3 ^ 4
//
//    Full XOR:
//    1 ^ 2 ^ 3 ^ 3 ^ 4 ^ 1 ^ 2 ^ 3 ^ 4
//
//    All pairs cancel out:
//
//    (1 ^ 1) ^ (2 ^ 2) ^ (3 ^ 3) ^ (4 ^ 4) ^ 3
//
//    Remaining value = 3 → the duplicate number.

