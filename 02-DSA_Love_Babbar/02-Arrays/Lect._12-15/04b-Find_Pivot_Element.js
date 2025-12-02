// # Find the pivot element in a rotated and sorted array.
// 1. Will create a solution using a new mindset regarding Binary Search, i.e., only shrink the boundaries using the start and end pointers.
// 1.1. Only use the mid-pointer for comparison purposes, comparing the start/end pointer to the mid-pointer to evaluate which pointer (start or end) needs to be moved.
// 1.2. The mid-pointer will converge towards the final answer automatically.
// ## Trick or thought process.
// 1. In the rotated sorted array, we have two sorted halves.
// 1.1. Thus, we have to decide if our target value lies in the first sorted half or the second sorted half.
// 1.2. If our target lies in the second sorted half, then we will consider the end-pointer as the anchor/reference and compare our arr[mid] with arr[end] to shift our search space of "start-end" towards the right.
// 1.3. Similarly, if our target lies in the first sorted half, then we will consider the start-pointer as the anchor/reference and compare our arr[mid] with arr[start] to shift our search space of "start-end" towards the left. Search for an element in a rotated and sorted array.

//-----------------

// 01. A function to find the pivot element in the rotated sorted array.
function pivotElement(arr) {
  
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (start < end) {
        // Updating mid-pointer value.
        mid = Math.floor((start + end) / 2);

        // We will be shifting start and the end pointer towards the unsorted section of the array, in pursuit to find the minimum value, which is our pivot value.

        // Shifting start-pointer towards the right.
        if (arr[mid] > arr[end]) {
            start = mid + 1;
        }

        // Shifting end-pointer towards the left.
        else if (arr[mid] <= arr[end]) {
            end = mid;
        }
    }

    // start === end -> index of minimum (pivot)
    return arr[end];
}
