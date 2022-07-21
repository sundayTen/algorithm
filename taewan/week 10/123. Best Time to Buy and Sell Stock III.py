class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        leftTransactions = [0] * n
        rightTransactions = [0] * n
        start = prices[0]
        end = prices[-1]
        
        # 최대 2번만 트랜잭션을 진행할 수 있어서 앞에서 부터 현재 가격까지의 얻을 수 있는 최대 이익을 leftTransactions에 저장하고,
        # 뒤에서 부터 현재 가격까지의 얻을 수 있는 최대 이익을 rightTransactions에 저장한다.
        # 최대 이익을 저장하는 방법은 121번과 같다.
        for i in range(1, n):
            start = min(start, prices[i])
            leftTransactions[i] = max(leftTransactions[i-1], prices[i] - start)
            end = max(end, prices[n - i - 1])
            rightTransactions[n - i - 1] = max(rightTransactions[n - i], end - prices[n - i - 1])
        
        ans = 0
        # 앞에서 저장한 최대이익을 활용하여 값을 구한다.
        # leftTransactions이 i-1일 때는 0 ~ i-1 까지의 최대 이익값이고, rightTransactions이 i일 때는 i ~ n - 1까지의 최대 이익값이기 때문에
        # 밑과 같은 식이 나오고 1 ~ n-1을 루프 돌려서 각 값들의 최대 값을 구하면 해당 문제의 답이 나온다.
        for i in range(1, n):
            ans = max(ans, leftTransactions[i-1] + rightTransactions[i])

        return max(ans, leftTransactions[-1])