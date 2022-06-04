class Solution:
    def calPoints(self, ops: List[str]) -> int:
        S = []
        for i in ops:
            if i == "C":
                S.pop()
            elif i == "D":
                S.append(int(S[-1] * 2))
            elif i == "+":
                S.append(int(S[-1]) + int(S[-2]))
            else:
                S.append(int(i))

        return sum(S)