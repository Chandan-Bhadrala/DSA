/**
# Segmented Sieve. By AI Gemini.

## Question:

## Solution Approach:
 
*/
// -----------------------------

/**
 * Uses Segmented Sieve to find primes in the range [low, high]
 */
function segmentedSieve(low, high) {
    // Step 1: Find all primes up to sqrt(high) using simple sieve
    const limit = Math.floor(Math.sqrt(high));
    const primeBase = simpleSieve(limit);

    // Step 2: Initialize boolean array for the range [low, high]
    // index 0 represents the number 'low', index 1 represents 'low + 1'
    const rangeSize = high - low + 1;
    const isPrime = new Array(rangeSize).fill(true);

    // Special case: if low is 1, mark it as false
    if (low === 1) isPrime[0] = false;

    // Step 3: Use the base primes to mark multiples in the range
    for (let i = 0; i < primeBase.length; i++) {
        const p = primeBase[i];

        // Find the first multiple of p that is >= low
        let start = Math.floor(low / p) * p;
        if (start < low) start += p;
        
        // If start is the prime itself, move to the next multiple
        if (start === p) start += p;

        // Mark multiples of p in the [low, high] range
        for (let j = start; j <= high; j += p) {
            isPrime[j - low] = false;
        }
    }

    // Step 4: Collect primes
    const primes = [];
    for (let i = 0; i < rangeSize; i++) {
        if (isPrime[i]) {
            primes.push(low + i);
        }
    }
    return primes;
}

/**
 * Helper: Standard Sieve to get base primes
 */
function simpleSieve(limit) {
    const isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let p = 2; p * p <= limit; p++) {
        if (isPrime[p]) {
            for (let i = p * p; i <= limit; i += p)
                isPrime[i] = false;
        }
    }
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime[i]) primes.push(i);
    }
    return primes;
}

// Example: Primes between 100 and 150
console.log(segmentedSieve(100, 150));
// Output: [101, 103, 107, 109, 113, 127, 131, 137, 139, 149]