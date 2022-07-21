class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        before = prices[0]
        ans = 0
        
        # 가격을 돌면서 이전 최소 가격보다 비싼 가격이면 그 때 바로 팔아버리고 아니라면 이전 최소 가격을 갱신한다.
        for i in prices:
            # 이전 가격보다 비싼 가격일 경우, 팔아버리고, 현재 가격을 이전 최소 가격으로 갱신
            if i - before > 0:
                ans += i - before
                before = i
            # 이전 가격보다 싸거나 같은 가격일 경우, 최소 가격을 갱신함.
            else:
                before = min(before, i)
                
        return ans