class Solution {
    public int removeElement(int[] nums, int val) {
        int[] answer = nums;
        int temp = 0;
        int count = 0;
        
        for(int i=0; i<nums.length; i++){
            if(nums[i] != val){
                answer[temp] = nums[i];
                temp++;
                count++;
            }            
        } 
        nums = answer;
        return count;
    }
}
