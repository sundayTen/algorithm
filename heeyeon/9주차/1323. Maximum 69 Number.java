class Solution {
    public int maximum69Number (int num) {
        int q1 = 0, q2 = 0, r = 0;
        int testNum = num;
        int temp = 1000;

        for(int i=0; i<4; i++){
            //처음 나타난 6 바로 9로 바꾸기
            if(testNum/temp == 6){
                temp *= 10;
                q1 = num / temp * temp;
                temp /= 10;
                q2 = 9 * temp;
                r = num % temp;
                return q1 + q2 + r;
            }else if(testNum / temp != 0){
                testNum %= temp;
            }
            temp /= 10;
        }
        
        return num;
    }
}
