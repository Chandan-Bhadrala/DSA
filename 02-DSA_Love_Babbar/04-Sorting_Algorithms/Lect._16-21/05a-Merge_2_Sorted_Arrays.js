/**
# Merge two Sorted Arrays into the first array.
## Question:
  1. We will be given two sorted arrays and we will have to merge both arrays into the first given array.
  2. We have to make sure, that first array even after the merge stays sorted.
    2.1. We have to merge both arrays into the array1.
  3. We will be given the number of elements in the both arrays (m & n).
    3.1. m are the present elements in the first array.
    3.1. n are the present elements in the second array.
  4. array1 has size of "m + n". This means array1 is built to accommodate the elements of the array2 too.
## Solution Approach:
  1. In this question we will be using three pointers.
    1.1. i -> will be starting from the last present element of the arr1.
    1.2. j -> will be starting from the last present element of the arr2.
    1.3. k -> will be starting from the last index of the arr1.
  2. We will be starting inserting elements into the arr1 from the rear end of the arr1.
  3. Will keep decrementing k, i and j.
  4. To fill up the arr1 with the arr2 elements keeping the sorting in mind.
*/

// m and n are number of elements in each array.
function mergeSort(nums1, m, nums2, n) {
  let i = m - 1; // accessing the nums1 array from the point where its last element exists in the array.
  let j = n - 1; // accessing the nums2 array from the rear end.

  let k = m + n - 1; // accessing the nums1 array from the rear end.

  while (k >= 0){
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else if (nums1[i] <= nums2[j]) {
      nums1[k] = nums2[j];
      j--;
    }
  k--;
  }
  return nums1;
}
