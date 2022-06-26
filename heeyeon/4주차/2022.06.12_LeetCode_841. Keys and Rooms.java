class Solution {
    List<Integer> keys = new ArrayList<>();
    boolean answer = true;
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        keys.add(0);
        visit(rooms, 0);
        for(int i=0; i<rooms.size(); i++){
            if(!keys.contains(i)){
                answer = false;
                break;
            }
        }
        return answer;
    }
    public void visit(List<List<Integer>> rooms,int num){
        if(keys.contains(num)){
            for(int i=0; i<rooms.get(num).size(); i++){
                if(!keys.contains(rooms.get(num).get(i))){
                    keys.add(rooms.get(num).get(i));
                    visit(rooms,rooms.get(num).get(i));
                }                    
            }            
        }
    }
}
