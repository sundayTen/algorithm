class Solution:
    def maximalNetworkRank(self, n: int, roads: List[List[int]]) -> int:
        dic = collections.defaultdict(list)
        for x, y in roads:
            dic[x].append(y)
            dic[y].append(x)
        
        ans = 0
        for i in range(n):
            for j in range(i+1, n):
                ans = max(ans, len(dic[i]) + len(dic[j]) - int(i in dic[j]))
                
        return ans