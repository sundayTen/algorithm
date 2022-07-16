class Solution:
    def maxArea(self, height: List[int]) -> int:
        start, end, sh, eh, ans = 0, len(height) - 1, 0, 0, 0
        
        while start < end:
            if sh > height[start]:
                start += 1
                continue
            
            if eh > height[end]:
                end -= 1
                continue
            
            if height[start] == height[end]:
                sh, eh = height[start], height[end]
                ans = max(ans, sh * (end - start))
                start += 1
                end -= 1
            elif height[start] > height[end]:
                sh, eh = height[start], height[end]
                ans = max(ans, eh * (end - start))
                end -= 1
            else:
                sh, eh = height[start], height[end]
                ans = max(ans, sh * (end - start))
                start += 1
                
        return ans