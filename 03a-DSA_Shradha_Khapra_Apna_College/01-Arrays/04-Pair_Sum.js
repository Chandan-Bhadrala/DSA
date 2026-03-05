/**
# Find the pair sum.

## Question:
1. We have given an sorted array.
2. We are supposed to find a pair of array elements whose sum is equal to the given target value.

## Solution Approach:
1. As we are given an sorted array, we will be utilizing this fact.
2. We'll be taking two pointers, i -> 0 index and j -> arr.length - 1.
3. If the sum is smaller we will increment the i iterator and if the pair sum is greater than the given target value then we'll decrement the j iterator.
*/

// -----------------------------

/**
Improvement:
1. Rather than computing arr[i] + arr[j] twice, I can compute it only once and store its result in a sum variable and may use it rather than computing it again.
2. This save CPU cycles and adheres to the DRY principle of the coding.
3. Detailed MD improvement by the ChatGPT is stored in the following MD file.

One-line essence (DSA mindset):
Compute once, compare many times — clarity first, micro-optimizations second.
*/

function pairSum(arr, target) {
  for (let i = 0, j = arr.length - 1; i < j; ) {
    // Success Case.
    if (arr[i] + arr[j] == target) return [i, j];

    if (arr[i] + arr[j] > target) j--;
    else i++;
  }

  return -1;
}

// --- Output:
console.log(pairSum([1, 2, 3, 5, 6, 8, 9, 12], 9));
