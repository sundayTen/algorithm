var postorderTraversal = function (root) {
  if (!root) return [];
  const res = [];
  const helper = (node) => {
    if (!node) return;
    helper(node.left);
    helper(node.right);
    res.push(node.val);
  };
  helper(root);
  return res;
};
