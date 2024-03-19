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

/*----------------------------------------------*/

//PROBLEM 2: BALANCE A BST

/*
PROBLEM DESCRIPTION

Given the root of a binary search tree, return a balanced binary search tree 
with the same node values. If there is more than one answer, return any of them.

A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.
*/

//Get the inorder array and make a BST out of it
function balanceBST(root) {
  let in_order = [];

  inOrderBST(root, in_order);

  let balanced_root = createBalancedBST(0, in_order.length - 1, in_order);

  return balanced_root;
}

function inOrderBST(root, arr) {
  if (root === null) return;

  inOrderBST(root.left);
  arr.push(root.val);
  inOrderBST(root.right, arr);

  return;
}

function createBalancedBST(start, end, in_order) {
  if (start > end) return null;

  let mid = Math.floor((start + end) / 2);
  let root = new TreeNode(in_order[mid]);

  root.left = createBalancedBST(start, mid - 1, in_order);
  root.right = createBalancedBST(mid + 1, end, in_order);

  return root;
}
