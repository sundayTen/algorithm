const isLeafNode = (node) => node.left === null && node.right === null;

function binaryTreePaths(root) {
  const paths = [];

  const DFS = (path, node) => {
    if (node === null) {
      return;
    }
    const newPath = [...path, node.val];

    if (isLeafNode(node)) {
      paths.push(newPath);
      return;
    }

    DFS(newPath, node.left);
    DFS(newPath, node.right);
  };

  DFS([], root);

  return paths.map((path) => path.join("->"));
}
