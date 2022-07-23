class Solution:
    def climbStairs(self, n: int) -> int:
        dp = [0] * (n+2)
        dp[1], dp[2] = 1, 1
        for i in range(n):
            dp[i+1] += dp[i]
            dp[i+2] += dp[i]
        return dp[n]