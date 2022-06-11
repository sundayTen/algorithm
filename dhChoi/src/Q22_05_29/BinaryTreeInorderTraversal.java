package Q22_05_29;

import java.util.ArrayList;
import java.util.List;

public class BinaryTreeInorderTraversal {

  List<Integer> response = new ArrayList<>();

  public List<Integer> inorderTraversal(TreeNode root) {
    test(root);
    System.out.println(response);

    return response;
  }

  public void test(TreeNode test) {
    if (test == null) {
      return;
    }
    if (test.left == null) {
      response.add(test.val);
      if (test.right == null) {
        return;
      }
      test(test.right);
    } else {
      test(test.left);
      response.add(test.val);
      test(test.right);
    }

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
