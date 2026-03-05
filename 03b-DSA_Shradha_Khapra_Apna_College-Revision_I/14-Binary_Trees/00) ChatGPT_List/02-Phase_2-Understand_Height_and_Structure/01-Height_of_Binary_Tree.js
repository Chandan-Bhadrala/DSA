// Definition for a binary tree node
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * Function to calculate the height of a binary tree
 * @param {TreeNode} root
 * @return {number}
 */
const getTreeHeight = (root) => {
    // Base Case: If the tree is empty, height is 0
    if (root === null) {
        return 0;
    }

    // Recursive Case:
    // 1. Get the height of the left subtree
    const leftHeight = getTreeHeight(root.left);
    
    // 2. Get the height of the right subtree
    const rightHeight = getTreeHeight(root.right);

    // 3. Return the maximum of the two, plus 1 for the current node
    return Math.max(leftHeight, rightHeight) + 1;
};

// --- Example Usage ---

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("The height of the tree is:", getTreeHeight(root)); // Output: 3