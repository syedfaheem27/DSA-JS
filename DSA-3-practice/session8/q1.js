//PROBLEM 1: FIND THE TOP VIEW OF A BINARY TREE

class Queue {
  constructor() {
    this.queue = [];
    this.start = 0;
    this.end = 0;
    this.length = 0;
  }

  add(el) {
    this.queue[this.end++] = el;
    this.length++;
    return this;
  }

  remove() {
    if (this.isEmpty) return "The Queue is empty!";

    this.length--;
    return this.queue[this.start++];
  }

  get isEmpty() {
    return this.length === 0;
  }

  get size() {
    return this.length;
  }
}

//Approach 1: Doinf a level order traversal and storing
//the [distance,val] pairs in the map - only the first occurences

//TC O(nlogn) & SC O(n)
function topView(root) {
  if (root === null) return root;

  queue.add({
    node: root,
    distance: 0,
  });

  let map = new Map();

  while (!queue.isEmpty) {
    let { node, distance } = queue.remove();

    if (!map.has(distance)) map.set(distance, node.val);

    if (node.left !== null)
      queue.add({
        node: node.left,
        distance: distance - 1,
      });

    if (queue.right !== null)
      queue.add({
        node: root.right,
        distance: (distance = 1),
      });
  }

  return [...map.entries()].sort((a, b) => a[0] - b[0]).map((a) => a[1]);
}

//Approach 2 : Instead of sorting at the end - we keep a min distance and a max distance
// and at the end iterate from min distance to max distance and push the values from the map
//for corresponding distances into the array

function topViewI(root) {
  if (root === null) return root;

  let queue = new Queue();
  let min_distance = Number.MAX_SAFE_INTEGER;
  let max_distance = Number.MIN_SAFE_INTEGER;

  queue.add({
    node: root,
    distance: 0,
  });

  let map = new Map();

  while (!queue.isEmpty) {
    let { node, distance } = queue.remove();

    min_distance = Math.min(min_distance, distance);
    max_distance = Math.max(max_distance, distance);

    if (!map.has(distance)) map.set(distance, node.val);

    if (node.left !== null)
      queue.add({
        node: node.left,
        distance: distance - 1,
      });

    if (node.right !== null)
      queue.add({
        node: node.right,
        distance: distance + 1,
      });
  }

  let res = [];

  for (let i = min_distance; i <= max_distance; i++) res.push(map.get(i));

  return res;
}

/*----------------------------------------*/

//PROBLEM 2: FIND THE LCA OF THE BINARY TREE

/*
PROBLEM DESCRIPTION

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. 
LCA between two nodes p and q is defined as the lowest node in the tree that has both p and 
q as descendants (where we allow a node to be a descendant of itself)
*/

function lowestCommonAncestor(root, p, q) {
  if (root === null) return null;

  if (root === p || root === q) return root;

  let l1 = lowestCommonAncestor(root.left, p, q);
  let l2 = lowestCommonAncestor(root.right, p, q);

  if (l1 !== null && l2 !== null) return root;

  if (l1 !== null) return l1;
  if (l2 !== null) return l2;

  return null;
}

/*---------------------------------------------*/

//PROBLEM 3: CONSTRUCT A BINARY TREE FROM PRE-ORDER AND IN-ORDER
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
/*
PROBLEM DESCRIPTION

Given preorder and inorder traversal of a tree, construct the binary tree.

Note: You may assume that duplicates do not exist in the tree.
*/

//TODO: Do the same question when duplicates are also present

function constructBinaryTree(preorder, inorder) {
  let map = new Map();

  let n = inorder.length;
  let pre_idx = 0;

  for (let i = 0; i < n; i++) map.set(inorder[i], i);

  const constructTree = (start, end) => {
    if (start > end) return null;

    let idx = map.get(inorder[pre_idx]);
    let root = new TreeNode(preorder[pre_idx++]);

    root.left = constructTree(start, idx - 1);
    root.right = constructTree(idx + 1, end);

    return root;
  };
}

/*---------------------------------*/

//PROBLEM 4 : BOUNDARY LEVEL TRAVERSAL OF A BINARY TREE

/*
PROBLEM DESCRIPTION

Given a binary tree, print boundary nodes of the binary tree Anti-Clockwise 
starting from the root. The boundary includes left boundary, leaves, and right boundary in order.
*/

function boundaryLevelTraversal(root) {
  if (root === null) return [];

  //This case needs to be added if there's only one node
  //In that case we will push it first in the main function
  //and then since in leafNodeTraversal function, it will be pushed
  //into the array again because it's also a leaf node
  if (root !== null && root.left === null && root.right === null)
    return [root.val];

  let res_arr = [];

  res_arr.push(root.val);

  leftSubTreeTraversal(root.left, res_arr);
  leafNodeTraversal(root, res_arr);
  rightSubTreeTraversal(root.right, res_arr);

  return res_arr;
}

function leftSubTreeTraversal(root, arr) {
  if (root === null) return;

  if (root.left !== null) {
    arr.push(root.val);
    leftSubTreeTraversal(root.left, arr);
    return;
  }

  if (root.right !== null) {
    arr.push(root.val);
    leftSubTreeTraversal(root.right, arr);
    return;
  }

  return;
}

function leafNodeTraversal(root, arr) {
  if (root === null) return;

  if (root.left === null && root.right === null) {
    arr.push(root.val);
    return;
  }

  leafNodeTraversal(root.left, arr);
  leafNodeTraversal(root.right, arr);
}

function rightSubTreeTraversal(root, arr) {
  if (root === null) return;

  if (root.right !== null) {
    rightSubTreeTraversal(root.right, arr);
    arr.push(root.val);
    return;
  }

  if (root.left !== null) {
    rightSubTreeTraversal(root.left, arr);
    arr.push(root.val);
    return;
  }

  return;
}
