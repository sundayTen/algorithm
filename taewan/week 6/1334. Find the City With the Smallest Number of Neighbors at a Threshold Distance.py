class Solution:
    def findTheCity(self, n: int, edges: List[List[int]], distanceThreshold: int) -> int:
        res = [0] * n
        dic = collections.defaultdict(list)
        for f, t, w in edges:
            dic[f].append((w, t))
            dic[t].append((w, f))
        
        for i in range(n):
            S = [(0, i)]
            visit = [float('inf')] * n
            visit[i] = False
            while S:
                w, t = S.pop()
                if w >= distanceThreshold:
                    continue

                for nw, nt in dic[t]:
                    if visit[nt] > nw + w:
                        S.append((nw + w, nt))
                        visit[nt] = nw + w
            for j in visit:
                if j <= distanceThreshold:
                    res[i] += 1

        ans = 0
        for i in range(n):
            if res[i] <= res[ans]:
                ans = i
        return ans
                    