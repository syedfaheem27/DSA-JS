/*
PROBLEM DESCRIPTION

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between 
any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the 
number of edges between them.
*/

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

//Method-1: TC-O(N^2) and SC-O(N), for balanced ones - O(logN)

/**
 * @param {TreeNode} root
 * @return {int}
 */

function diameterOfBinaryTree(root) {
  if (root === null) return 0;

  let left_height = heightOfBinaryTree(root.left);
  let right_height = heightOfBinaryTree(root.right);

  let curr_dia = left_height + right_height;

  let left_dia = diameterOfBinaryTree(root.left);
  let right_dia = diameterOfBinaryTree(root.right);

  return Math.max(curr_dia, left_dia, right_dia);
}

function heightOfBinaryTree(root) {
  if (root === null) return 0;

  return (
    Math.max(heightOfBinaryTree(root.left), heightOfBinaryTree(root.right)) + 1
  );
}

//Method-2: TC-O(N) and SC-O(N), if balanced - O(logN)

function diaHeight(root) {
  if (root === null) return { dia: 0, height: 0 };
  let { dia: left_dia, height: left_height } = diaHeight(root.left);
  let { dia: right_dia, height: right_height } = diaHeight(root.right);

  let curr_height = Math.max(left_height, right_height) + 1;
  let curr_dia = left_height + right_height;

  return { dia: Math.max(left_dia, right_dia, curr_dia), height: curr_height };
}

/**
 * @param {TreeNode} root
 * @return {int}
 */

function diameterOfBinaryTreeI(root) {
  return diaHeight(root).dia;
}

///////////////////////////////////////////////////////////

//Right view of a binary tree

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

// A different implementation of a queue would be required here as we are directly inserting nodes here

//Queue
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
    this.next = null;
  }

  add(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this._size++;

    return this;
  }

  remove() {
    if (this.head === null) return "The Queue is empty!";

    let removed_node = this.head;
    this.head = this.head.next;
    this._size--;

    return removed_node;
  }

  get size() {
    return this._size;
  }
  get isEmpty() {
    return this._size === 0 ? true : false;
  }
}

/**
 * @param {TreeNode} head
 * @return {number[]}
 */
function rightView(root) {
  if (!root) return [];

  let resArr = [];

  let queue = new Queue();
  queue.add(root);

  while (!queue.isEmpty) {
    let size = queue.size;

    for (let i = 0; i < size; i++) {
      let removed_node = queue.remove();

      if (removed_node.left) queue.add(removed_node.left);

      if (removed_node.right) queue.add(removed_node.right);

      if (i === size - 1) resArr.push(removed_node.val);
    }
  }

  return resArr;
}

///////////////////////////////////////////

//Mirror a binary tree and return the root of the mirror tree

/**
 * @param {TreeNode} root
 * @return {int}
 */
function mirrorBinaryTree(root) {
  if (!root) return;

  let temp_node = root.left;
  root.left = root.right;
  root.right = temp_node;

  mirrorBinaryTree(root.left);
  mirrorBinaryTree(root.right);

  return root;
}
