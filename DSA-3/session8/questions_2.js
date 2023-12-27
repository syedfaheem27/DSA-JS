/*
Definition for TreeNode
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next =null;
        this.parent = null;
    }
}
*/

//FIND Kth SMALLEST ELEMENT IN A BINARY SEARCH TREE

/*
PROBLEM DESCRIPTION

Given a binary search tree, write a function to find 
the node with the kth smallest value in it and return its value.

Note: You may assume that k is always valid, 1 ≤ k ≤ BST's total 
elements.
*/

//Method-1: Brute force - inorder traversal and push elements in the array
//Then iterate over the array and return el where i===k-1
//TC-O(N) 2 iterations basically and SC-O(N)

//Optimised approach

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallestElementInABst(root, k) {
  let ans;
  let count = 0;

  const searchElement = function (root) {
    if (!root || count >= k) return;

    searchElement(root.left, count);

    count++;

    if (count === k) ans = root.val;

    searchElement(root.right, count);

    return;
  };

  searchElement(root);

  return ans;
}

//////////////////////////////////////////////////////////

//FIND THE Kth lARGEST ELEMENT IN A BST

//Appraoch -1 : Similar to approach 1 above, just while traversing the array
//return the element where i===n-k

//Optimised approach

//Approach - 2: Do a reverse in order traversal and keep count

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

function kthLargestElement(root, k) {
  let ans;
  let count = 0;

  const searchElement = function (root) {
    if (!root || count >= k) return;

    searchElement(root.right);
    count++;

    if (count === k) ans = root.val;

    searchElement(root.left);

    return;
  };

  searchElement(root);

  return ans;
}

/////////////////////////////////////////////

//FIND LOWEST COMMON ANCESTOR IN A BST

//TC-O(N) and SC-O(1) if we exclude the recursion stack

function lowestCommonAncestorInBST(root, p, q) {
  let lca;

  const findLCA = function (root, p, q) {
    if (!root) return null;

    if (root === p || root === q) return root;

    let l1 = findLCA(root.left, p, q);
    let l2 = findLCA(root.right, p, q);

    if (l1 && l2) return root;

    if (l1) return l1;

    if (l2) return l2;

    return null;
  };

  lca = findLCA(root, p, q);

  return lca;
}
