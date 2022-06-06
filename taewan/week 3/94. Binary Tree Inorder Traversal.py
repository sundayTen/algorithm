# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        ans = []
        
        def find_node(node: Optional[TreeNode]) -> None:
            if node == None:
                return
            if node.left:
                find_node(node.left)
            ans.append(node.val)
            if node.right:
                find_node(node.right)
                
        find_node(root)
        
        return ans