/**
# Insertion Sort Implementation.

## Question:
## Solution Approach:
1. It's name should be mainly shifting algorithm.
  1.1. As it mainly keep shifting the elements, as swapping is costlier than shifting (CPU cycles wise).
2. This algo requires to start from the 1st index rather than 0th index using pointer i.
  2.1. Store the value of the held index by the pointer i in a temp variable.
3. Now using pointer j starting from "i - 1" position, keep shifting elements to the right till we find a value smaller than target value.
  3.1. This way bigger values than target value will get shifted to the right from the very beginning.
  3.2. And this way we will have sorted left section from very beginning.
4. If pointer j reaches value of index 0, it means pointer j couldn't find smaller element than the target element and then the target element must be placed at index 0.
*/

//-----------------

/**
Error: In Approach
1. My code was conflicting for j == 0 index as I was shifting 1 from index 2 to 0.
2. It overwrite index 0 value (Using middle else branch) but never shifted value 2.
*/

function insertionSort(arr) {
  // First pointer i to hold the target value.
  for (let i = 1; i < arr.length; i++) {
    let targetValue = arr[i];

    // Second pointer to find the proper place for the target value.
    // Until j finds the proper place it will keep shifting the bigger elements than target element to the right.
    for (let j = i - 1; j >= 0; j--) {
      // If target value is bigger than the left element, then place target element right to the found smaller element.
      if (arr[j] < targetValue) {
        arr[j + 1] = targetValue;
      } else if (j == 0) {
        
        // If no value on the left of the target value found smaller then place target value at index 0.
        arr[j] = targetValue;
      } else {

        // Keep shifting bigger elements than the target value to the right.
        arr[j + 1] = arr[j];
      }
    }
  }

  return arr;
}

console.log(insertionSort([2, 4, 1, 5]));
