//첫번째 풀이: 배열을 만들어 내는게 아니라 노드를 복제하는 거였음
var cloneGraph = function (node) {
  let answer = [];
  const pointValue = node.val;
  let searchValue = 0;
  let beforeValue = node.val;

  while (pointValue !== searchValue) {
    answer[node.val - 1] = [node.neighbors[0].val, node.neighbors[1].val];

    if (node.neighbors[0].val === beforeValue) {
      beforeValue = node.val;
      node = node.neighbors[1];
    } else {
      beforeValue = node.val;
      node = node.neighbors[0];
    }

    searchValue = node.val;
  }

  return answer;
};

//두번째 풀이: new Node 에서 이해안됨
var cloneGraph = function (node) {
  let answer = {};

  const clone = (node) => {
    if (!node) return node;
    if (!answer[node.val]) {
      answer[node.val] = new Node(node.val);
      answer[node.val].neighbors = node.neighbors.map((neighbor) =>
        clone(neighbor)
      );
    }
    return answer[node.val];
  };

  return clone(node);
};
