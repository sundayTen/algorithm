class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        dic = dict()
        S = [node]
        while S:
            next_node = S.pop()
            if next_node == None or dic.get(id(next_node)):
                continue
            if next_node.neighbors:
                S.extend(next_node.neighbors)
            dic[id(next_node)] = Node(next_node.val, None)
        
        visit = dict()
        S = [node]
        while S:
            next_node = S.pop()
            if next_node == None or visit.get(id(next_node)):
                continue
            visit[id(next_node)] = True
            if next_node.neighbors:
                S.extend(next_node.neighbors)
            dic[id(next_node)].neighbors = [dic[id(i)] for i in next_node.neighbors]
            
        return dic.get(id(node))