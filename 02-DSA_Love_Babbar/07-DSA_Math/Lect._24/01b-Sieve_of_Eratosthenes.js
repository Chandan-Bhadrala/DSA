/**
# Sieve of Eratosthenes.

## Question:
1. Assume we are given a number "40" and we have to find all the prime numbers upto number "40".
2. Naive approach would be to check each number from 2 to 40, whether it's prime or not.
3. However, Eratosthenes has provided a efficient way to find the prime number up till a given number.
4. As finding prime numbers upto a large number like "10,000" could be a CPU heavy task, if computed using naive approach.

Time Complexity (Naive Approach): O(N^2).
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

// 01. Create a 2D array. For given 1D array.
function sieveOfEratosthenes(n) {
  let primeNumbers = [];

  return primeNumbers;
}

// --- Output:
console.log("Prime Numbers:", sieveOfEratosthenes(50));
