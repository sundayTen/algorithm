//그리디 방식인지...확인 필요!
class Solution {
    public boolean canJump(int[] nums) {
        int cnt = 0;
        int once = 0;
        int check = 0;
        int recheck = 0;
        boolean jump = false;
        
        //0존재할 때 카운트하고 카운트한 수 보다 큰 수가 이전에 존재하는지 체크
        for(int i=0; i<nums.length-1; i++){
            if(nums[i] == 0){
                cnt++;
                once++;
            }
            if(cnt > 0 && (nums[i+1] != 0 || i+1 == nums.length-1)){
                check++;
                for(int j = i-cnt; j>= 0; j--){
                    if(nums[j] > cnt++){
                        jump = true;
                        recheck++;
                        break;
                    }
                }
                cnt = 0;
                jump = false;
            }
        }
        
        if(check == recheck || once == 0)
            jump = true;
        
        return jump;
    }
}
