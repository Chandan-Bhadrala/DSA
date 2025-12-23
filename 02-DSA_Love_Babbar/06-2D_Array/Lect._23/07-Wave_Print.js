/**
# Print array elements in a wave fashion.
Link:
https://www.naukri.com/code360/problems/print-like-a-wave_893268?utm_source=youtube&utm_medium=affiliate&utm_campaign=love_babbar_6&leftPanelTabValue=PROBLEM&customSource=studio_nav
## Question:
## Solution Approach:
  1. 
*/
// -----------------------------

// ## Print array elements in a wave fashion.
function wavePrint(arr) {
  let rows = arr.length;
  let cols = arr[0].length;

  let resultArr = [];
  // Traverse array column wise and push the array elements into the new array as per question requirements.

  for (let j = 0; j < cols; j++) {
    if (j % 2 == 0) {
      for (let i = 0; i < rows; i++) {
        resultArr.push(arr[i][j]);
      }
    } else {
      for (let i = rows - 1; i >= 0; i--) {
        resultArr.push(arr[i][j]);
      }
    }
  }
  return resultArr;
}

// --- Output:
console.log(
  "Array elements printed in a wave fashion:",
  wavePrint([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ])
);
