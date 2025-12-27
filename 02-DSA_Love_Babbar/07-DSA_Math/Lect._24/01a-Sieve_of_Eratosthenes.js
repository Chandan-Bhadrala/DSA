/**
# Sieve of Eratosthenes. By AI Gemini.
*/

// -----------------------------

/**
 The **Sieve of Eratosthenes** is one of the most efficient ways to find all prime numbers up to a specific limit. It is an ancient algorithm named after the Greek mathematician Eratosthenes of Cyrene.
 
 Rather than checking every number to see if it is prime (trial division), this algorithm works by extinguishing multiples of primes.

// -----------------------------
 
## How the Algorithm Works
The logic follows a simple "mark-and-sweep" process:
1. **Create a list:** Write down all integers from 2 up to your desired limit **n**.
2. **Start with the first prime:** The first prime number is 2.
3. **Eliminate multiples:** Mark all multiples of 2 (4, 6, 8, etc.) as "not prime."
4. **Find the next number:** Move to the next unmarked number (which is 3). This is your next prime.
5. **Repeat:** Mark all multiples of 3. Skip numbers already marked.
6. **Termination:** Continue until you reach the square root of **n**. All remaining unmarked numbers in your list are primes.
*/

/**
## JavaScript Implementation
 
 In JavaScript, we typically use a Boolean array where the index represents the number, and the value (true or false) represents whether that number is prime.
 */

/**
 * Finds all prime numbers up to a given limit using the Sieve of Eratosthenes.
 * @param {number} n - The upper limit.
 * @returns {number[]} - An array of prime numbers.
 */
function sieveOfEratosthenes(n) {
    // Step 1: Initialize an array of size n+1 with true values
    const isPrime = new Array(n + 1).fill(true);
    
    // 0 and 1 are not prime numbers
    isPrime[0] = false;
    isPrime[1] = false;

    // Step 2: Iterate from 2 up to the square root of n
    for (let p = 2; p * p <= n; p++) {
        // If isPrime[p] is still true, it's a prime
        if (isPrime[p] === true) {
            // Step 3: Mark all multiples of p starting from p*p
            // We start at p*p because smaller multiples would have 
            // already been marked by smaller prime factors.
            for (let i = p * p; i <= n; i += p) {
                isPrime[i] = false;
            }
        }
    }

    // Step 4: Collect all indices that remain true
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}

// Example Usage:
console.log(sieveOfEratosthenes(30)); 
// Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

/**
 ## Complexity Analysis
 This algorithm is highly favored in competitive programming and computer science because of its efficiency:
  - Time Complexity: $O(n \log \log n)$. This is nearly linear, making it much faster than checking each number individually.
  - Space Complexity: $O(n)$. We require an array to store the "prime" status of every number up to $n$.

### Why do we stop at the square root of n?
If a number $n$ has a factor larger than sqrt n, it must also have a factor smaller than sqrt n. 

For example, if **n = 100**, **sqrt n = 10**. If we check all multiples of primes up to 10, we will have already marked 20, 30, 40... 90, 100. There is no need to check multiples of 11 because **11 X 2** was already marked by 2, **11 X 3** by 3, and so on.
*/