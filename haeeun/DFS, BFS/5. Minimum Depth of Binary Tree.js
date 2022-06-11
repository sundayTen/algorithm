// 내 풀이 BFS
var minDepth = function (root) {
  let queue = [[root, 0]];
  let depth = 0;

  while (queue.length !== 0) {
    const visitNode = queue.shift();
    depth = visitNode[1];
    if (!visitNode[0]) continue;

    depth++;
    queue.push([visitNode[0].left, depth]);
    queue.push([visitNode[0].right, depth]);

    if (!visitNode[0].left && !visitNode[0].right) {
      break;
    }
  }

  return depth;
};

//DFS
var minDepth = function (root) {
  if (!root) return 0;
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

//BFS
var minDepth = function (root) {
  if (!root) return [];

  let queue = [root];
  let depth = 1;

  while (queue[0]) {
    let size = queue.length;

    while (size--) {
      let curr = queue.shift(); // dequeue
      if (!curr.left && !curr.right) return depth;

      if (curr.left) queue.push(curr.left); // enqueue
      if (curr.right) queue.push(curr.right); // enqueue
    }

    depth++;
  }
};
