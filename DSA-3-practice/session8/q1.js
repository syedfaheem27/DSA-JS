//PROBLEM 1: FIND THE TOP VIEW OF A BINARY TREE

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

//Approach 1: Doinf a level order traversal and storing
//the [distance,val] pairs in the map - only the first occurences

//TC O(nlogn) & SC O(n)
function topView(root) {
  if (root === null) return root;

  queue.add({
    node: root,
    distance: 0,
  });

  let map = new Map();

  while (!queue.isEmpty) {
    let { node, distance } = queue.remove();

    if (!map.has(distance)) map.set(distance, node.val);

    if (node.left !== null)
      queue.add({
        node: node.left,
        distance: distance - 1,
      });

    if (queue.right !== null)
      queue.add({
        node: root.right,
        distance: (distance = 1),
      });
  }

  return [...map.entries()].sort((a, b) => a[0] - b[0]).map((a) => a[1]);
}

//Approach 2 : Instead of sorting at the end - we keep a min distance and a max distance
// and at the end iterate from min distance to max distance and push the values from the map
//for corresponding distances into the array

function topViewI(root) {
  if (root === null) return root;

  let queue = new Queue();
  let min_distance = Number.MAX_SAFE_INTEGER;
  let max_distance = Number.MIN_SAFE_INTEGER;

  queue.add({
    node: root,
    distance: 0,
  });

  let map = new Map();

  while (!queue.isEmpty) {
    let { node, distance } = queue.remove();

    min_distance = Math.min(min_distance, distance);
    max_distance = Math.max(max_distance, distance);

    if (!map.has(distance)) map.set(distance, node.val);

    if (node.left !== null)
      queue.add({
        node: node.left,
        distance: distance - 1,
      });

    if (node.right !== null)
      queue.add({
        node: node.right,
        distance: distance + 1,
      });
  }

  let res = [];

  for (let i = min_distance; i <= max_distance; i++) res.push(map.get(i));

  return res;
}
