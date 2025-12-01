// # Find the pivot element in a rotated and sorted array.
// 1. In this problem, we are given an array with **unique** sorted elements which is rotated n times.
// 1.1. Rotating an array 1 time means, shifting the last element to the first index.
// 1.2. Thus, rotating an array n times means, shifting n elements from the rear of an array to the beginning of the array.
// 2. So, now as we understood what is an sorted and then a rotated array is.
// 2.1. The question, we have to find the element at which the rotation has happened.
// 3. Here's an example: Assume an sorted array: [1, 2, 4, 5, 6, 8, 9, 10, 12].
// 3.1. Let it be a 4 times rotated array, then the array would become: [8, 9, 10, 12, 1, 2, 4, 5, 6,].
// 3.2. Now, we have to reply with the answer as an index of either 12 or 1, as these values represent the pivot value for the rotated sorted array.
// 4. Now, as we have understood the problem statement clearly, we can approach towards a solution.
// 4.1. Approach is simple, we have two parts of the array both are sorted.
// 4.2. We either look for 12 or 1. We have to decide this from the beginning.
// 4.3. Let's say we are looking for number 1's index.
// 4.4. Key in this question is **unique elements** and array is **sorted** before rotating.
// 5. Solution:
// 5.1. Solution is to move start and the end pointer towards the **unsorted region**, because that is the place where the **pivot element resides**.
// 5.2. We will be comparing our **mid value (arr[mid])** with the **start value (arr[start])**, to access and evaluate whether the **mid** is too close to the **start or mid-pointer is too close to the end**.
// 5.3. If (arr[mid] > arr[start]), this means we are in the **first sorted half** of the array and thus we need to move the **start pointer** towards the **right**, to narrow down our mid-pointer closer to the desired pivot value.
// 5.4. If (arr[mid] < arr[start]), then this means our **mid-pointer** is towards the **second sorted half** of the array and we need to shift our **end-pointer** towards the **left**, to narrow down our mid-pointer closer to the desired pivot value.

//-----------------

// 01. A function to find the pivot element in the rotated sorted array.
function pivotElement(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // Updating mid-pointer value.
    let mid = Math.floor((start + end) / 2);

    // We will be shifting start and the end pointer towards the unsorted section of the array, in pursuit to find the minimum value, which is our pivot value.
    
    // Shifting start-pointer towards the right.
    if (mid - 1 >= 0 && arr[mid] < arr[mid - 1]) {
      return pivotElement;
    }
    
    // Shifting end-pointer towards the left.
    if (mid - 1 >= 0 && arr[mid] > arr[mid - 1]) {
      end = mid - 1;
    }

    // If our mid-pointer is at the left of our minimum value, shift start-pointer to the left.
    if (mid - 1 >= 0 && arr[mid] > arr[mid - 1]) {
      end = mid - 1;
    }
  }
}
