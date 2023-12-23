const { Queue } = require("../queue/queue");

/*
Problem Description
Given a binary tree, return the normal 
level order traversal of its nodes' values.
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
    this.parent = null;
  }
}

//Creating a binary tree
const root = new TreeNode(10);

//level-1
root.left = new TreeNode(9);
root.left.parent = root;

root.right = new TreeNode(8);
root.right.parent = root;

//level-2
root.left.left = new TreeNode(7);
root.left.left.parent = root.left;

root.left.right = new TreeNode(6);
root.left.right.parent = root.left;

root.right.left = new TreeNode(5);
root.right.left.parent = root.right;

root.right.right = new TreeNode(4);
root.right.right.parent = root.right;

function normalTraversal(root) {
  let queue = new Queue();
  let res = [];

  queue.add(root);

  while (!queue.isEmpty()) {
    let rootNode = queue.peek();

    if (rootNode.left) queue.add(rootNode.left);

    if (rootNode.right) queue.add(rootNode.right);

    res.push(queue.remove().val);
  }

  return res;
}

// normalTraversal(root);

///////////////////////////////////

/*
PROBLEM DESCRIPTION

Given a binary tree, return the zigzag level order traversal of 
its nodes' values.

(i.e. from left to right, then right to left for the next level 
  and alternate for every level).
*/

function zigzagTraversal(treeRoot) {
  let queue = new Queue();

  let resArr = [],
    level = 1;

  queue.add(treeRoot);

  while (!queue.isEmpty()) {
    let size = queue.size();
    let temp = [];

    for (let i = 0; i < size; i++) {
      let frontNode = queue.peek();

      if (frontNode.left) queue.add(frontNode.left);

      if (frontNode.right) queue.add(frontNode.right);

      temp.push(queue.remove().val);
    }

    if (level % 2 === 0) temp.reverse();

    resArr.push(temp);
    level++;
  }

  return resArr;
}

const strArr = zigzagTraversal(root);
strArr.forEach((arr) => {
  console.log(...arr);
});
