//In this we will cover two traversals of a binary tree

//1. Level Order Traversal
//2. Zig-Zag Level Order Traversal

const TreeNode = require("./TreeNode");

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
