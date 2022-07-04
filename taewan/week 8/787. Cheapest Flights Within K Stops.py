class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        graph = collections.defaultdict(list)
        for f, t, c in flights:
            graph[f].append((c, t))
        heap = [(c, t, 0) for c, t in graph[src]]
        heapq.heapify(heap)
        cost = [(float('inf'), -1)] * n
        while heap:
            c, t, s = heapq.heappop(heap)
            cost[t] = min(cost[t], (c, s))
            if cost[dst][0] != float('inf'):
                return cost[dst][0]
            if s == k:
                continue
            for tc, tt in graph[t]:
                if c + tc >= cost[tt][0] and s + 1 > cost[tt][1]:
                    continue
                heapq.heappush(heap, (c + tc, tt, s + 1))
        
        return -1