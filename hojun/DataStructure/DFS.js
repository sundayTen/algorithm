const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

const visitedNodes = Array(graph.length).fill(false);
visitedNodes[0] = true;

const checkNode = (i) => {
  visitedNodes[i] = true;
  console.log(`${i}번째 노드 방문 완료`);
};

/**
 * v번째 노드를 방문했을 때를 처리하는 DFS Recursive함수
 * @param {*} v
 */
const DFS = (v) => {
  checkNode(v);

  for (let i of graph[v]) {
    if (!visitedNodes[i]) {
      DFS(i);
    }
  }
};

DFS(1);
