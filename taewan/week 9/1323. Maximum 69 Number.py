class Solution:
    def maximum69Number (self, num: int) -> int:
        return num if str(num).find('6') == -1 else num + 3 * (10 ** (len(str(num)) - str(num).find('6') - 1))