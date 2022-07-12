class Solution {
    public int maxArea(int[] height) {
        int start = 0;
        int end = height.length -1;
        int w = 0, h = 0;
        int container = 0;
        
        while(start<end){
            w = end - start;
            h = Math.min(height[start], height[end]);
            if(w*h > container)
                container = w*h;
            if(height[end] > height[start]){
                start++;
            }else
                end--;
        }
        return container;
    }
}
