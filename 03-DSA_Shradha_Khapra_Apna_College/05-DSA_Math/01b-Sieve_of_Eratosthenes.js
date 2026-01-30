/**
# Sieve of Eratosthenes.

## Question:
1. Assume we are given a number "40" and we have to find all the prime numbers upto number "40".
2. Naive approach would be to check each number from 2 to 40, whether it's prime or not.
3. However, Eratosthenes has provided a efficient way to find the prime number up till a given number.
4. As finding prime numbers upto a large number like "10,000" could be a CPU heavy task, if computed using naive approach.

Time Complexity (Naive Approach): O(N * sqrt(N)).
Time Complexity (Sieve of Eratosthenes): O(N log log N).

Time Complexity Difference:
Sieve of Eratosthenes is approximately **200 times** faster than a Naive approach.
## Solution Approach:
  1. Rather than checking each number whether it's prime or not up till a given number.
  2. We use a sieve to filter out the multiples of the initial prime number.
  3. And we do step 2 only till primeNumber*primeNumber < givenN.
  4. As numbers greater than primeNumber will already be sieved/filtered out as being the multiples of the smaller prime number.
    4.1. For e.g. For given n = 49.
    4.2. We will only run the eratosthenes algo upto number 7.
    4.3. As numbers like 8, 10, 12, 14, 16 and so on will already be filtered or sieved out as 2's multiple.
*/
// -----------------------------

// ## Sieve of Eratosthenes for finding the Prime Number upto given number "n".
function sieveOfEratosthenes(n) {
  // We will consider array indices to be our numbers and its boolean value will indicate, whether it's prime or not.
  // Initially we are considering every number to be a prime number.
  // As it is easier to mark "Not a Prime Number" in an array than to mark numbers as a prime number in a code.
  let listOfNumbers = new Array(n + 1).fill(1);

  // 0 and 1 are not a prime number.
  listOfNumbers[0] = 0;
  listOfNumbers[1] = 0;

  // Will push final sieved prime-numbers into this (primeNumbers) array.
  let primeNumbers = [];

  // ## Filter out multiples of the initial prime numbers.
  // 01. Run for loop only till "i * i < n".
  // i * i <= n is kept instead of i * i < n. Because consider n = 49.
  // For i * i < n, we won't be checking for 7 and our code won't check beyond i = 6. Which will yield wrong boundary output.
  for (let i = 2; i * i <= n; i++) {
    // Enter filter method only if the "i" number is a prime number.
    if (listOfNumbers[i]) {
      // 02. Filter out multiples of initial prime numbers in the listOfNumbers array.
      // Instead of running every numbers table starting from 2 (i.e., j = i * 2), we can further improve code by starting multiple table from "j = i * i".
      // As doing 7 * 2, will not yield any new result.
      // So, starting from 7 * 7 makes more sense.
      // j is kept <= instead of <, because we wish to check whether the last number n is a multiple of any prime number or not.
      for (let j = i * 2; j <= n; j = j + i) {
        // Start marking multiples of the initial prime number as "not a prime number".
        listOfNumbers[j] = 0;
      }
    }
  }

  // If index holds a value 1, then it means it's an prime number and thus push its index value into the primeNumbers Array.
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers[i]) {
      primeNumbers.push(i);
    }
  }

  // Finally return primeNumbers Array.
  return primeNumbers;
}

// --- Output:
console.log("Prime Numbers:", sieveOfEratosthenes(100));
