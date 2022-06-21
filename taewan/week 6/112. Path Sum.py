# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        S = [root] if root != None else []
        while S:
            node = S.pop()
            if node.left == None and node.right == None and node.val == targetSum:
                return True
            
            if node.left:
                node.left.val += node.val
                S.append(node.left)
            if node.right:
                node.right.val += node.val
                S.append(node.right)
        
        return False
                