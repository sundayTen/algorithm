class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function minDepth(root: TreeNode | null): number {
  let answer = 1;
  let mins = [];

  const travel = (node: TreeNode | null): number => {
    if (!node) return;

    if (node.left || node.right) {
      answer += 1;
    } else {
      mins.push(answer);
      return;
    }

    travel(node.left);
    travel(node.right);
  };

  travel(root);

  const min = mins.length > 0 ? Math.min(...mins) : 0;

  return min;
}
