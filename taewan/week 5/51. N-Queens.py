class Solution:
    
    isDone = False
    res = []
    
    def solveNQueens(self, n: int) -> List[List[str]]:
        
        def putOnBoard(x: int, y: int):
            if x == n:
                self.res.append(location[:])
                return
            for i in range(n):
                if True not in [i in [location[j] - x + j, location[j], location[j] + x - j] for j in range(len(location))]:
                    location.append(i)
                    putOnBoard(x + 1, i)
                    location.pop()

        self.res = []
        location = []
        putOnBoard(0, 0)
        ans = []
        for i in range(len(self.res)):
            ans.append([])
            for j in range(len(self.res[i])):
                ans[i].append("." * self.res[i][j] + "Q" + "." * (n - self.res[i][j] - 1))
        
        return ans
