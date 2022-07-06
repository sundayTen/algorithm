class Solution:
    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start: int, end: int) -> float:
        graph = collections.defaultdict(list)
        for i in range(len(edges)):
            graph[edges[i][1]].append((succProb[i], edges[i][0]))
            graph[edges[i][0]].append((succProb[i], edges[i][1]))
            
        heap = [(-cost, edge) for cost, edge in graph[start]]
        heapq.heapify(heap)
        mem = [0] * n
        
        while heap:
            cost, edge = heapq.heappop(heap)
            mem[edge] = -cost
            
            if mem[end]:
                return -cost
            
            for ncost, nedge in graph[edge]:
                if mem[nedge] < - ncost * cost:
                    heapq.heappush(heap, (ncost * cost, nedge))
        
        return 0