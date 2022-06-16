var postorderTraversal = function (root) {
  let answer = [];

  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    answer.push(node.val);
  };

  dfs(root);
  return answer;
};
