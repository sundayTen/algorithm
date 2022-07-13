//시간 줄이는 방법 생각해 보기
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int remain = 0;
        int idx = 0;
        int cnt = 0;
        
        //처음에 가능한지 체크
        remain = gas[idx] - cost[idx];
        while(remain >= 0){
            idx++;
            cnt++;
            remain += (gas[idx%gas.length] - cost[idx%gas.length]);
            if(cnt == gas.length && remain >= 0)
                return 0;
        }
        
        for(int i=0; i<gas.length-1; i++){
            //시작 없을때 다음 시작점에서 가능한지 확인
            if(gas[i] < cost[i]){
                idx = i+1;
                cnt = 0;
                remain = gas[idx] - cost[idx];
                while(remain >= 0){
                    idx++;
                    cnt++;
                    remain += (gas[idx%gas.length] - cost[idx%gas.length]);
                    if(cnt == gas.length && remain >= 0)
                        return i+1;
                }
            }
        }
        return -1;
    }
}
