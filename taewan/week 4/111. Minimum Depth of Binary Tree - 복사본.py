# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque

class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        depth = 0
        Q = deque([root])
        if not root:
            return depth
        while Q:
            depth += 1
            for i in range(len(Q)):
                node = Q.popleft()
                if not node.left and not node.right: return depth
                if node.left: Q.append(node.left)
                if node.right: Q.append(node.right)
            
            