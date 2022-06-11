class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        ans = 0
        dxy = [(1, 0), (-1, 0), (0, 1), (0, -1)]    
        
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == 1:
                    break
            if grid[i][j] == 1:
                break

        stack = [(i, j)]
        visit = dict()
        while stack:
            cnt = 4
            i, j = stack.pop()
            if visit.get((i, j)):
                continue
            visit[(i, j)] = True
            for dx, dy in dxy:
                if 0 <= i+dx < len(grid) and 0 <= j+dy < len(grid[i]):
                    if grid[i+dx][j+dy] == 1:
                        stack.append((i+dx, j+dy))
                        cnt -= 1
            ans += cnt

        return ans