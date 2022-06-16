var preorderTraversal = function (root) {
  let answer = [];

  const dfs = (node) => {
    if (!node) return;
    answer.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);
  return answer;
};
