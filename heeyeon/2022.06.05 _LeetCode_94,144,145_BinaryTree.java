//94.inorder - 중위순회 => left - root - right
class Solution {
    List<Integer> list;
    
    public List<Integer> inorderTraversal(TreeNode root) {
        list = new ArrayList<Integer>();
        inorder(root);
        return list;
    }
    
    public void inorder(TreeNode node) {
        if(node != null) {
            if(node.left != null) inorder(node.left);
            list.add(node.val);
            if(node.right != null) inorder(node.right);
        }  
    }
}

//144.preorder - 전위순회 : root - left - right
class Solution {
    List<Integer> answer;
    
    public List<Integer> preorderTraversal(TreeNode root) {
        answer = new ArrayList<Integer>();
        preorder(root);
        return answer;
    }
    
    public void preorder(TreeNode node){
        if(node != null){
            answer.add(node.val);
            if(node.left != null)  preorder(node.left);
            if(node.right  != null)  preorder(node.right);            
        }
    }
}

//145.postorder - 후위순회 : left - right - root
class Solution {
    List<Integer> answer;
    
    public List<Integer> postorderTraversal(TreeNode root) {
        answer = new ArrayList<Integer>();
        postorder(root);
        return answer;
    }
        
    public void postorder(TreeNode node){
        if(node != null){
            if(node.left != null)  postorder(node.left);
            if(node.right  != null)  postorder(node.right);
            answer.add(node.val);
        }
    }
}
