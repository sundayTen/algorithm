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
class Solution {//다른 풀이 생각해보기
    ArrayList<Integer> list = new ArrayList<>();
    public int minDiffInBST(TreeNode root) {
        int answer = Integer.MAX_VALUE;
        list.add(root.val);
        //리프노드 갈때까지 노드 계속 저장
        dfs(root);
        //마지막 리프노드에서 차이 구해서 넣기
        for(int i=0; i<list.size(); i++)
            for(int j=i+1; j<list.size(); j++)
                if(Math.abs(list.get(i) - list.get(j)) < answer)
                    answer = Math.abs(list.get(i) - list.get(j));
        //차이의 가장 작은값 리턴
        return answer;
    }
    public void dfs(TreeNode root){
        if(root != null){
            if(root.left != null){
                list.add(root.left.val);
                dfs(root.left);
            }
            if(root.right != null){
                list.add(root.right.val);
                dfs(root.right);
            }
        }
    }
}