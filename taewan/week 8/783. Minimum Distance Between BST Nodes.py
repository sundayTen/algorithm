# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDiffInBST(self, root: Optional[TreeNode]) -> int:
        res = []
        ans = float('inf')
        
        def load(node):
            if node:
                res.append(node.val)
                load(node.left)
                load(node.right)
                
        load(root)
        res.sort()
        for i in range(len(res)-1):
            ans = min(ans, res[i+1] - res[i])
            
        return ans