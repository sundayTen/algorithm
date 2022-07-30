class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        a = sum(nums)
        if a % 2:
            return False
        
        b = a // 2
        dp = [0] * (b+1)
        for i in nums:
            for j in range(b, -1, -1):
                if j-i < 0:
                    break
                dp[j] = max(dp[j], dp[j-i] + i)

        return dp[-1] == b