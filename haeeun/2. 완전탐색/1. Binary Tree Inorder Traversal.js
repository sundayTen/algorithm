var inorderTraversal = function (root) {
  let answer = [];

  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    answer.push(node.val);
    dfs(node.right);
  };

  dfs(root);
  return answer;
};
