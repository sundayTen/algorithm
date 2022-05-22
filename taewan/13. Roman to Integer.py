class Solution:
    def romanToInt(self, s: str) -> int:
        dic = dict()
        dic["I"] = 1
        dic["V"] = 5
        dic["X"] = 10
        dic["L"] = 50
        dic["C"] = 100
        dic["D"] = 500
        dic["M"] = 1000
        
        ans = 0
        i = 0
        while i < len(s):
            if s[i] == "I" and i+1 != len(s):
                if s[i+1] == "V" or s[i+1] == "X":
                    ans += dic[s[i+1]]-1
                    i += 2
                    continue
            if s[i] == "X" and i+1 != len(s):
                if s[i+1] == "L" or s[i+1] == "C":
                    ans += dic[s[i+1]]-10
                    i += 2
                    continue
            if s[i] == "C" and i+1 != len(s):
                if s[i+1] == "D" or s[i+1] == "M":
                    ans += dic[s[i+1]]-100
                    i += 2
                    continue
            ans += dic[s[i]]
            i += 1
            
        return ans