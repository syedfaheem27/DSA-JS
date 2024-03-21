//PROBLEM 1: GENERATE A BINARY TREE FROM POST-ORDER AND IN-ORDER TRAVERSAL

/*
PROBLEM DESCRIPTION

Given postorder and inorder traversal of a tree, construct the binary tree and 
return its root. Note: You may assume that duplicates do not exist in the tree.
*/

function generateBT(postorder, inorder) {
  const map = new Map();
  let n = inorder.length;
  for (let i = 0; i < n; i++) map.set(inorder[i], i);

  let post_idx = n - 1;

  const getBinaryTree = (start, end) => {
    if (start > end) return null;

    let inorder_idx = map.get(postorder[post_idx]);
    let root = new TreeNode(postorder[post_idx--]);

    //There is a catch - instead of going left first,
    //go to the right here as it is a post order traversal
    root.right = getBinaryTree(inorder_idx + 1, end);
    root.left = getBinaryTree(start, inorder_idx - 1);

    return root;
  };

  const root = getBinaryTree(0, n - 1);

  return root;
}

/*------------------------------------------------------*/

//PROBLEM 2: CHECK IF THE BINARY TREE IS BALANCED OR NOT

/*
PROBLEM DESCRIPTION

Implement a function to check if a binary tree is balanced. For the purposes of 
this question, a balanced tree is defined to be a tree such that the heights of 
the two subtrees of any node never differ by more than one.
*/

function isBalanced(root) {
  let isBalanced = true;

  const helper = (node) => {
    if (node === null) return 0;

    let h1 = helper(node.left);
    let h2 = helper(node.right);

    if (Math.abs(h1 - h2) > 1) {
      isBalanced = false;
      return;
    }

    return Math.max(h1, h2) + 1;
  };

  helper(root);

  return isBalanced;
}

/*------------------------------------*/

//PROBLEM 3: FIND THE KTH LARGEST ELEMENT IN THE BST

/*
PROBLEM DESCRIPTION

Given a Binary Search Tree (BST) and a positive integer k, 
find the k’th largest element in the Binary Search Tree.
*/

//Do a reverse inorder traversal
function kThLargest(root, k) {
  let num = k;

  const getKthLargest = (root) => {
    if (root === null || num < 0) return null;

    let l1 = getKthLargest(root.right);
    num--;

    if (num === 0) return root.val;

    let l2 = getKthLargest(root.left);

    return l1 ?? l2;
  };

  const res = getKthLargest(root);

  return res;
}
