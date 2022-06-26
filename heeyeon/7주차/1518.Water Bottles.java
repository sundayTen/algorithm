class Solution {
    public int numWaterBottles(int numBottles, int numExchange) {
        int answer = 0;
        int full = numBottles;
        int empty = 0;
        
        while(true){
            answer += full;
            empty += full;              //새병이 빈병으로 변경
            full = empty / numExchange; //빈병으로 된 후 새병으로 변경
            empty -= full*numExchange;  //빈병을 새병으로 변경한 후 빈병 수 
            if(full + empty < numExchange){
                answer += full;
                break;
            }
        }
        return answer;
    }
}