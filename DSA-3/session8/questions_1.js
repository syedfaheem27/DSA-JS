/* Definition for TreeNode
class TreeNode{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
*/

//1.    Validate a Binary Search Tree

//Methdo-1: Write the inorder and if that is not in ascending order, return false, else return true

//SC-O(N) two iterations - 2N and SC- O(N) for the array and if recursive stack into consideration
//SC-O(N)

/**
 *
 * @param {TreeNode} root
 * @returns {boolean}
 */

function validateBST(root) {
  let inOrder = [];

  inorderTraversal(root, inOrder);

  for (let i = 1; i < inOrder.length; i++)
    if (arr[i] < arr[i - 1]) return false;

  return true;
}

function inorderTraversal(root, arr) {
  if (!root) return;

  inorderTraversal(root.left, arr);
  arr.push(root.val);
  inorderTraversal(root.right, arr);

  return;
}

//Method-2: Optimal approach
//Only one iteration required and SC-O(1), neglecting the recursion stack

//Error Free code of the same approach

function validateBSTII(root) {
  if (root && !root.left && !root.right) return true;

  return (
    validateSubTreesII(root.left, Number.MIN_SAFE_INTEGER, root.val) &&
    validateSubTreesII(root.right, root.val, Number.MAX_SAFE_INTEGER)
  );
}

function validateSubTreesII(root, min, max) {
  if (!root) return true;

  if (root.val < min || root.val > max) return false;

  let left_boolean = validateSubTreesII(root.left, min, root.val);
  let right_boolean = validateSubTreesII(root.right, root.val, max);

  return left_boolean && right_boolean;
}

///////////////////////////////////////////////////////////

//Balance BST

/*
PROBLEM DESCRIPTION

Given the root of a binary search tree, return a balanced 
binary search tree with the same node values. If there is 
more than one answer, return any of them.

A binary search tree is balanced if the depth of the 
two subtrees of every node never differs by more than 1.
*/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function balanceBST(root) {
  let in_order = [];
  inOrderTraversal(root, in_order);

  let n = in_order.length;

  constructBST(in_order, 0, n - 1);

  return in_order[Math.floor((0 + n - 1) / 2)];
}

function inOrderTraversal(root, arr) {
  if (!root) return;

  inOrderTraversal(root.left, arr);
  arr.push(root);
  inOrderTraversal(root.right, arr);

  return;
}

function constructBST(arr, l, r) {
  if (l > r) return null;

  let mid = Math.floor((l + r) / 2);

  let left_node = constructBST(arr, l, mid - 1);
  let right_node = constructBST(arr, mid + 1, r);

  arr[mid].left = left_node;
  arr[mid].right = right_node;

  return arr[mid];
}

///////////////////////////////////////////////////////
