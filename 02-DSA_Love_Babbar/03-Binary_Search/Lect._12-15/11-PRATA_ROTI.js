// # PRATA ROTI
// A beautiful description and the solution for this problem can be found on the below urls.
// https://copyassignment.com/roti-prata-spoj-problem-solution/
// https://github.com/Ashutosh2128/Consistent-Coding-Daily-DSA/blob/main/Day-20/PRATA-RotiPrata.cpp

//-----------------
// ## Solution Approach:
// 00. We will be given an array of chefs with their ranks and number of pranthas need to be cooked.
// 00b. We have to return **how much time** will it take for given number of chefs to cook those pranthas.
// 1. Give max time to each individual cook/chef to cook prata and add their cooked prata's in a global total sum of pranthas.
// 2. Each chef takes R*P time to cook a prantha.
// 2.1. For first prantha chef with R rating will take R*1, then for second prantha chef will take R*2 time.
// 2.2. So, for a given max time we will check how many integer number of pranthas each chef can make.
// 3. If all chefs under while or for loop were able to cook the given prata's within the given max time then we will iterate again with lesser mid value (max allowed time).
// 3.1. If chefs were unable then we will iterate again with higher amount of time.
// 4. Will return the **minimum required time** to cook the given number of pranthas by the given number of chefs.
//-----------------

// ## If unable to solve this question:
// This solution approach uses AP and I didn't get the solution exactly.
// Asked ChatGPT, he too said this question belongs to the Competitive Programming and not to the real world Web Dev world.
// As per ChatGPT, if I were already able to solve and understand the Book Allocation and EKO DSA problem, then that means I'm already good enough with Binary Search and can comfortably ignore the PRATA ROTI DSA question. As this solution approach will never touch my web dev needs unless I'm appearing for the interview for the FAANG Companies.
// Any company below FAANG will not be asking ROTI PRATA question.
//-----------------

// 01a. A function to solve for PRATA ROTI problem, it will return the minimum required time to cook the given amount of the Rotis.
function minimumTimeRequired(arr, requiredRotis) {
  let startTimeBoundary = 0;

  // Used slowest cook rank and AP (Arithmetic Progression) to calculate the endTime boundary, "maxRank * AP"
  let maxRank = Math.max(...arr);
  let endTimeBoundary = maxRank * ((requiredRotis * (requiredRotis + 1)) / 2);

  let finalAnswer = null;

  // Run Binary Search on the upper and the lower bounds to narrow down for the possible result/answer.
  while (startTimeBoundary <= endTimeBoundary) {
    let mid = Math.floor((startTimeBoundary + endTimeBoundary) / 2);

    if (isPossible(arr, mid, requiredRotis)) {
      endTimeBoundary = mid - 1;

      // Store and update the success case mid result.
      finalAnswer = mid;
    } else {
      startTimeBoundary = mid + 1;
    }
  }
  return finalAnswer;
}

// 01b. A helper function for checking whether the required Roti's can be cooked within the minTime (mid) or not. Thus, it returns a boolean.
function isPossible(arr, mid, requiredRotis) {
  let totalRotis = 0;

  // Running for-loop for each individual chef "r" to see how many pranthas they can cook in the given maximum time.
  for (let r of arr) {
    // Declaring and initializing the rotis cooked and timeTaken for each chef from the beginning.
    let roti = 1;
    let timeTaken = roti * r;

    // Running while loop for individual chef till chef takes the maximum allowed time (mid).
    while (timeTaken <= mid) {
      // updating totalRoti count.
      totalRotis++;
      if (totalRotis >= requiredRotis) return true;

      // Calculating timeTaken for the next roti and updating the totalTimeTaken.
      roti++;
      timeTaken += roti * r;
    }
  }
  return false;
}
