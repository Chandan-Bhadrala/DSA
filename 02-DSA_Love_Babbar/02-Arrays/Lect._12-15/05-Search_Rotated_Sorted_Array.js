// # Search for an element in a rotated and sorted array.
// 00. We have to find for the target element in the rotated sorted array.
// 1. 

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
