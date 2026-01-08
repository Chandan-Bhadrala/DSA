/**
# Correction in the approach:
  1. Last approach was mostly fine but it were running while-loop till the "k >= 0".
  2. However, we are supposed to run the loop till nums2 is exhausted.
    2.1. i.e., run while-loop till "j >= 0".
    2.2. So, run the loop till nums2 has been copied into the nums1.
    2.3. Because the moment nums2 is exhausted we can stop interfering with the nums1.
    2.4. As nums1 pending elements are already in a sorted condition.
  3. Strictly saying, Comparison between elements must be done only when both pointers are valid.
   3.1. Pointer `i` must be >= 0 to access nums1.
   3.2. Pointer `j` must be >= 0 to access nums2.
4. However, the loop itself must run only until nums2 is exhausted (j >= 0),
   because remaining elements of nums1 are already sorted and correctly placed.
5. Below is the corrected code.
*/

// m and n are number of elements in each array.
function mergeSort(nums1, m, nums2, n) {
  let i = m - 1; // accessing the nums1 array from the point where its last element exists in the array.
  let j = n - 1; // accessing the nums2 array from the rear end.

  let k = m + n - 1; // accessing the nums1 array from the rear end.

  // Run while-loop, till nums2 is copied completely.
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  return nums1;
}
