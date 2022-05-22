class Solution:
    def scoreOfParentheses(self, s: str) -> int:
        s = s.replace("()","1")
        st = [[] for i in range(len(s))]
        cnt = 0
        for i in s:
            if i == ")":
                st[cnt-1].append(sum(st[cnt]) * 2)
                st[cnt] = []
                cnt -= 1
            elif i == "(":
                cnt += 1
            else:
                st[cnt].append(int(i))
        return sum(st[0])