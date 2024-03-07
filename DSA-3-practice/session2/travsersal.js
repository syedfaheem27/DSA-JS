//In this we will cover two traversals of a binary tree

//1. Level Order Traversal
//2. Zig-Zag Level Order Traversal

const TreeNode = require("./TreeNode");
const { Queue } = require("../queue/queue");

//Sample tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

root.right.left.left = new TreeNode(8);

//Level Order Traversal

//Brute force approach - Calculate the height of the tree and print the nodes at each level

function calcHeight(root) {
  if (root === null) return 0;

  let left_height = calcHeight(root.left);
  let right_height = calcHeight(root.right);

  if (left_height >= right_height) return left_height + 1;
  else return right_height + 1;
}

function levelOrderI(root) {
  let res_arr = [];

  let height = calcHeight(root);
  for (let i = 1; i <= height; i++) {
    pushNodeVal({
      root,
      level: i,
      arr: res_arr,
    });
  }

  return res_arr;
}

function pushNodeVal({ root, level, arr }) {
  if (level <= 0 || root === null) return;

  if (level === 1) {
    arr.push(root.val);
    return;
  }

  pushNodeVal({
    root: root.left,
    level: level - 1,
    arr,
  });

  pushNodeVal({
    root: root.right,
    level: level - 1,
    arr,
  });

  return;
}

/*---------------------------------------------------*/

//Efficient Approach

//Using Queues

//TC O(N) & SC O(N)

function levelOrderII(root) {
  let queue = new Queue();
  let res_arr = [];

  queue.add(root);

  while (!queue.isEmpty) {
    let el = queue.remove();

    if (el.left !== null) queue.add(el.left);

    if (el.right !== null) queue.add(el.right);

    res_arr.push(el.val);
  }

  return res_arr;
}

/*---------------------------------------------*/

//PROBLEM 3

//A different variation

/*
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

The value of nodes at each level should be in the same array

*/

//TC O(H*N) & SC O(N) - Auxillary space
function levelOrderIII(root) {
  let res_arr = [];

  let height = calcHeight(root);
  for (let i = 1; i <= height; i++) {
    pushNodeValI({
      root,
      level: i,
      arr: res_arr,
      height,
      curr_level: 1,
    });
  }

  return res_arr;
}

function pushNodeValI({ root, level, arr, height, curr_level }) {
  if (curr_level > level || root === null || curr_level > height) return;

  if (curr_level === level) {
    if (!arr[level - 1]) arr[level - 1] = [];

    arr[level - 1].push(root.val);
    return;
  }

  pushNodeValI({
    root: root.left,
    level,
    height,
    curr_level: curr_level + 1,
    arr,
  });

  pushNodeValI({
    root: root.right,
    level,
    height,
    curr_level: curr_level + 1,
    arr,
  });

  return;
}

//Using Queues

// Input: root = [3, 9, 20, null, null, 15, 7];
// Output: [[3], [9, 20], [15, 7]];

//TC O(N) & SC O(N)
function levelOrderIV(root) {
  if (root === null) return [];

  let queue = new Queue();
  let res_arr = [];

  queue.add(root);

  while (!queue.isEmpty) {
    let count = queue.length;
    let row = [];

    for (let i = 0; i < count; i++) {
      let el = queue.remove();

      if (el.left !== null) queue.add(el.left);

      if (el.right !== null) queue.add(el.right);

      row.push(el.val);
    }

    res_arr.push(row);
  }
  return res_arr;
}

/*----------------------------------*/

//PROBLEM 4

//ZIG ZAG LEVEL ORDER TRAVERSAL

/*
PROBLEM DESCRIPTION

Given a binary tree, return the zigzag level order traversal of 
its nodes' values.

(i.e. from left to right, then right to left for the next level 
  and alternate for every level).
*/

//TC O(N) & SC O(N)
function zigzagLevelOrderTraversal(root) {
  let queue = new Queue();
  let res_arr = [];
  queue.add(root);
  let height = 1;
  while (!queue.isEmpty) {
    let len = queue.length;
    let row = [];
    for (let i = 0; i < len; i++) {
      let el = queue.remove();

      if (el.left !== null) queue.add(el.left);

      if (el.right !== null) queue.add(el.right);

      row.push(el.val);
    }
    if (height % 2 === 0) row.reverse();
    res_arr.push(...row);

    height++;
  }

  console.log(res_arr);
}
