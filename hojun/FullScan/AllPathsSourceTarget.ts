type NodeVal = number;
type Path = NodeVal[];
type Graph = Path[];

const isDone = (endNode: NodeVal, node: NodeVal) => endNode === node;

const allPathsSourceTarget = (graph: Graph) => {
  const end = graph.length - 1;
  const foundPath: Path[] = [];

  const findPath = (path: Path, targetIndex: NodeVal) => {
    const newPath = [...path, targetIndex];

    if (isDone(end, targetIndex)) {
      foundPath.push(newPath);
    }

    graph[targetIndex].forEach((node) => findPath(newPath, node));
  };

  graph[0].forEach((node) => findPath([0], node));

  return foundPath.filter((path) => path[0] === 0);
};
