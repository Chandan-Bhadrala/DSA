/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var bottomView = function(root) {
    if (!root) return [];

    // Map to store: column -> last seen node value
    let columnMap = new Map();
    // Queue for BFS: [node, column]
    let queue = [[root, 0]];
    
    // Track min and max columns to avoid sorting the map later
    let minCol = 0;
    let maxCol = 0;

    while (queue.length > 0) {
        let [node, col] = queue.shift();

        // ALWAYS overwrite. The last node processed in a 
        // column during BFS is the one closest to the bottom.
        columnMap.set(col, node.val);

        minCol = Math.min(minCol, col);
        maxCol = Math.max(maxCol, col);

        // Standard BFS logic
        if (node.left) queue.push([node.left, col - 1]);
        if (node.right) queue.push([node.right, col + 1]);
    }

    // Construct the result from leftmost to rightmost column
    let result = [];
    for (let i = minCol; i <= maxCol; i++) {
        result.push(columnMap.get(i));
    }

    return result;
};