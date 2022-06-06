from collections import deque

class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        if k == 1:
            return n
        arr = deque(filter(lambda x: x % k, range(1, n+1)))
        if len(arr) == 1:
            return arr.pop()
        
        for i in range(k - n % k):
            arr.append(arr.popleft())
        arr.pop()
        for i in range(len(arr)-1):
            for i in range(k):
                arr.append(arr.popleft())
            arr.pop()
            
        return arr.pop()


class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        S = [False] * n
        d = k-1
        cnt = 0
        cnt_n = k
        while cnt <= n:
            if S[d] == True:
                d = (d+1)%n
                cnt += 1
                continue
            cnt = 0
            if cnt_n == k:
                S[d] = True
                ans = d+1
                cnt_n = 0
            d = (d+1)%n
            cnt_n += 1
            
        return ans