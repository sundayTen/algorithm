var inorderTraversal = function (root) {
  if (!root) return [];
  const res = [];
  const helper = (node) => {
    if (!node) return;
    helper(node.left);
    res.push(node.val);
    helper(node.right);
  };
  helper(root);
  return res;
};
