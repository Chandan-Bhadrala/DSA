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
*/

// -----------------------------

function findUnique(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // Return for the success case.
    if (arr[mid] != arr[mid + 1] && arr[mid] != arr[mid - 1]) return arr[mid];

    // Shrink boundaries.
    if (arr[mid] == arr[mid + 1] && (start + mid) % 2 == 0) {
      end = mid - 1;
    } else start = mid + 1;
  }

  return -1;
}

// --- Output:
console.log(findUnique([1, 1, 2, 3, 3, 4, 4, 5, 5]));
