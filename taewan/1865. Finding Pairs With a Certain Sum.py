from collections import defaultdict

class FindSumPairs:

    def __init__(self, nums1: List[int], nums2: List[int]):
        self.num1 = nums1
        self.num2 = nums2
        self.dic = defaultdict(int)
        for i in nums2:
            self.dic[i] += 1

    def add(self, index: int, val: int) -> None:
        self.dic[self.num2[index]] -= 1
        self.dic[self.num2[index] + val] += 1
        self.num2[index] += val

    def count(self, tot: int) -> int:
        return sum([self.dic[tot-i] for i in self.num1])