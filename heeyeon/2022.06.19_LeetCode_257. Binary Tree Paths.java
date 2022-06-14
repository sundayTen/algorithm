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
    List<String> answer;
    public List<String> binaryTreePaths(TreeNode root) {
        answer = new ArrayList<>();
        String nodes = "";
        nodes = Integer.toString(root.val);
        DFS(root,nodes);
        return answer;
    }
    public void DFS(TreeNode root, String nodes){
        String temp = nodes;
        if(root.left == null && root.right == null){
            answer.add(nodes);
        }
        if(root != null){
            if(root.left != null){
                nodes += "->" + Integer.toString(root.left.val);
                DFS(root.left,nodes);
            }
            nodes = temp;
            if(root.right != null){
                nodes += "->" + Integer.toString(root.right.val);
                DFS(root.right,nodes);
            }
        }
    }
}
