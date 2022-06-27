class Solution {
    public int[] deckRevealedIncreasing(int[] deck) {
        Queue<Integer> que = new LinkedList<>();
        int index = 0;
        int[] temp = new int[deck.length];
        int[] answer = new int[deck.length];
        int num = 0;
        //index를 초기화
        for(int i=0; i<deck.length; i++)
            que.add(i);
        //반환해야할 index 정리
        while(!que.isEmpty()){
            temp[index] = que.poll();
            index++;
            if(!que.isEmpty()){
                num = que.poll();
                que.add(num);
            }
        }
        //주어진수 오름차순
        Arrays.sort(deck);
        for(int i=0; i<temp.length; i++){
            answer[temp[i]] = deck[i];
        }
        return answer;
    }
}