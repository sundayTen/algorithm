class Solution:
    def canJump(self, nums: List[int]) -> bool:
        n = len(nums)
        energy = 0
        for i in range(n):
            if energy == -1:
                return False
            if i + nums[i] > n - 2:
                return True
            energy = max(energy, nums[i])
            energy -= 1
            