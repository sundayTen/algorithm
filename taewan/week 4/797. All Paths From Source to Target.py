from collections import defaultdict

class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        
        def findRoute(startIndex: int):
            if dic[startIndex]:
                return
            if startIndex == len(graph)-1:
                dic[startIndex].append([startIndex])
                
            for i in graph[startIndex]:
                findRoute(i)
                dic[startIndex].extend([[startIndex] + arr for arr in dic[i]])
        
        dic = defaultdict(list)
        findRoute(0)
        
        return dic[0]