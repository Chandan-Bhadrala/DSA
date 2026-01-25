/**
# Find the single unique element in the array using binary search.

## Question:
1. We'll be given an sorted array with duplicates and only one single unique element.
2. We are supposed to find that unique element using binary search.
3. However, we could use XOR operation but that would lead to O(n) time complexity.
4. We are supposed to do it in the O(log n) time complexity.

## Solution Approach:
1. If mid is not equal to its either left or the right element, then we found our unique element.
2. If the mid is equal to either side then we discard the half which has even length.
3. As half with the unique element will have odd length.

1. However, to check the duplicate pair.
  1.1. We'll ensure that our mid is at the first duplicate pair for performing the check to avoid checking left and also the right check.
2. So, we'll shift the mid using mid-- if needed.
  2.1. To bring the mid to the first duplicate pair.
*/

// -----------------------------

/**
## Improvement: In approach.
1. Normalize the mid value.
2. Mid should be even and it should be holding the first duplicate.
  2.1. Thus, arr[mid] must be = arr[mid + 1].
  2.2. This is true, only if all the left value are simply duplicates.
3. If the above statement is true search the right-half otherwise search the left-half.
*/

function findUnique(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    // Shrink boundaries, if we didn't found our target yet.

    // Normalize the mid value. Bring the mid towards the first duplicate pair.
    if (mid % 2 == 1) mid--;

    // Now, arr[mid] must be == arr [mid + 1]. If mid is a duplicate value.
    if (arr[mid] == arr[mid + 1]) {
      // It means we've only duplicates on the left side.
      // So, let's shift the start pointer.
      start = mid + 2;
    } else {
      // As mid could possibly be the unique number.
      end = mid;
    }
  }

  return { stIndex: start, endIndex: end };
}

// --- Output:
console.log(findUnique([1, 1, 2, 2, 4, 5, 5]));
