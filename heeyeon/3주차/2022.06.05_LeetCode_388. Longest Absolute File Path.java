class Solution {
    public int lengthLongestPath(String input) {
        int answer = 0;
        int count = 0;
        int temp = 0;
        int len = 0;
        HashMap<Integer,Integer> list = new HashMap<Integer,Integer>();

        //\n으로 주어진 문자열 분리
        String[] path = input.split("\\n");
        //파일 형식 문자열 존재하지 않으면 end
        if(!input.contains("."))
            return answer;        
        
        for(int i=0; i<path.length; i++){
            count = 0;  temp = 0;
            //탭 갯수로 깊이 구별
            for(int j=0; j<path[i].length(); j++){
                if(path[i].charAt(j) == '\t'){
                    count++;
                }
            }
            
            path[i].replace("\\t","");
            
            if(count != 0)
                len = path[i].length() - count + 1;
            else
                len = path[i].length() - count;
            //깊이와 길이 해쉬맵에 추가
            list.put(count,len);
            //파일 형식인 단어일 경우 길이 저장
            if(path[i].contains(".")){
                for(int j=0; j<=count; j++){
                    temp += list.get(j);
                }
            }
            //파일 형식인 발견되면 길이 비교하여 저장
            if(temp > answer)
                answer = temp;
        }    
        return answer;
    } 
}
