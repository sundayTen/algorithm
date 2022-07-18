class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> answer = new ArrayList<>();
        List<Integer> prev = new ArrayList<>();
        
        for(int i = 0; i < numRows; i++){
            if(i > 1)
                prev = answer.get(i-1); 
            List<Integer> temp = new ArrayList<>();
            for(int j = 0; j <= i; j++){
                if(j == 0 || j == i)
                    temp.add(1);
                else{
                    temp.add(prev.get(j-1) + prev.get(j));
                }
            }
            answer.add(temp);
        }
        
        return answer;
        
    }
}
