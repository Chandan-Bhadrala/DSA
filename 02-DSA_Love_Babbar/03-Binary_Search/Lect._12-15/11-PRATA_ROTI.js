// # PRATA ROTI
// A beautiful description and the solution for this problem can be found on the below urls.
// https://copyassignment.com/roti-prata-spoj-problem-solution/
// https://github.com/Ashutosh2128/Consistent-Coding-Daily-DSA/blob/main/Day-20/PRATA-RotiPrata.cpp

//-----------------
// ## Solution Approach:
// 1. Give max time to each individual cook/chef to cook prata and add their cooked prata's in a global total sum of prata's. 
// 2. Each chef takes R*P time to cook a prata.
// 2.1. For first prata chef with R rating will take R*1, then for second prata chef will take R*2 time.
// 2.2. So, for a given max time we will check how many integer number of prata's each chef can make.
// 3. If all chefs under while or for loop were able to cook the given prata's within the given max time then we will iterate again with lesser mid value (max allowed time).
// 3.1. If chefs were unable then we will iterate again with higher amount of time.
//-----------------

// ## If unable to solve this question:
// This solution approach uses AP and I didn't get the solution exactly.
// Asked ChatGPT, he too said this question belongs to the Competitive Programming and not to the real world Web Dev world.
// As per ChatGPT, if I were already able to solve and understand the Book Allocation and EKO DSA problem, then that means I'm already good enough with Binary Search and can comfortably ignore the PRATA ROTI DSA question. As this solution approach will never touch my web dev needs unless I'm appearing for the interview for the FAANG Companies.
// Any company below FAANG will not be asking ROTI PRATA question.
//-----------------

// 01. A function to solve for PRATA ROTI problem.
function minimumTimeRequired(arr, searchN) {
  let start = 0;
  let end = arr.length - 1;
  let mid = null;

  
}
