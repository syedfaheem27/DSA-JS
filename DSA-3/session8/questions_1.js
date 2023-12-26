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

//TODO: why is it failing? Find Out?
function validateBSTI(root) {
  if (root && !root.left && !root.right) return true;

  return (
    validateSubTreesI(root.left, root) && validateSubTreesI(root.right, root)
  );
}

function validateSubTreesI(root, parent) {
  if (!root) return true;

  if (root.left?.val > root.val) return false;

  if (root.right?.val < root.val || root.right?.val > parent.val) return false;

  let left_boolean = validateSubTreesI(root.left, root);
  let right_boolean = validateSubTreesI(root.right, root);

  return left_boolean && right_boolean;
}

////////////////////////////////

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
