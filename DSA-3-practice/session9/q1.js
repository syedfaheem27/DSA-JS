//PROBLEM 1: VALIDATE A BINARY SEARCH TREE

/*
PROBLEM DESCRIPTION

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

    The left subtree of a node contains only nodes with values less than the node's value.

    The right subtree of a node contains only nodes with values greater than the node's value.

    Both the left and right subtrees must also be binary search trees.

*/

//Brute force - Get inorder and check if it's sorted in ascending order.
// If yes - valid else invalid
//TC O(N) & SC O(N) - excluding auxillary space

//Optimal Approach - TC O(N) & SC O(1)
function validateBinarySearchTree(root) {
  let min = Number.MIN_SAFE_INTEGER;
  let max = Number.MAX_SAFE_INTEGER;

  return (
    isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
  );
}

function isValid(root, min, max) {
  if (root === null) return true;

  if (root.val < min || root.val > max) return false;

  let l1 = isValid(root.left, min, root.val);
  let l2 = isValid(root.right, root.val, max);

  return l1 && l2;
}
