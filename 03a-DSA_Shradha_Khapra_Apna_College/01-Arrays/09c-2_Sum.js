/**
# 2 Sum (O(n))

## Question:

## Solution Approach:
- Using set (can only return boolean about its existence) or map (can return indices).
1. We've target value and an array.
2. We'll iterate over the array and store its value in the set or in the map.
3. Every time we store the iterated value, we'll check for the existence of the complement number (i.e., complementNum = target - currentNum) before storing the currentNum into the map.
    3.1. If the complementNum exist in the map then we'll return the indices of the currentNum and the complementNum found in the map.
*/

// -----------------------------

// ## Time Complexity (O(n)):
function twoSum(arr, target) {
  // A map to store the iterated values of an array.
  let map = new Map();

  // Iterate an array for the search of the complementNum in the map.
  for (let i = 0; i < arr.length; i++) {
    // Calculate complementNum for the currentNum.
    let complementNum = target - arr[i];

    if (map.has(complementNum)) {
      //   console.log(map);

      return [map.get(complementNum), i];
    }

    // If complement not found in the map, then add the currentNum into the map.
    // Store value as a key and index as a value.
    // Because we are going to search the map for the complementNum and that should be stored as the key.
    // Index is the side effect requirement and not the primary requirement.
    map.set(arr[i], i);
  }

  // Empty array indicating no pair found for the target in the given array.
  return [];
}

// --- Output:
console.log(twoSum([1, 3, 5, 6, 7, 8, 9, 11, 15], 9));
