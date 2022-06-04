// // DFS랑 똑같다.
// let visited = new Map();

const { TreeNode } = require(".");

// const visit = (node: TreeNode) => {
//   visited.set(node.val, true);
//   console.log(`${node.val} 노드 방문 완료`);
// };

// function preorderTraversal(root: TreeNode | null): number[] {
//   let parent = root.val;

//   const travel = (node: TreeNode | null) => {
//     // 방문처리
//     visit(node);

//     // 왼쪽 노드가 비었으면 이동
//     if (node.left !== null) {
//         travel(node.left);
//       return
//     }
//   };

//   return [];
// }

const nodes = [];

const createNode = (nodeArray) => {
  nodeArray.forEach((node, index) => {
    if (node) {
      const node = new TreeNode(node);
    }
    return null;
  });
};

var preorderTraversal = function (root) {
  if (!root) return [];
  const res = [];
  const helper = (node) => {
    if (!node) return;
    res.push(node.val);
    helper(node.left);
    helper(node.right);
  };
  helper(root);
  return res;
};
