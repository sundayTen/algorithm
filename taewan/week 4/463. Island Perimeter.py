class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        ans = 0
        dxy = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == 1:
                    for dx, dy in dxy:
                        if 0 <= i+dx < len(grid) and 0 <= j+dy < len(grid[i]):
                            if grid[i+dx][j+dy] == 0:
                                ans += 1
                        else:
                            ans += 1
        return ans