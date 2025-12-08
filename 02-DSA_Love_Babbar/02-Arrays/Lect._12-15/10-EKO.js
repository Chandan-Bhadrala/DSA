// # Search for an element in a rotated and sorted array.
// 1. A woodcutter needs a wood out of a forest and he got trees length stored in an array.
// 2. If he needs M metre of wood in total, he need to know at what height he must set his wood cutting blade to accumulate his required wood without over cutting any given tree.
//-----------------

// 01. A function to find the blade height to cut the trees at the minimum possible height to not over-cut any single tree.
function bladeHeight(arr, woodRequired) {
  // Below, "start and end" blade height, decides the amount of tree cutting.
  // Start = 0, means cut all trees full length.
  let start = 0;
  // end = Maximum height of the tree, means cut no tree at all.
  let end = Math.max(...arr);

  // Declaring and initializing the finalAnswer.
  let finalAnswer = -1;

  let maxWoodAvailable = arr.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );

  // Early return, if required wood is more than available wood.
  if (woodRequired > maxWoodAvailable) return finalAnswer;

  while (start <= end) {
    // Updating mid-pointer value, to recalculate the blade height to chop down only required amount of wood.
    let mid = Math.floor((start + end) / 2);

    if (isPossible(arr, mid, woodRequired)) {
      // Increasing the mid value to try for another higher value of the mid (i.e., blade height), in pursuit to cut less of a trees.
      start = mid + 1;
      finalAnswer = mid;
    } else {
      // If current mid value is unable to accumulate the required amount of tree, choose lower blade height in pursuit to cut more of a single tree. To get the required amount of the wood out of trees.
      end = mid - 1;
    }
  }

  // Returning the blade height
  return finalAnswer;
}

function isPossible(arr, mid, woodRequired) {
  let woodAccumulated = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] > mid) {
      woodAccumulated = woodAccumulated + arr[i] - mid;
      if (woodAccumulated >= woodRequired) return true;
    }
    i++;
  }
  return false;
}
