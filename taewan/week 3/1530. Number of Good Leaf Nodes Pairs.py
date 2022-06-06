# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from collections import defaultdict, deque

class Solution:
    def countPairs(self, root: TreeNode, distance: int) -> int:
        root_id = id(root)
        stack = [root]
        leaf_nodes = []
        graph = defaultdict(list)
        while stack:
            node = stack.pop()
            if node.left:
                stack.append(node.left)
                graph[id(node)].append(id(node.left))
                graph[id(node.left)].append(id(node))
                
            if node.right:
                stack.append(node.right)
                graph[id(node)].append(id(node.right))
                graph[id(node.right)].append(id(node))
                
            if node.left == None and node.right == None:
                leaf_nodes.append(id(node))
                
        ans = set()
        for start_node in leaf_nodes:
            connected_nodes = deque(graph[start_node][:])
            visit = dict()
            visit[start_node] = True
            i = 0
            while i < distance:
                i += 1
                for count in range(len(connected_nodes)):
                    connected_node = connected_nodes.popleft()
                    visit[connected_node] = True
                    if i <= distance and len(graph[connected_node]) == 1 and root_id != connected_node:
                        ans.add(tuple(sorted([start_node, connected_node])))
                    for next_node in graph[connected_node]:
                        if not visit.get(next_node):
                            connected_nodes.append(next_node)

        return len(ans)