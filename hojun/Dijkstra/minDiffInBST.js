const filterDuplicated = (duplicatedArray) =>
  Array.from(new Set(duplicatedArray));

const minDiffInBST = (root) => {
  const nodes = [];

  const getNode = (node) => {
    if (node === null) {
      return;
    }
    nodes.push(node.val);
    getNode(node.left);
    getNode(node.right);
  };

  getNode(root); //노드의 val만 모으기

  const duplicatedArray = nodes
    .reduce(
      (acc, cur, _, origin) => [
        ...acc,
        ...origin.map((el) => Math.abs(cur - el)),
      ],
      []
    )
    .filter((ele) => ele > 0); // 본인 제거

  //연산량 줄이기 위한 필터링
  const notDuplicated = filterDuplicated(duplicatedArray);

  return Math.min(...notDuplicated);
};
