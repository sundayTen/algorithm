class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minPrice = float('inf')
        ans = 0
        
        # 주어진 가격을 순서대로 돌면서 최소 값을 갱신하고, 각 가격에 현재 최소 값을 뺀 값과 ans 값을 비교하여 갱신한다.
        for i in prices:
            # (현재 가격 - 최소 가격) vs (계속 갱신되는 ans) 중 큰 값으로 ans를 갱신
            ans = max(ans, i - minPrice)
            # 최소 가격 갱신
            minPrice = min(minPrice, i)
        return ans