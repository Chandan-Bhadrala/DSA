// Below is the ChatGPT code, he says return only once in the recursive code.
// Simply, compute for the parent node in the current stack and add/combine its result into the **children result**.
// Below is code showcasing what I meant to say.

// So, to summarize a recursive code must have only two return statements:
// 1. From the base case to terminate recursion and
// 2. other from the parent to the grandparent.
//    1. And in this return statement parent must return result of its node along with the result of the children result.


function countSingleChildNodes(root) {
  if (!root) return 0;

  let left = countSingleChildNodes(root.left);
  let right = countSingleChildNodes(root.right);

  let isSingle = (root.left && !root.right) || (root.right && !root.left);

  return left + right + (isSingle ? 1 : 0);
}