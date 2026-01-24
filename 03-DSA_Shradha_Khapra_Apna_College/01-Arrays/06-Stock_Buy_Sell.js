/**
# Stock Buy Sell.

## Question:
1. Has to find the maximum profit that can be made after buying and selling the stock.
2. You'll be given an array, where index denotes the days and the array value denotes the stock price.

## Solution Approach:
1. 
*/

// -----------------------------

// ## Answer is found in a single pass.
function stockBuySell(arr) {
  let maxProfit = 0; // Presuming couldn't make the max profit out of the stock buy and sell.

  let minPrice = arr[0]; // Presuming minimum stock price to buy is available at the day 1.


  // i initialized to 1, as i = 0, value has already been accommodated as the minPrice.
  for (let i = 1; i < arr.length; i++) {
    minPrice = Math.min(minPrice, arr[i]); // Updating the minPrice if got a chance to buy at the lower price.

    // Calculating today's profit chance.
    let todayProfit = arr[i] - minPrice;
    
    // Updating the maximum profit value.
    maxProfit = Math.max(todayProfit, maxProfit);
  }

  return maxProfit;
}

// --- Output:
console.log(stockBuySell([1, 3, 6, 7, 0.5, 9]));
