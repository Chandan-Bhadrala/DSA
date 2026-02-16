/**
 * @param {number[][]} mat
 * @returns {number}
 */
class Solution {
    celebrity(mat) {
        const n = mat.length;
        let candidate = 0;

        // Step 1: Find the potential candidate
        for (let i = 1; i < n; i++) {
            // If candidate knows i, candidate cannot be a celebrity.
            // i becomes the new potential candidate.
            if (mat[candidate][i] === 1) {
                candidate = i;
            }
            // If candidate does NOT know i, i cannot be a celebrity.
            // We keep the current candidate.
        }

        // Step 2: Verify the candidate
        for (let i = 0; i < n; i++) {
            if (i !== candidate) {
                // A celebrity must not know anyone (row must be all 0s)
                // Everyone must know the celebrity (column must be all 1s except diagonal)
                if (mat[candidate][i] === 1 || mat[i][candidate] === 0) {
                    return -1;
                }
            }
        }

        return candidate;
    }
}