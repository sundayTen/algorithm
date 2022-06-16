var binaryTreePaths = function (root) {
  let answer = [];

  const dfs = (node, path) => {
    const currentPath = [...path];
    currentPath.push(node.val);

    if (node.left) dfs(node.left, currentPath);
    if (node.right) dfs(node.right, currentPath);
    if (!node.left && !node.right) answer.push(currentPath.join("->"));
  };

  dfs(root, answer);
  return answer;
};
