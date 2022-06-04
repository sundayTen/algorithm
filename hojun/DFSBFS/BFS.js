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

/**
 * @returns 모든 노드를 순회했다면 true를 리턴합니다.
 */
const isDone = () => visitedNodes.every((visited) => visited);

/**
 * * 노드에 방문했다면, 방문 완료로 표기합니다.
 * @param {*} i 방문한 노드 번호.
 */
const checkNode = (i) => {
  visitedNodes[i] = true;
  console.log(`${i}번째 노드 방문 완료`);
};

/**
 * * shift : pop left
 * * pop : pop right
 */
const BFS = () => {
  // * 시작점 : 1번 노드. 큐에 넣어놓고 시작.
  const queue = [1];
  checkNode(1);

  while (!isDone()) {
    const v = queue.shift();
    for (let i of graph[v]) {
      if (!visitedNodes[i]) {
        queue.push(i);
        checkNode(i);
      }
    }
  }
};

BFS();
