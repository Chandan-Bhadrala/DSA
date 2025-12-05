// # Square root with precision up to 3 decimal points using binary search.
// 00. Will be given a number and we will have to find the square root value of the given number with the precision upto three decimal points.
// 1. Will be using binary search for finding the integer part of the square root.
// 1.1. Will create a range of numbers to apply binary search.
// 1.2. Self created number line will lie from 1 to n.
// 1.3. n being the number for which square root has to find.
// 2. So, to find the square root of the n, we will use a number line range from 1 to n - 1.
// 3. I believe we can easily reduce the number line range from 1 to n - 1 to 1 to (n-1)/2.
// 3.1. Will check this number range to check its efficiency and correctness.
// 4. However we have to use linear search to calculate the decimal part of the square root value.

//-----------------

// 01. A function to calculate the square root of the given number n.
function findSquareRoot(target) {
  let intPart = null;

  // First we will search for the "integer part" of the square root.
  for (let i = 1; i < target; i++) {
    // Checking whether current value of "i" is suitable candidate for the integer part of the square root answer.
    if (i * i <= target) {
      intPart = i;
    }
  }

  // Now, we will find the decimal part of the square root answer.
  for(let i = 1; i<9; i++){
    if((intPart+i/10)*(intPart+i/10) <= target){
      finalAnswer = intPart
    }
  }


}
