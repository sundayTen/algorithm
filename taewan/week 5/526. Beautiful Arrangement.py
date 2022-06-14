class Solution:
    def countArrangement(self, n: int) -> int:
        
        def findBeautifulArray(num, idx):
            if num % idx != 0 and idx % num != 0:
                return 0
            
            if idx == n:
                return 1

            cnt = 0
            usableNumber[num] = False
            for i in range(1, n + 1):
                if usableNumber[i]:
                    cnt += findBeautifulArray(i, idx + 1)
            usableNumber[num] = True
            
            return cnt
        
        
        ans = 0
        usableNumber = [True] * (n+1)
        for i in range(1, n + 1):
            ans += findBeautifulArray(i, 1)
            
        return ans