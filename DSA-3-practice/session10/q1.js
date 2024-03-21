//PROBLEM 1: GENERATE A BINARY TREE FROM POST-ORDER AND IN-ORDER TRAVERSAL

/*
PROBLEM DESCRIPTION

Given postorder and inorder traversal of a tree, construct the binary tree and 
return its root. Note: You may assume that duplicates do not exist in the tree.
*/

function generateBT(postOrder, inOrder) {
  const map = new Map();
  let n = inOrder.length;
  for (let i = 0; i < n; i++) map.set(inOrder[i], i);

  let post_idx = n - 1;

  const getBinaryTree = (start, end) => {
    if (start > end) return null;

    let inorder_idx = map.get(postOrder[post_idx]);
    let root = new TreeNode(postOrder[post_idx--]);

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
  let ans = true;

  const helper = (node) => {
    if (node === null) return 0;

    let h1 = isBalancedBinaryTree(node.left);
    let h2 = isBalancedBinaryTree(node.right);

    if (Math.abs(h1 - h2) > 1) {
      ans = false;
      return;
    }

    return Math.max(h1, h2) + 1;
  };

  helper(root);

  return ans;
}
