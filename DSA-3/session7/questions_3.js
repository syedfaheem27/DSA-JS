//Find Inorder successor of a given node

/*
In a Binary Search Tree, the Inorder Successor of a given node is defined as the node with the 
smallest value greater than the value of the given node.
*/

//If there is no successor return -1

//Method-1: TC-O(N) 2 iterations and SC-O(N)

/**
 * @param {TreeNode} root
 * @param {TreeNode} givenNode
 * @return {TreeNode}
 */
function inOrderSuccessor(root, givenNode) {
  let in_order = [];
  let successor = -1;
  inOrderTraversal(root, in_order);

  for (let i = 0; i < in_order.length; i++) {
    if (in_order[i] === givenNode && i < in_order.length)
      successor = in_order[i + 1];
  }

  return successor;
}

function inOrderTraversal(root, arr) {
  if (!root) return;

  inOrderTraversal(root.left, arr);
  arr.push(root);
  inOrderTraversal(root.right, arr);

  return;
}

// Optimised approach - TC - O(N) and SC-O(1) if we don't take recursion stack into consideration

function inOrderSuccessorI(root, givenNode) {
  let successor = new TreeNode(Number.MAX_SAFE_INTEGER);
  let hasSuccessor = false;

  const inOrderTraversal = function (root) {
    if (!root) return;

    inOrderTraversal(root.left);

    if (root.val > givenNode.val) {
      successor = successor.val < root.val ? successor : root;
      hasSuccessor = true;
    }

    inOrderTraversal(root.right);

    return;
  };

  inOrderTraversal(root);

  return hasSuccessor ? successor : new TreeNode(-1);
}

////////////////////////////////////////////////////////////////
