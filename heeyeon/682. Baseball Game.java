import java.util.Stack;
import java.lang.Integer;

class Solution {
    public int calPoints(String[] ops) {
        int answer = 0;
        int len = 0;
        int n1, n2 = 0;
        Stack<Integer> nums = new Stack<>();
        //배열에 계산되는 값 넣기
        for(int i=0; i<ops.length; i++){
            if(ops[i].equals("D")){
                nums.push(nums.peek()*2);
            }else if(ops[i].equals("C")){
                nums.pop();
            }else if(ops[i].equals("+")){
                n1 = nums.peek();
                nums.pop();
                n2 = nums.peek();
                nums.push(n1);
                nums.push(n1+n2);
            }else{
                n1 = Integer.parseInt(ops[i]);
                nums.push(n1);
            }
        }        
        //스택의 길이 저장
        len = nums.size();        
        //저장된 숫자 더하기
        for(int i=0; i<len; i++){
            answer += nums.peek();
            if(!nums.empty())
                nums.pop();
        }        
        return answer;        
    }
}
