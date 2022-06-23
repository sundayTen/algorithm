class Solution:
    def nearestExit(self, maze: List[List[str]], entrance: List[int]) -> int:
        dxy = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        Q = collections.deque([entrance])
        ans = 0
        visit = [[False] * len(maze[i]) for i in range(len(maze))]
        while Q:
            for i in range(len(Q)):
                x, y = Q.popleft()
                if visit[x][y]:
                    continue
                if (x == 0 or y == 0 or x == len(maze) - 1 or y == len(maze[0]) - 1) and ans > 0:
                    return ans
                visit[x][y] = True
                for dx, dy in dxy:
                    rx = x + dx
                    ry = y + dy
                    if 0 <= rx < len(maze) and 0<= ry < len(maze[0]) and maze[rx][ry] == ".":
                        Q.append([rx, ry])
            ans += 1
        
        return -1