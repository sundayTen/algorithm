var hasPathSum = function (root, targetSum) {
  let sums = [];

  const findSum = (node, prevValue) => {
    if (node === null) {
      return;
    }

    const newValue = prevValue + node.val;

    if (node.left === null && node.right === null) {
      sums.push(newValue);
      return;
    }

    findSum(node.left, newValue);
    findSum(node.right, newValue);
  };

  findSum(root, 0);

  return sums.findIndex((sum) => sum === targetSum) >= 0;
};
