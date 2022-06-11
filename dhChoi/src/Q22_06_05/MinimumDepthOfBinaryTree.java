package Q22_06_05;

public class MinimumDepthOfBinaryTree {

  public int minDepth(TreeNode root) {
    if (root == null) {
      return 0;
    }
    int response = test(root);
    return response;
  }

  public int test(TreeNode root) {
    if (root == null) {
      return Integer.MAX_VALUE;
    }

    if (root.left == null && root.right == null) {
      return 1;
    }

    int left = test(root.left);
    int right = test(root.right);
    return (left < right ? left : right) + 1;
  }

  public class TreeNode {

    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
      this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
}
