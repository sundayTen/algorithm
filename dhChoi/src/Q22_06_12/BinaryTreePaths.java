package Q22_06_12;

import java.util.ArrayList;
import java.util.List;

public class BinaryTreePaths {

  List<String> response = new ArrayList<>();

  public List<String> binaryTreePaths(TreeNode root) {
    dfs(root, "");
    return response;
  }

  public void dfs(TreeNode root, String path) {
    if (root == null) {
      return;
    }

    if (root.left == null && root.right == null) {
      response.add(path + root.val);
      return;
    }

    dfs(root.left, path + root.val + "->");
    dfs(root.right, path + root.val + "->");
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
