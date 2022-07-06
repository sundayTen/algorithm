class Solution:
    def minCost(self, grid: List[List[int]]) -> int:
        dxy = [(0,0), (0,1), (0,-1), (1,0), (-1,0)]
        mem = [[float('inf')] * len(grid[i]) for i in range(len(grid))]
        
        heap = [(0,0,0)]
        endx = len(grid)-1
        endy = len(grid[0])-1
        while heap:
            cost, x, y = heapq.heappop(heap)
            mem[-x][-y] = cost
            if mem[endx][endy] != float('inf'):
                return cost
            
            for i in range(1, 5):
                nx = -x + dxy[i][0]
                ny = -y + dxy[i][1]
                ncost = cost + (grid[-x][-y] != i)
                if 0 <= nx <= endx and 0 <= ny <= endy and mem[nx][ny] > ncost:
                    heapq.heappush(heap, (ncost, -nx, -ny))