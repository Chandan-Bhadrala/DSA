class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function countLeafNodes(root) {
    // Base Case 1: Empty tree
    if (root === null) {
        return 0;
    }

    // Base Case 2: Leaf node (no children)
    if (root.left === null && root.right === null) {
        return 1;
    }

    // Recursive Step: Sum the leaves of both subtrees
    return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// --- Example Usage ---
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Total Leaf Nodes:", countLeafNodes(root)); 
// Output: 3 (Nodes 4, 5, and 3 are leaves)
