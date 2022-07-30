class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        nums = [1] + nums + [1]
        n = len(nums)
        dp = [[0] * n for i in range(n)]
        
        for i in range(2, n):
            for j in range(n - i):
                l = i + j
                for k in range(j + 1, l):
                    dp[j][l] = max(dp[j][l], dp[j][k] + dp[k][l] + nums[j] * nums[k] * nums[l])

        return dp[0][n-1]
    