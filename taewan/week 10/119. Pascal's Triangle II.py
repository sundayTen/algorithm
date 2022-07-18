class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        pascal = [[1] * (rowIndex+1) for i in range((rowIndex+1))]
        for i in range(2, rowIndex+1):
            for j in range(1, i):
                pascal[i][j] = pascal[i-1][j] + pascal[i-1][j-1]
        return pascal[rowIndex]
            