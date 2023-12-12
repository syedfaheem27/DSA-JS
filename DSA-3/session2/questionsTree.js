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

function normalLevelOrderTraversal(root) {
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

normalLevelOrderTraversal(root);
