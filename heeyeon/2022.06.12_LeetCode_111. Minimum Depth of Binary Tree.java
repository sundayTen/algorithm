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
    List<Integer> list = new ArrayList<Integer>();//노드의 깊이 저장
    public int minDepth(TreeNode root) {
        int answer = 0;
        deptN(root,0);
        list.sort(Comparator.naturalOrder());
        if(root != null)
            answer = list.get(0);
        return answer;
    }
    
    public void deptN(TreeNode node, int dept){
        if(node != null){
            dept++;
            if(node.right != null) deptN(node.right,dept);
            if(node.left != null) deptN(node.left,dept);
            if(node.right == null && node.left == null)
                list.add(dept);
        }            
    }
}
