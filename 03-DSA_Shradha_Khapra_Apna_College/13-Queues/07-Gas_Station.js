/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let currentTank = 0;
    let startIndex = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        currentTank += gas[i] - cost[i];

        // If current tank is negative, we cannot reach the next station
        if (currentTank < 0) {
            // Reset the start to the next station
            startIndex = i + 1;
            // Reset current tank for the new journey
            currentTank = 0;
        }
    }

    // If total gas is less than total cost, it's impossible
    return totalGas >= totalCost ? startIndex : -1;
};