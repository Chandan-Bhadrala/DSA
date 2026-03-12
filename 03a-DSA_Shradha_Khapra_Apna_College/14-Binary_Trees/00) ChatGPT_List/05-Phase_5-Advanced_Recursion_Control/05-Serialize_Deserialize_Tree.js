// Serialize: Convert Tree to String
function serialize(root) {
  const result = [];
  
  function traverse(node) {
    if (!node) {
      result.push("#");
      return;
    }
    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }
  
  traverse(root);
  return result.join(",");
}

// Deserialize: Convert String to Tree
function deserialize(data) {
  const nodes = data.split(",");
  
  function build() {
    const val = nodes.shift();
    if (val === "#") return null;
    
    const node = new TreeNode(Number(val));
    node.left = build();
    node.right = build();
    return node;
  }
  
  return build();
}