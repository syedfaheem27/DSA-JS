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

/*-----------------------------*/

//PROBLEM 2 : RIGHT VIEW OF A BINARY TREE

//APPROACH - 1 : TC O(N) & SC O(N)

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

function rightView(root) {
  let queue = new Queue();

  queue.add(root);
  let res = [];

  while (!queue.isEmpty) {
    let len = queue.size;
    let temp = [];

    for (let i = 0; i < len; i++) {
      let node = queue.remove();

      if (node.left !== null) queue.add(node.left);

      if (node.right !== null) queue.add(node.right);

      temp.push(node.val);
    }

    res.push(temp[temp.length - 1]);
  }

  return res;
}

//APPROACH 2 : BETTER APPROACH IN TERMS OF SPACE

function rightViewI(root) {
  if (root === null) return [];

  let queue = new Queue();
  let res = [];

  queue.add(root);

  while (!queue.isEmpty) {
    let len = queue.size;

    for (let i = 0; i < len; i++) {
      let removed_node = queue.remove();

      if (removed_node.left !== null) queue.add(removed_node.left);

      if (removed_node.right !== null) queue.add(removed_node.right);

      if (i === len - 1) res.push(removed_node.val);
    }
  }

  return res;
}
