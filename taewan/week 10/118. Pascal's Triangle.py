class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        # 1로 이루어진 삼각형을 만든다. (2차원 배열로)
        pascal = [[1] * (i+1) for i in range(numRows)]
        
        # 삼각형을 2번째 로우부터 (numRows로 정해준 로우 - 1)까지 돈다. 
        for i in range(2, numRows):
            # 1 ~ i-1 의 숫자까지 각 로우에서 탐색하여 한 단계 윗 로우(i-1)에서 j와 j-1 인덱스의 숫자를 더하여 해당 (i, j)에 저장한다.
            for j in range(1, i):
                pascal[i][j] = pascal[i-1][j] + pascal[i-1][j-1]
        
        return pascal