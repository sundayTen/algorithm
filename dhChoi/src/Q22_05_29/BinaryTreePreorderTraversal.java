package Q22_05_29;

import java.util.ArrayList;
import java.util.List;

public class BinaryTreePreorderTraversal {

  public static void post(TreeNode root, List<Integer> li) {
    if (root == null) {
      return;
    }

    li.add(root.val);

    post(root.left, li);
    post(root.right, li);

  }

  public List<Integer> preorderTraversal(TreeNode root) {
    List<Integer> li = new ArrayList<>();
    post(root, li);
    return li;
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
