/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    
    Boolean answer = false;
    
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if(root == null)
            return false;
        
        dfs(root, targetSum, root.val);
        return answer;
    }
    
    public void dfs(TreeNode root, int ts, int sum){
        if(root.left == null && root.right == null && sum == ts){
            answer = true;
            return;
        }
        if(root != null){
            if(root.left  != null) dfs(root.left,  ts, sum+root.left.val);
            if(root.right != null) dfs(root.right, ts, sum+root.right.val);
        }
    }
}
