from itertools import combinations

class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        ans = sum(nums)
        for i in range(2, len(nums) + 1):
            for comb in combinations(nums, i):
                ans += reduce(lambda a,b: a^b, comb)
        
        return ans