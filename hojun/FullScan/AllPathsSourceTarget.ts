type NodeVal = number;
type Path = number[];
type Graph = Path[];

const graphs: Graph[] = [
  [[1, 2], [3], [3], []],
  [[4, 3, 1], [3, 2, 4], [3], [4], []],
];
const isDone = (endNode: NodeVal, node: NodeVal) => endNode === node;

const findAllPath = (graph: Graph) => {
  const end = graph.length - 1;
  const foundPath: Path[] = [];

  const findPath = (path: Path, targetIndex: NodeVal) => {
    if (isDone(end, targetIndex)) {
      foundPath.push([...path, targetIndex]);
    }
    graph[targetIndex].forEach((node) =>
      findPath([...path, targetIndex], node)
    );
  };

  graph.slice(0, end).forEach((path, startNode) => {
    path.forEach((node) => findPath([startNode], node));
  });

  return foundPath.filter((path) => path[0] === 0);
};
