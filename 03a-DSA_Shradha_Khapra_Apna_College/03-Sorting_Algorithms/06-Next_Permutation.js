/**
# Next Permutation.

## Nice YT Tutorial:
https://youtu.be/-1cLK6PaLsQ?si=6dy8f0J_LzNSlZqw

## Question:
1. We'll be given a number and we have to break it and modify it to yield the immediate next bigger number of it.
  1.1. E.g. -> 123 -> 132 or 1264987 -> 1267489 or 4527431 -> 4531247.
2. If the given number is maximum in itself, then we've to return the smallest forming number out of the given number.

## Solution Approach:
1. 1st -> We've to traverse from the back and find the pivot.
  1.1. Pivot -> is an element where things are turning.
  1.2. We're supposed to traverse from the back and the sequence of the digits should be num[i] > num[i + 1].
  1.3. At the digit this pattern breaks, that digit is our pivot digit.
2. So, once we found our pivot digit, we simply swap it with the **just bigger digit** than the pivot digit at the **RHS of the pivot digit**.
3. Now, from the index of the pivot + 1, we've numbers in the **decreasing order**.
  3.1. So, from the pivot + 1 index, we've to reverse the pattern to form increasing order of the digits.

E.g. 4527431 -> 4531247.

1. "2" -> is the pivot.
  As while traversing from the back/rear. "2" -> is the element which is not greater than the num[i + 1].  
  2. So, we swap 2 with 3 (just bigger number than the pivot digit at RHS of the pivot digit).
  num -> now -> 4537421.
  
  3. Then we reverse the number from the pivot + 1 index till the end.
  num -> now -> 4531247.
*/

// -----------------------------

function nextPermutation(numsArr) {
  let pivot = null;
  let pivotIdx = null;

  // Find Pivot.
  for (let i = numsArr.length - 2; i >= 0; i--) {
    if (numsArr[i] < numsArr[i + 1]) {
      pivot = numsArr[i];
      pivotIdx = i;

      // Break the loop to avoid overwriting of the pivot value.
      break;
    }
  }

  // Edge Case: Given numsArr already a biggest possible number.
  // In such case simply reverse this given number and return the smallest number.
  if (pivot == null) {
    let res = reverse(numsArr);
    return res;
  }

  // Swap pivot with the just larger number than the pivot from its RHS.
  let justBiggerEle = null;
  let justBiggerEleIdx = null;

  for (let i = numsArr.length - 1; i > pivotIdx; i--) {
    if (numsArr[i] > pivot) {
      justBiggerEle = numsArr[i];
      justBiggerEleIdx = i;
      break;
      // RHS of the pivotIdx is a digits at the decreasing order.
      // So, we our very first bigger number from the right is the justBiggerEle.
    }
  }

  // Swap pivot with the justBiggerEle
  [numsArr[pivotIdx], numsArr[justBiggerEleIdx]] = [
    numsArr[justBiggerEleIdx],
    numsArr[pivotIdx],
  ];

  // Reverse the rest
  let res = reverse(numsArr, pivotIdx + 1);

  return res;
}

function reverse(numsArr, stIndex = 0, endIndex = numsArr.length - 1) {
  let iteration = 0;

  for (let i = stIndex; i <= Math.floor((stIndex + endIndex) / 2); i++) {
    [numsArr[i], numsArr[endIndex - iteration]] = [
      numsArr[endIndex - iteration],
      numsArr[i],
    ];

    iteration++;
  }
  return numsArr;
}

// --- Output:
console.log(nextPermutation([4, 5, 2, 7, 4, 3, 1], 3));
