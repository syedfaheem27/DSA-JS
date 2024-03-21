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
