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
