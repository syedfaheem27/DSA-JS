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

/////////////////////////////////////////////////////////

//CONSTRUCT A BINARY TREE FROM PRE-ORDER AND IN-ORDER

// PROBLEM DESCRIPTION

// Given preorder and inorder traversal of a tree,
// construct the binary tree.

// Note: You may assume that duplicates do not
// exist in the tree.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
/**
 *
 * @param {number[]} preOrder
 * @param {number[]} inOrder
 * @return {TreeNode}
 */

const preorder = [8, 4, 6, 7, 5, 2];
const inorder = [6, 4, 7, 8, 5, 2];

function constructBinaryTreeFromPreAndIn(preOrder, inOrder) {
  let preIndex = 0;
  let map = new Map();
  let n = preOrder.length;

  for (let i = 0; i < n; i++) map.set(inOrder[i], i);

  let constructTree = function (preOrder, start, end, map) {
    if (start > end) return null;

    let root = new TreeNode(preOrder[preIndex++]);
    let idx = map.get(root.val);

    root.left = constructTree(preOrder, start, idx - 1, map);
    root.right = constructTree(preOrder, idx + 1, end, map);

    return root;
  };

  let root = constructTree(preOrder, 0, n - 1, map);

  return root;
}

constructBinaryTreeFromPreAndIn(preorder, inorder);

///////////////////////////////////////////

//BOUNDARY TRAVERSAL OF A BINARY TREE IN ANTI CLOCKWISE DIRECTION

//PROBLEM DESCRIPTION

/*
Given a binary tree, print boundary nodes of the binary tree Anti-Clockwise 
starting from the root. The boundary includes left boundary, leaves, and right 
boundary in order.

The left boundary is defined as the path from the root to the left-most node. 
The right boundary is defined as the path from the root to the right-most node. 
If the root doesn’t have a left subtree or right subtree, then the root itself is 
left boundary or right boundary. Note this definition only applies to the input 
binary tree, and not to any subtrees.

The left-most node is defined as a leaf node you could reach when you always 
firstly travel to the left subtree if it exists. If not, travel to the right 
subtree. Repeat until you reach a leaf node.

The right-most node is also defined in the same way with left and right exchanged.
*/

/* 1. Find the left boundary nodes except the leaf nodes(do a pre-order traversal).
   2. Get the boundary leaves (can use any traversal - pre,in or post order), handle the
      edge case when there is only a single node in a tree.
   3. Do a bottom up traversal of the right boundary nodes except the leaf nodes
      Here, we need to do a post order traversal because we are moving from bottom to top
*/

/**
 *
 * @param {TreeNode} root
 * @returns {number[]}
 */

function boundaryTraversal(root) {
  if (!root) return [];

  if (root && !root.left && !root.right) return [root.val];

  let resArr = [];
  resArr.push(root.val);

  leftBoundaryTraversal(root.left, resArr);
  leafNodesTraversal(root, resArr);
  rightBoundaryTraversal(root.right, resArr);

  return resArr;
}

function leftBoundaryTraversal(root, arr) {
  if (!root) return;

  if (root.left) {
    arr.push(root.val);
    leftBoundaryTraversal(root.left);
  } else if (root.right) {
    arr.push(root.val);
    leftBoundaryTraversal(root.right);
  }

  return;
}

function leafNodesTraversal(root, arr) {
  if (!arr) return;

  //Either of the below traversals will work

  // if (!root.left && !root.right) arr.push(root); pre order

  leafNodesTraversal(root.left, arr);

  // if (!root.left && !root.right) arr.push(root); in order

  leafNodesTraversal(root.right, arr);

  if (!root.left && !root.right) arr.push(root.val); //post order

  return;
}

function rightBoundaryTraversal(root, arr) {
  if (!arr) return;

  if (root.right) {
    rightBoundaryTraversal(root.right);
    arr.push(root.val);
  } else if (root.left) {
    rightBoundaryTraversal(root.left);
    arr.push(root.val);
  }
}
