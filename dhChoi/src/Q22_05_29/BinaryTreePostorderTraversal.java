package Q22_05_29;

import java.util.ArrayList;
import java.util.List;

public class BinaryTreePostorderTraversal {

  public static void post(TreeNode root, List<Integer> li) {
    if (root == null) {
      return;
    }
    post(root.left, li);
    post(root.right, li);

    li.add(root.val);
  }

  public List<Integer> postorderTraversal(TreeNode root) {
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
