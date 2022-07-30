class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        check = [[False] * n for i in range(n)]
        for i in range(n):
            check[i][i] = True
        
        semiAns = (0, 1)
        for i in range(1, n):
            for j in range(n - i):
                if s[j] == s[j+i] and (check[j+1][j+i-1] or  j+1 > j+i-1):
                    check[j][j+i] = True
                    semiAns = (j, j+i+1)
        
        return s[semiAns[0]:semiAns[1]]