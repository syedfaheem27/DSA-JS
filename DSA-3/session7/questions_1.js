//TOP VIEW OF A BINARY TREE

/*
PROBLEM DESCRIPTION

You are given a binary tree. You need to find the nodes 
in order of left to right which will be visible when 
the tree is viewed from the top.
*/

/*
Definition for TreeNode
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next =null;
        this.parent = null;
    }
}
*/

class Pair {
  constructor(node, dist) {
    this.node = node;
    this.dist = dist;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
    this.next = null;
  }

  add(node, dist) {
    let new_node = new Pair(node, dist);
    if (!this.head) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      this.tail.next = new_node;
      this.tail = new_node;
    }
    this._size++;

    return this;
  }

  remove() {
    if (this.head === null) return "The Queue is empty!";

    let removed_node = this.head;
    this.head = this.head.next;
    this._size--;

    return removed_node;
  }

  get size() {
    return this._size;
  }
  get isEmpty() {
    return this._size === 0 ? true : false;
  }
}

/**
 * @param {TreeNode} head
 * @return {number[]}
 */

function topViewBinaryTree(root) {
  let queue = new Queue();
  queue.add(root, 0);

  let map = new Map();

  while (!queue.isEmpty) {
    let removed_pair = queue.remove();
    let dist = removed_pair.dist;
    let removed_node = removed_pair.node;

    if (removed_node.left) queue.add(removed_node.left, dist - 1);

    if (removed_node.right) queue.add(removed_node.right, dist + 1);

    if (!map.has(dist)) map.set(dist, removed_node);
  }

  let resArr = [];

  for (let [key, value] of map)
    resArr.push({
      dist: key,
      value: value.val,
    });

  return resArr.sort((a, b) => a.dist - b.dist).map((el) => el.value);
}

// assign root node a distance of 0 and the left child -1 and right child +1
//Now, nodes having the same dist value will fall in a same straight vertical line
//TC-O(nlogn) and SC-O(n)

/////////////////////////////////////////////////////////////

//Method:2

//Instead of pushing obejcts into the array and sorting and
// mapping it to a new array and returning it is time consuming.
// Instead, we can sort the map and then push the node.val in
// the array and return it

//TODO: Some test cases are failing - figure out why

//Reason - In some trees, since we are setting the values in a map
//based on the first occurence, there might be a case when the distance
//of a node from the root which has some nodes at the top level might
//be thr first to be stored in the map and as such some test cases are failing.
//To correct this we can maintain a level variable

function verticalTraverseMapStoreBuggy(root, map, dist) {
  if (!root) return;

  if (!map.has(dist)) map.set(dist, root);

  verticalTraverseMapStoreBuggy(root.left, map, dist - 1);
  verticalTraverseMapStoreBuggy(root.right, map, dist + 1);

  return;
}

function topViewIBuggy(root) {
  let map = new Map();

  verticalTraverseMapStoreBuggy(root, map, 0);

  let resArr = [];
  for (let [key, value] of map)
    resArr.push({
      dist: key,
      value: value.val,
    });

  return resArr.sort((a, b) => a.dist - b.dist).map((el) => el.value);
}

///////////////////////////////////////
//Corrected code
//TC- O(NlogN)
//SC - O(N) recursion depth

function verticalTraverseMapStore(root, map, dist, level) {
  if (!root) return;

  if (!map.has(dist) || level < map.get(dist).level)
    map.set(dist, {
      value: root.val,
      level,
    });

  verticalTraverseMapStore(root.left, map, dist - 1, level + 1);
  verticalTraverseMapStore(root.right, map, dist + 1, level + 1);

  return;
}

function topViewII(root) {
  let map = new Map();

  verticalTraverseMapStore(root, map, 0, 0);

  let resArr = [];
  for (let [key, value] of map)
    resArr.push({
      dist: key,
      value: value.value,
    });

  return resArr.sort((a, b) => a.dist - b.dist).map((el) => el.value);
}

/////////////////////////////////////
//The optimisation in the iterative and the recursive approach is
// to keep a min and max variable that will hold the distance
// of the nodes which are at the extremes from the root.

//Then we can loop from min=>max and check if the key is there in map
// and then push into the array

//Iterative method - efficient - TC-O(n)
/**
 * @param {TreeNode} head
 * @return {number[]}
 */

function topViewBinaryTreeI(root) {
  let queue = new Queue();
  queue.add(root, 0);

  let map = new Map();
  let min_dist = Number.MAX_SAFE_INTEGER;
  let max_dist = Number.MIN_SAFE_INTEGER;

  while (!queue.isEmpty) {
    let removed_pair = queue.remove();
    let dist = removed_pair.dist;

    min_dist = Math.min(min_dist, dist);
    max_dist = Math.max(max_dist, dist);

    let removed_node = removed_pair.node;

    if (removed_node.left) queue.add(removed_node.left, dist - 1);

    if (removed_node.right) queue.add(removed_node.right, dist + 1);

    if (!map.has(dist)) map.set(dist, removed_node);
  }

  let resArr = [];

  for (let i = min_dist; i <= max_dist; i++)
    if (map.has(i)) resArr.push(map.get(i).val);

  return resArr;
}

/////////////////////////////////

//TODO: some test cases are failing - figure out why
//Recursive approach - O(N)
function verticalTraverseMapStoreI(root, map, level, distInfo) {
  if (!root) return;

  let { dist, min, max } = distInfo;

  if (!map.has(dist) || level < map.get(dist).level)
    map.set(dist, {
      value: root.val,
      level,
    });

  distInfo.dist = dist - 1;
  distInfo.min = Math.min(min, dist - 1);

  //If I add the below line, the code doesn't work

  //TODO: Find out why?. Although, it is redundant, but it shouldn't
  //affect the code's output but somehow it is

  //   distInfo.max = Math.max(max, dist + 1);

  verticalTraverseMapStoreI(root.left, map, level + 1, distInfo);

  distInfo.dist = dist + 1;
  distInfo.max = Math.max(max, dist + 1);

  //If I add the below line, the code doesn't work

  //TODO: Find out why?. Although, it is redundant, but it shouldn't
  //affect the code's output but somehow it is

  //   distInfo.min = Math.min(min, dist + 1);

  verticalTraverseMapStoreI(root.right, map, level + 1, distInfo);

  return;
}

function topViewII(root) {
  let map = new Map();
  let dist_info = {
    dist: 0,
    min: Number.MAX_SAFE_INTEGER,
    max: Number.MIN_SAFE_INTEGER,
  };

  verticalTraverseMapStoreI(root, map, 0, dist_info);

  let resArr = [];

  for (let i = dist_info.min; i <= dist_info.max; i++)
    if (map.has(i)) resArr.push(map.get(i).value);

  return resArr;
}

//TODO: DO THE BOTTOM VIEW
