class Solution {
    public int findJudge(int n, int[][] trust) {  
        int[] trusted = new int[n];
        int[] toTrust = new int[n];
        int answer = 0;
        //0으로 초기화
        for(int i=0; i<n; i++){
            trusted[i] = 0;
            toTrust[i] = 0;
        }
        //각자 몇명에서 믿음을 받는지, 각자 몇명을 믿는지
        for(int i=0; i<trust.length; i++){
            trusted[trust[i][1]-1]++;
            toTrust[trust[i][0]-1]++;
        }
        //n-1명에게 믿음을 받고 자신은 아무도 믿지 않을때 판사
        for(int i=0; i<n; i++){
            if(trusted[i] == n-1 && toTrust[i] == 0){
                answer = i+1;
                break;
            }
        }        
        if(answer == 0)
            return -1;
        else
            return answer;
    }
}
