//PROBLEM 1: FIND THE DIAMETER OF THE BINARY TREE

/*
PROBLEM DESCRIPTION

Given the root of a binary tree, return the length of the 
diameter of the tree.

The diameter of a binary tree is the length of the longest 
path between any two nodes in a tree. This path may or may 
not pass through the root.
*/

function diameterOfBinaryTree(root) {
  let obj = {
    dia: -1,
  };

  getDiameter(obj, root);

  return obj.dia;
}

function getDiameter(obj, root) {
  if (root === null) return 0;

  let left_height = getDiameter(obj, root.left);
  let right_height = getDiameter(obj, root.right);

  obj.dia = Math.max(obj.dia, left_height + right_height);

  return Math.max(left_height, right_height) + 1;
}
