//Problem 1
//Same Tree

/*
Problem Description

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  if (p === null && q === null) return true;

  if (p === null) return false;

  if (q === null) return false;

  if (p.val !== q.val) return false;

  let bool1 = isSameTree(p.left, q.left);
  let bool2 = isSameTree(p.right, q.right);

  return bool1 && bool2;
}

/*----------------------------------------------------*/

//Problem 2
//Insert into a BST

/*
Problem Description

You are given the root node of a binary search tree (BST) and a value 
to insert into the tree. Return the root node of the BST after the 
insertion. It is guaranteed that the new value does not exist in 
the original BST.

Notice that there may exist multiple valid ways for the insertion, 
as long as the tree remains a BST after insertion. You can return any of them.
*/

//Brute Force Approach

//Create an inorder array and then insert the value into it at it's
//appropriate position and then construct the tree from the modified
//inorder array.

//TC O(N) & SC O(N)
//Run time 3N

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = function (root, val) {
  let inorder = [];

  populateInOrder(root, inorder);
  let temp;
  let temp_2 = val;
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] < val) continue;

    temp = inorder[i];
    inorder[i] = temp_2;
    temp_2 = temp;
  }

  inorder[inorder.length] = temp_2;

  let res = constructBinaryTree(inorder, 0, inorder.length - 1);
  return res;

  //TODO: Optimise
};

/**
 * @param {TreeNode} root
 * @param {number[]} inorder
 */

const populateInOrder = function (root, inorder) {
  if (root === null) return;

  populateInOrder(root.left, inorder);
  inorder.push(root.val);
  populateInOrder(root.right, inorder);
};

/**
 * @param {number[]} inorder
 * @param {number} start
 * @param {number} end
 */

const constructBinaryTree = function (inorder, start, end) {
  if (start > end) return null;

  let mid = Math.floor((start + end) / 2);
  let root = new TreeNode(inorder[mid]);

  root.left = constructBinaryTree(inorder, start, mid - 1);
  root.right = constructBinaryTree(inorder, mid + 1, end);

  return root;
};
