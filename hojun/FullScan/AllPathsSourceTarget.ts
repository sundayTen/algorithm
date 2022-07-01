type NodeVal = number;
type Path = NodeVal[];
type Graph = Path[];

const isDoneChecker = (endNode: NodeVal) => (node: NodeVal) => endNode === node;

const allPathsSourceTarget = (graph: Graph) => {
    const end = graph.length - 1;
    const foundPath: Path[] = [];

    const isDone = isDoneChecker(end);

    const findPath = (path: Path, targetIndex: NodeVal) => {
        const newPath = [...path, targetIndex];

        if (isDone(targetIndex)) {
            foundPath.push(newPath);
        }

        graph[targetIndex].forEach((node) => findPath(newPath, node));
    };

    graph[0].forEach((node) => findPath([0], node));

    return foundPath;
};
