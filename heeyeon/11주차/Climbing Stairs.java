class Solution {
    public int climbStairs(int n) {
        int n1 = 1, n2 = 1;
        int answer = n1;
        for(int i=0; i<n-1; i++){
            answer = n1 + n2;
            n1 = n2;
            n2 = answer;
        }
        return answer;
    }
}
