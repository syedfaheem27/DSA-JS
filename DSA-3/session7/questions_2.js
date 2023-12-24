//FIND LCA IN BINARY TREE

//A bit less optimal - TC-O(N) in all the cases that means our code will
//go through every individual nodes - an optimal approach will be to return
//when we found either of the two given nodes. In that case, for the worst case
//TC - O(N)

//PROBLEM DESCRIPTION

/*
Given a binary tree, find the lowest common ancestor (LCA) of 
two given nodes in the tree. LCA between two nodes p and q is 
defined as the lowest node in the tree that has both p and q 
as descendants (where we allow a node to be a descendant
of itself)
*/

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function commonAncestor(root, p, q) {
  let ans = { value: null };

  leftAndRightAncestor(root, ans, p, q);

  return ans.value;
}

function leftAndRightAncestor(root, ans, p, q) {
  if (!root) return null;

  let left_node = leftAndRightAncestor(root.left, ans, p, q);
  let right_node = leftAndRightAncestor(root.right, ans, p, q);

  if (
    (left_node && right_node) ||
    ((left_node || right_node) && (root === p || root === q))
  ) {
    ans.value = root;
    return null;
  }

  if (left_node) return left_node;

  if (right_node) return right_node;

  if (root === p) return p;

  if (root === q) return q;

  return null;
}

/////////////////////////////////////////

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//OPTIMAL APPROACH
//It returns as soon as it founds either of the node

function commonAncestorI(root, p, q) {
  if (!root) return null;

  if (root === p || root === q) return root;

  let left_node = commonAncestorI(root.left, p, q);
  let right_node = commonAncestorI(root.left, p, q);

  if (left_node && right_node) return root;

  if (left_node) return left_node;

  if (right_node) return right_node;

  return null;
}
